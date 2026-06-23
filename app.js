/* ===========================================================
   ATデザイン｜販売プレゼン  アプリ本体
   - 画像ではなくHTMLでスライドを描画（ベクター/編集容易）
   - 発表者ビュー(台本あり) と 顧客ビュー(?view=audience) を分離
   - BroadcastChannel + localStorage で二画面同期
   =========================================================== */
const isAudience = new URLSearchParams(location.search).get('view') === 'audience';
const CH = 'at-design-present-sync';
const bc = ('BroadcastChannel' in window) ? new BroadcastChannel(CH) : null;
const app = document.getElementById('app');
const stage = document.querySelector('.slideStage');
const counter = document.getElementById('counter');
let slides = window.SLIDES || [];
let current = clamp(Number(localStorage.getItem(CH) || 0));

if (isAudience) app.classList.add('audience');

document.addEventListener('DOMContentLoaded', init);

function clamp(i){ return Math.max(0, Math.min(i, (window.SLIDES||[]).length - 1)); }

function init(){
  bind();
  render();
  app.classList.remove('loading');
  window.addEventListener('resize', fit);
}

function bind(){
  document.getElementById('prev')?.addEventListener('click', () => go(current - 1));
  document.getElementById('next')?.addEventListener('click', () => go(current + 1));
  document.getElementById('openAudience')?.addEventListener('click',
    () => window.open(`${location.pathname}?view=audience`, 'AT_DESIGN_AUDIENCE', 'popup,width=1400,height=850'));
  document.getElementById('fullscreen')?.addEventListener('click',
    () => document.documentElement.requestFullscreen?.());

  window.addEventListener('keydown', e => {
    if (['ArrowRight', ' '].includes(e.key)) { e.preventDefault(); go(current + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(current - 1); }
    if (e.key.toLowerCase() === 'f') document.documentElement.requestFullscreen?.();
    const n = Number(e.key);
    if (e.key === '0') go(9);
    else if (n >= 1 && n <= 9) go(n - 1);
  });

  bc?.addEventListener('message', e => { if (e.data?.type === 'slide') { current = clamp(e.data.index); render(false); } });
  window.addEventListener('storage', e => { if (e.key === CH) { current = clamp(Number(e.newValue || 0)); render(false); } });
}

function go(index, broadcast = true){ current = clamp(index); render(broadcast); }

/* スライド1枚分のHTMLを組み立て（共通フレーム + 固有body） */
function slideMarkup(s){
  const eyebrow = `<span class="eyebrow">${s.eyebrow}<span class="dia"></span></span>`;
  const title   = `<h1 class="s-title">${s.title}</h1>`;
  const foot     = s.foot ? `<div class="s-foot">${s.foot}</div>` : '';
  const wm       = `<div class="wm"><b>AT</b><i>DESIGN</i></div>`;
  const no       = `<span class="s-no">Slide ${String(s.id).padStart(2,'0')}</span>`;
  return `<div class="slide-canvas"><div class="slide${s.cover ? ' cover' : ''}${s.klass ? ' ' + s.klass : ''}">
            ${wm}${eyebrow}${title}
            <div class="s-body">${s.body}</div>
            ${foot}${no}
          </div></div>`;
}

function render(broadcast = true){
  const s = slides[current];

  // ステージ（スライド本体）— 発表者・顧客 共通
  stage.querySelector('.slide-canvas')?.remove();
  stage.insertAdjacentHTML('afterbegin', slideMarkup(s));
  fit();

  if (counter) counter.textContent = `${current + 1} / ${slides.length}`;

  // 台本（発表者のみ）
  if (!isAudience){
    setHTML('scriptTitle', `${String(s.id).padStart(2,'0')}｜${stripTags(s.title)}`);
    setText('first', s.first);
    setText('talk',  s.talk);
    setText('point', s.point);
    setText('ask',   s.ask);
    renderThumbs();
  }

  localStorage.setItem(CH, String(current));
  if (broadcast) bc?.postMessage({ type: 'slide', index: current });
}

/* キャンバス(1280x720)をステージにフィット */
function fit(){
  const cv = stage.querySelector('.slide-canvas');
  if (!cv) return;
  const pad = isAudience ? 0 : 0;
  const sc = Math.min((stage.clientWidth - pad) / 1280, (stage.clientHeight - pad) / 720);
  cv.style.transform = `translate(-50%,-50%) scale(${sc})`;
}

function renderThumbs(){
  const root = document.getElementById('thumbs');
  if (!root) return;
  if (!root.dataset.ready){
    slides.forEach((s, i) => {
      const b = document.createElement('button');
      b.className = 'thumb'; b.title = stripTags(s.title);
      b.addEventListener('click', () => go(i));
      b.innerHTML = `<span>${String(s.id).padStart(2,'0')}</span>`;
      root.appendChild(b);
    });
    root.dataset.ready = '1';
  }
  root.querySelectorAll('.thumb').forEach((b, i) => b.classList.toggle('active', i === current));
}

function setText(id, v){ const el = document.getElementById(id); if (el) el.textContent = v || ''; }
function setHTML(id, v){ const el = document.getElementById(id); if (el) el.innerHTML = v || ''; }
function stripTags(html){ const d = document.createElement('div'); d.innerHTML = html; return d.textContent || ''; }
