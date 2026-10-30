import {esc,img,icon,button} from './components.mjs';
export function innerHero(p){
 const service=['pagar-shera-plank','renovation','loteng','tiny-house'].includes(p.slug);
 const headings={
  'pagar-shera-plank':'Bekalan & Pemasangan<br><span>Pagar Shera Plank</span>',
  renovation:'Renovation <span>Rumah</span>',
  loteng:'LOTENG &<br><span>RUANG<br>MEZZANINE</span>',
  'tiny-house':'Ruang Kecil,<br><span>Keperluan Anda.</span>',
  'kalkulator-pagar':'Kalkulator<br><span>Pagar Shera Plank</span>',
  'tentang-kami':'Tentang<br><span>SYAZE Enterprise</span>',
  hubungi:'Hubungi<br><span>SYAZE Enterprise</span>'
 };
 const heroAsset=p.heroImage||(['kalkulator-pagar','tentang-kami','hubungi','panduan','galeri-pagar'].includes(p.slug)?'fence-white':null);
 const serviceName={'pagar-shera-plank':'Pagar Shera Plank',renovation:'Renovation',loteng:'Loteng','tiny-house':'Tiny House'}[p.slug];
 const crumbs=`<nav class="breadcrumbs" aria-label="Jejak halaman"><a href="/">Utama</a>${icon('chevron')}${p.slug.startsWith('panduan/')?'<a href="/panduan/">Panduan</a>'+icon('chevron'):''}<span>${esc(p.heading)}</span></nav>`;
 const type=p.slug==='renovation'?'hero-panorama':heroAsset?'hero-overlay':'hero-plain';
 const image=heroAsset?`<figure>${img(heroAsset,p.heading).replace('loading="lazy"','loading="eager" fetchpriority="high"')}<figcaption>Visual ilustrasi perkhidmatan.</figcaption></figure>`:'';
 return `<header class="inner-hero ${type} ${p.slug==='loteng'?'hero-loft':''}"><div class="inner-hero-copy">${crumbs}${p.slug==='tiny-house'?'<p class="eyebrow">TINY HOUSE</p>':''}<h1>${headings[p.slug]||esc(p.heading)}</h1><p class="inner-lead">${esc(p.lead)}</p>${service?`<div class="inner-actions">${button('Bincang '+serviceName,'/hubungi/?service='+encodeURIComponent(serviceName))}${p.slug==='pagar-shera-plank'?button('Kira Bilah Pagar','/kalkulator-pagar/',true):''}</div>`:''}</div>${image}</header>`;
}
