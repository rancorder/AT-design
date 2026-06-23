const isAudience = new URLSearchParams(location.search).get('view') === 'audience';
const app = document.getElementById('app');
const img = document.getElementById('slideImage');
const counter = document.getElementById('counter');
const channel = 'at-design-present-sync';
const bc = 'BroadcastChannel' in window ? new BroadcastChannel(channel) : null;
let slides = [];
let current = Number(localStorage.getItem(channel) || 0);
let cover = false;

if (isAudience) app.classList.add('audience');

document.addEventListener('DOMContentLoaded', init);

async function init(){
  slides = await fetch('slides.json').then(r=>r.json());
  current = Math.max(0, Math.min(current, slides.length - 1));
  bind();
  render();
  app.classList.remove('loading');
}
function bind(){
  document.getElementById('prev')?.addEventListener('click',()=>go(current-1));
  document.getElementById('next')?.addEventListener('click',()=>go(current+1));
  document.getElementById('openAudience')?.addEventListener('click',()=>window.open(`${location.pathname}?view=audience`, 'AT_DESIGN_AUDIENCE', 'popup,width=1400,height=850'));
  document.getElementById('fullscreen')?.addEventListener('click',()=>document.documentElement.requestFullscreen?.());
  document.getElementById('fitToggle')?.addEventListener('click',()=>{cover=!cover;document.querySelector('.slideStage').classList.toggle('cover', cover)});
  window.addEventListener('keydown', e=>{
    if(['ArrowRight',' '].includes(e.key)){e.preventDefault();go(current+1)}
    if(e.key==='ArrowLeft'){e.preventDefault();go(current-1)}
    if(e.key.toLowerCase()==='f') document.documentElement.requestFullscreen?.();
    const n = Number(e.key); if(n>=1 && n<=9) go(n-1);
    if(e.key==='0') go(9);
  });
  bc?.addEventListener('message', e=>{ if(e.data?.type==='slide') { current=e.data.index; render(false); }});
  window.addEventListener('storage', e=>{ if(e.key===channel){ current=Number(e.newValue||0); render(false); }});
}
function go(index, broadcast=true){
  current = Math.max(0, Math.min(index, slides.length-1));
  render(broadcast);
}
function render(broadcast=true){
  const s = slides[current];
  img.src = s.image;
  img.alt = s.title;
  counter.textContent = `${current+1} / ${slides.length}`;
  if(!isAudience){
    setText('scriptTitle', `${String(s.id).padStart(2,'0')}｜${s.title}`);
    setText('first', s.first);
    setText('talk', s.talk);
    setText('point', s.point);
    setText('ask', s.ask);
    renderThumbs();
  }
  localStorage.setItem(channel, String(current));
  if(broadcast) bc?.postMessage({type:'slide', index: current});
}
function setText(id, value){ const el=document.getElementById(id); if(el) el.textContent=value||''; }
function renderThumbs(){
  const root = document.getElementById('thumbs');
  if(!root || root.dataset.ready) {
    document.querySelectorAll('.thumb').forEach((b,i)=>b.classList.toggle('active', i===current));
    return;
  }
  slides.forEach((s,i)=>{
    const b=document.createElement('button'); b.className='thumb'; b.title=s.title; b.addEventListener('click',()=>go(i));
    const im=document.createElement('img'); im.src=s.image; im.alt=s.title; b.appendChild(im); root.appendChild(b);
  });
  root.dataset.ready='1';
  renderThumbs();
}
