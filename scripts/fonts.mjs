import {mkdir,writeFile} from 'node:fs/promises';
const dir=new URL('../public/fonts/',import.meta.url); await mkdir(dir,{recursive:true});
const ua='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36';
let output='';
for(const [family,file] of [['Roboto','roboto'],['Roboto Condensed','roboto-condensed']]){
 const css=await (await fetch('https://fonts.googleapis.com/css2?family='+family.replaceAll(' ','+')+':wght@400;500;600;700;800;900&display=swap',{headers:{'User-Agent':ua}})).text();
 const blocks=[...css.matchAll(/\/\* latin \*\/\s*(@font-face\s*\{[^}]+\})/g)].map(m=>m[1]);
 const unique=new Map();
 for(const block of blocks){const url=block.match(/url\(([^)]+)\)/)[1]; if(!unique.has(url)){const name=file+'-'+unique.size+'.woff2'; await writeFile(new URL(name,dir),Buffer.from(await(await fetch(url)).arrayBuffer())); unique.set(url,name);} output+=block.replace(url, '/fonts/'+unique.get(url))+'\n';}
 if(!blocks.length)throw new Error('Latin font CSS not found: '+family);
}
await writeFile(new URL('../public/fonts.css',import.meta.url),output);
await writeFile(new URL('LICENSE.txt',dir),await(await fetch('https://raw.githubusercontent.com/google/fonts/main/ofl/robotocondensed/OFL.txt')).text());
console.log('Self-hosted fonts downloaded.');
