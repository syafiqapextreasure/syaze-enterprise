import {readFile,stat} from 'node:fs/promises';
import path from 'node:path';
const pages=JSON.parse(await readFile('docs/page-manifest.json','utf8'));
const routes=new Set(pages.map(p=>'/'+(p.slug?p.slug+'/':'')));
const titles=new Set(),descriptions=new Set(),errors=[];
for(const p of pages){
 const url='/'+(p.slug?p.slug+'/':'');
 const html=await readFile(path.join('dist',p.slug,'index.html'),'utf8');
 const fail=msg=>errors.push(url+': '+msg);
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 if(new Set(ids).size!==ids.length)fail('Duplicate HTML id');
 if((html.match(/<h1[ >]/g)||[]).length!==1)fail('Needs one H1');
 const title=html.match(/<title>(.*?)<\/title>/s)?.[1];
 const desc=html.match(/name="description" content="(.*?)"/)?.[1];
 if(!title||titles.has(title))fail('Missing/duplicate title'); titles.add(title);
 if(!desc||descriptions.has(desc))fail('Missing/duplicate meta description'); descriptions.add(desc);
 if(!html.includes('rel="canonical"'))fail('Missing canonical');
 try{JSON.parse(html.match(/type="application\/ld\+json">(.*?)<\/script>/s)[1])}catch{fail('Invalid JSON-LD')}
 for(const match of html.matchAll(/(?:src|href)="([^"]+)"/g)){
  const target=match[1].replaceAll('&amp;','&');if(!target.startsWith('/'))continue;
  const [pathname]=target.split(/[?#]/);
  if(pathname.endsWith('.html'))fail('Visible .html URL');
  if(pathname.endsWith('/')){if(!routes.has(pathname))fail('Broken route '+target)}
  else{try{await stat(path.join('dist',pathname))}catch{fail('Missing asset '+pathname)}}
  if(target.includes('#')){const id=target.split('#')[1];const destination=await readFile(path.join('dist',pathname,'index.html'),'utf8').catch(()=>'');if(!destination.includes(`id="${id}"`))fail('Missing anchor '+target)}
 }
 for(const match of html.matchAll(/<img\b[^>]*>/g))if(!/alt="[^"]+"/.test(match[0]))fail('Image lacks alt');
 if(!html.includes('018-956 9639')||!html.includes('shamsulanuar_yahaya@hotmail.com'))fail('Contact facts missing');
}
if(errors.length){console.error(errors.join('\n'));process.exitCode=1}else console.log(`PASS: ${pages.length} pages, unique metadata, JSON-LD, internal routes/anchors, image assets and business contacts.`);
