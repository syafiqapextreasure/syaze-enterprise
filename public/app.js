import {calculateFence,calculatorMessage,whatsappURL} from './calculator.mjs';

const menu = document.querySelector('#menu-toggle');
const sidebar = document.querySelector('#site-sidebar');
const shade = document.querySelector('#menu-shade');
function toggleMenu(open, restore = false) {
  document.body.classList.toggle('menu-open', open);
  if(menu) { menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu'); }
  if(shade) shade.hidden = !open;
  if(sidebar) sidebar.inert = innerWidth <= 900 && !open;
  const main = document.querySelector('#main');
  if(main) main.inert = open;
  if(open) sidebar?.querySelector('nav a')?.focus();
  else if(restore) menu?.focus();
}
menu?.addEventListener('click', () => toggleMenu(menu.getAttribute('aria-expanded') !== 'true'));
shade?.addEventListener('click', () => toggleMenu(false,true));
document.addEventListener('keydown', event => {
  if(!document.body.classList.contains('menu-open')) return;
  if(event.key === 'Escape') { toggleMenu(false,true); return; }
  if(event.key === 'Tab') {
    const links = [menu,...sidebar.querySelectorAll('a[href]')].filter(el => el.getClientRects().length);
    const first = links[0], last = links.at(-1);
    if(event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if(!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});
matchMedia('(min-width:901px)').addEventListener('change', () => toggleMenu(false));
toggleMenu(false);

document.querySelectorAll('[data-whatsapp-form]').forEach(form => {
  const query = new URLSearchParams(location.search);
  const selected = query.get('service') || query.get('servis');
  if(selected && [...form.elements.service.options].some(option => option.value === selected)) form.elements.service.value = selected;
  form.addEventListener('submit', event => {
    event.preventDefault();
    if(!form.reportValidity()) return;
    const data = new FormData(form);
    const message = `Salam SYAZE Enterprise, saya ingin berbincang tentang ${data.get('service')}.\nNama: ${String(data.get('name')).trim()}\nLokasi: ${String(data.get('location')).trim()}\nKeperluan: ${String(data.get('details')).trim()}`;
    location.assign(whatsappURL(message));
  });
});
document.querySelectorAll('[name="home-service"]').forEach(input => input.addEventListener('change', () => {
  document.querySelector('#home-whatsapp').href = whatsappURL(`Salam, saya ingin berbincang tentang ${input.value}.`);
}));

const calculator = document.querySelector('#fence-calculator');
if(calculator) {
  let result;
  const update = () => {
    const error = document.querySelector('#calc-error');
    const button = document.querySelector('#calc-whatsapp');
    try {
      result = calculateFence(Object.fromEntries(new FormData(calculator)));
      for(const el of document.querySelectorAll('[data-dimension]')){const field=el.dataset.dimension;el.textContent=calculator.elements.namedItem(field).value+(['length','height'].includes(field)?' m':' mm');}
      document.querySelector('#calc-base').textContent = result.base.toLocaleString('ms-MY');
      document.querySelector('#calc-total').textContent = result.total.toLocaleString('ms-MY');
      document.querySelector('#calc-cut-length').textContent = result.height + ' m';
      error.hidden = true; button.disabled = false;
    } catch(e) {
      result = null; error.textContent = e.message; error.hidden = false; button.disabled = true;
      document.querySelector('#calc-base').textContent = '—'; document.querySelector('#calc-total').textContent = '—';
    }
  };
  calculator.addEventListener('input', update);
  calculator.addEventListener('submit', event => event.preventDefault());
  document.querySelector('#calc-whatsapp').addEventListener('click', () => { if(result) location.assign(whatsappURL(calculatorMessage(result))); });
  update();
}

const filters = [...document.querySelectorAll('[data-filter]')];
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  let count = 0;
  document.querySelectorAll('[data-colour]').forEach(item => {
    item.hidden = button.dataset.filter !== 'all' && item.dataset.colour !== button.dataset.filter;
    if(!item.hidden) count++;
  });
  const status = document.querySelector('#gallery-status');
  if(status) status.textContent = `${count} visual dipaparkan.`;
}));

const search = document.querySelector('#faq-search');
search?.addEventListener('input', () => {
  const query = search.value.trim().toLocaleLowerCase('ms-MY');
  let count = 0;
  document.querySelectorAll('[data-search-item]').forEach(item => {
    item.hidden = !item.textContent.toLocaleLowerCase('ms-MY').includes(query);
    if(!item.hidden) count++;
  });
  document.querySelector('#faq-search-status').textContent = query ? `${count} bahagian dijumpai${count ? '.' : '. Cuba kata kunci lain atau hubungi kami.'}` : '';
});

const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const hero = document.querySelector('.hero-media img');
const topButton = document.querySelector('.back-top');
let scheduled = false;
function onScroll() {
  if(scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    const y = scrollY;
    if(topButton) topButton.hidden = y < 650;
    if(hero && !reduced.matches && innerWidth > 600 && y < 1100) hero.style.transform = `translateY(${Math.min(y * .12,90)}px) scale(1.025)`;
    scheduled = false;
  });
}
addEventListener('scroll',onScroll,{passive:true});
topButton?.addEventListener('click', () => { scrollTo({top:0,behavior:reduced.matches?'instant':'smooth'}); document.querySelector('#main')?.focus({preventScroll:true}); });
if(!reduced.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if(entry.isIntersecting) { entry.target.classList.add('reveal'); observer.unobserve(entry.target); }
  }), {threshold:.08});
  document.querySelectorAll('.resource-card,.service-row,.home-about,.inner-content>.section').forEach(el => observer.observe(el));
}
