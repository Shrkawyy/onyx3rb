// ==UserScript==
// @name         ONYX 3RB Companion
// @namespace    https://3rb.io/
// @version      1.0.0
// @description  ONYX overlay for 3rb.io. No automated bots or game-network interception.
// @match        https://3rb.io/*
// @match        https://www.3rb.io/*
// @run-at       document-idle
// @grant        none
// @noframes
// ==/UserScript==

(() => {
  'use strict';
  const css = "#onyx3rb-root {\n  --onyx3rb-opacity: .94; --onyx3rb-scale: 1;\n  position: fixed !important; right: 16px; bottom: 16px; left: auto; top: auto;\n  z-index: 2147483646 !important; width: 320px !important; max-width: 94vw !important;\n  direction: rtl !important; color: #e9f5fd !important;\n  border: 1px solid rgba(54,175,224,.36) !important; border-radius: 15px !important;\n  background: rgba(10,17,31,var(--onyx3rb-opacity)) !important;\n  box-shadow: 0 24px 75px rgba(0,0,0,.65), 0 0 0 1px rgba(20,165,200,.08) inset !important;\n  font: normal 13px/1.55 system-ui,Tahoma,Arial,sans-serif !important;\n  text-align: right !important; color-scheme: dark; box-sizing: border-box !important;\n  zoom: var(--onyx3rb-scale);\n}\n#onyx3rb-root *, #onyx3rb-root *::before, #onyx3rb-root *::after { box-sizing:border-box!important; font-family:inherit!important }\n#onyx3rb-root.onyx3rb-hidden { display:none!important }\n#onyx3rb-root .onyx3rb-header { display:flex;justify-content:space-between;align-items:center;gap:12px;padding:12px 14px;cursor:grab;user-select:none;touch-action:none;border-bottom:1px solid #ffffff16 }\n#onyx3rb-root .onyx3rb-header:active { cursor:grabbing }\n#onyx3rb-root .onyx3rb-brand { display:flex;align-items:center;gap:10px }\n#onyx3rb-root .onyx3rb-mark { display:inline-flex;justify-content:center;align-items:center;width:32px;height:32px;border-radius:10px;background:linear-gradient(130deg,#16ccf3,#1674f1);color:#fff;font-size:22px;font-weight:900;box-shadow:0 0 18px #1095e568 }\n#onyx3rb-root .onyx3rb-brand b { display:block;line-height:1.1;font-size:17px;letter-spacing:1px;color:#f8fcff }\n#onyx3rb-root .onyx3rb-brand small { display:block;color:#79a8bd;font-size:9px;letter-spacing:1.3px;direction:ltr;text-align:right }\n#onyx3rb-root .onyx3rb-controls { display:flex;gap:6px }\n#onyx3rb-root button { cursor:pointer; border:1px solid #29445e;background:#192b3e;color:#e5f5ff;border-radius:9px;transition:background .15s,border-color .15s;padding:6px 9px;font-size:12px }\n#onyx3rb-root button:hover { background:#1c3d52;border-color:#219ac0 }\n#onyx3rb-root button:focus-visible,#onyx3rb-root input:focus-visible,#onyx3rb-root summary:focus-visible { outline:2px solid #6cdcff!important;outline-offset:2px }\n#onyx3rb-root .onyx3rb-icon-btn { width:27px;height:27px;padding:0;font-size:19px;line-height:1 }\n#onyx3rb-root .onyx3rb-body { padding:12px 14px 14px }\n#onyx3rb-root.onyx3rb-collapsed .onyx3rb-body { display:none }\n#onyx3rb-root .onyx3rb-stats { display:grid;grid-template-columns:1fr 1fr;gap:8px }\n#onyx3rb-root .onyx3rb-stats>div { background:#0a1d2d;border:1px solid #183c50;border-radius:10px;padding:9px 12px;display:flex;flex-direction:column;gap:2px }\n#onyx3rb-root .onyx3rb-stats small { font-size:11px;color:#91b8cd }\n#onyx3rb-root .onyx3rb-stats b { font:700 19px/1.2 ui-monospace,monospace!important;color:#68e3ff;direction:ltr;text-align:right }\n#onyx3rb-root .onyx3rb-status { margin:12px 0 4px;display:flex;align-items:center;gap:7px;color:#b9d7e7;font-size:12px }\n#onyx3rb-root .onyx3rb-light { display:inline-block;width:7px;height:7px;border-radius:50%;background:#6ddef7;box-shadow:0 0 10px #26a9cf }\n#onyx3rb-root .onyx3rb-hint { padding:0;margin:5px 0 12px;color:#8eacc0;font-size:11px;line-height:1.6 }\n#onyx3rb-root .onyx3rb-action-grid { display:grid;grid-template-columns:1fr 1fr;gap:7px }\n#onyx3rb-root .onyx3rb-action-grid button { min-height:39px;display:flex;gap:8px;align-items:center;justify-content:center }\n#onyx3rb-root .onyx3rb-action-grid button:first-child { background:#08739a45;border-color:#127e9a }\n#onyx3rb-root .onyx3rb-action-grid .onyx3rb-recording { color:#fff;background:#8c272f;border-color:#e25d67;animation:onyx3rb-blink 1s infinite alternate }\n@keyframes onyx3rb-blink { from {opacity:1} to {opacity:.7} }\n#onyx3rb-root .onyx3rb-settings { margin-top:12px;border-top:1px solid #ffffff17;padding-top:9px }\n#onyx3rb-root .onyx3rb-settings summary { cursor:pointer;color:#a8d4e4;user-select:none }\n#onyx3rb-root .onyx3rb-settings label { display:flex;align-items:center;justify-content:space-between;gap:14px;margin-top:10px;font-size:12px }\n#onyx3rb-root .onyx3rb-settings input[type=range] { width:115px;accent-color:#3cc8ea }\n#onyx3rb-root .onyx3rb-settings input[type=checkbox] { accent-color:#3cc8ea }\n#onyx3rb-root .onyx3rb-reset { margin-top:11px }\n#onyx3rb-root .onyx3rb-footer { text-align:center;font-size:10px;color:#8ba9be;margin-top:12px;direction:ltr }\n#onyx3rb-root .onyx3rb-disclaimer { margin-top:8px;border-radius:7px;padding:7px 8px;background:#173145;color:#9ebed3;font-size:10px;line-height:1.5 }\n#onyx3rb-root .onyx3rb-toast { position:absolute;bottom:calc(100% + 10px);right:0;left:0;background:#13384a;color:#dbf7ff;padding:9px 11px;border:1px solid #297995;border-radius:8px;text-align:center;display:none;font-size:12px }\n#onyx3rb-root .onyx3rb-toast.onyx3rb-show { display:block }\n@media (prefers-reduced-motion:reduce) {#onyx3rb-root *{animation:none!important;transition:none!important}}\n";
  function insertStyle() {
    if (document.getElementById('onyx3rb-styles')) return;
    const style = document.createElement('style');
    style.id = 'onyx3rb-styles';
    style.textContent = css;
    (document.head || document.documentElement).appendChild(style);
  }
  insertStyle();
})();

/* ONYX 3RB Companion — independent DOM overlay for the official game.
   No access to game sockets, accounts, requests, or authentication. */
(() => {
  'use strict';
  if (!['3rb.io', 'www.3rb.io'].includes(location.hostname)) return;
  if (document.getElementById('onyx3rb-root')) return;

  const KEY = 'onyx3rb-companion-settings-v1';
  const defaults = { collapsed: false, hidden: false, showFps: true, opacity: 94, scale: 100, x: null, y: null };
  function getSettings() {
    try {
      const value = JSON.parse(localStorage.getItem(KEY) || '{}');
      if (!value || typeof value !== 'object') return { ...defaults };
      const data = { ...defaults };
      for (const name of Object.keys(defaults)) {
        if (Object.prototype.hasOwnProperty.call(value, name) && typeof value[name] === typeof defaults[name]) {
          data[name] = value[name];
        }
      }
      data.opacity = Math.min(100, Math.max(55, data.opacity));
      data.scale = Math.min(125, Math.max(75, data.scale));
      return data;
    } catch { return { ...defaults }; }
  }
  const settings = getSettings();
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(settings)); } catch {} };
  const started = Date.now();
  let mediaRecorder = null;
  let recordingStream = null;
  let recordingChunks = [];
  let fps = 0;
  let rafCount = 0;
  let rafStart = performance.now();
  let lastFpsTick = 0;

  function mount() {
    if (document.getElementById('onyx3rb-root') || !document.body) return;
    const root = document.createElement('section');
    root.id = 'onyx3rb-root';
    root.lang = 'ar';
    root.dir = 'rtl';
    root.setAttribute('aria-label', 'ONYX companion');
    root.innerHTML = `
      <div class="onyx3rb-header" id="onyx3rb-drag">
        <div class="onyx3rb-brand"><span class="onyx3rb-mark">O</span><div><b>ONYX</b><small>3RB • COMPANION</small></div></div>
        <div class="onyx3rb-controls">
          <button class="onyx3rb-icon-btn" id="onyx3rb-collapse" type="button" title="تصغير اللوحة" aria-label="تصغير اللوحة">−</button>
          <button class="onyx3rb-icon-btn" id="onyx3rb-hide" type="button" title="إخفاء اللوحة" aria-label="إخفاء اللوحة">×</button>
        </div>
      </div>
      <div class="onyx3rb-body" id="onyx3rb-body">
        <div class="onyx3rb-stats">
          <div><small>FPS الصفحة</small><b id="onyx3rb-fps">—</b></div>
          <div><small>وقت الجلسة</small><b id="onyx3rb-timer">00:00</b></div>
        </div>
        <div class="onyx3rb-status"><span class="onyx3rb-light"></span><span>العميل الرسمي للعبة 3rb.io</span></div>
        <p class="onyx3rb-hint">المود والسيرفر يتم اختيارهم من قائمة اللعبة الأصلية. اللوحة لا تتحكم في سيرفرات اللعبة.</p>
        <div class="onyx3rb-action-grid">
          <button id="onyx3rb-fullscreen" type="button">⛶ <span>ملء الشاشة</span></button>
          <button id="onyx3rb-shot" type="button">▣ <span>لقطة شاشة</span></button>
          <button id="onyx3rb-record" type="button">● <span>بدء التسجيل</span></button>
          <button id="onyx3rb-game" type="button">↗ <span>رابط اللعبة</span></button>
        </div>
        <details class="onyx3rb-settings" id="onyx3rb-settings">
          <summary>إعدادات اللوحة</summary>
          <label><span>إظهار FPS</span><input id="onyx3rb-show-fps" type="checkbox"></label>
          <label><span>شفافية اللوحة</span><input id="onyx3rb-opacity" type="range" min="55" max="100" step="1"></label>
          <label><span>حجم اللوحة</span><input id="onyx3rb-scale" type="range" min="75" max="125" step="5"></label>
          <button class="onyx3rb-reset" id="onyx3rb-reset" type="button">إعادة موضع اللوحة</button>
        </details>
        <div class="onyx3rb-footer">Ctrl + Shift + O لإظهار/إخفاء ONYX</div>
        <div class="onyx3rb-disclaimer">لا يوجد تشغيل بوتات أو تسجيل حسابات أو تعديل لاتصال اللعبة.</div>
      </div>
      <div class="onyx3rb-toast" id="onyx3rb-toast" role="status" aria-live="polite"></div>`;
    document.body.appendChild(root);

    const find = id => root.querySelector(`#${id}`);
    const fpsEl = find('onyx3rb-fps');
    const timerEl = find('onyx3rb-timer');
    const fpsToggle = find('onyx3rb-show-fps');
    const opacityControl = find('onyx3rb-opacity');
    const scaleControl = find('onyx3rb-scale');
    const recordingBtn = find('onyx3rb-record');
    let toastTimeout;
    function toast(message) {
      const target = find('onyx3rb-toast');
      target.textContent = message;
      target.classList.add('onyx3rb-show');
      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => target.classList.remove('onyx3rb-show'), 4500);
    }
    const updatePosition = () => {
      if (settings.x === null || settings.y === null) {
        root.style.left = 'auto'; root.style.top = 'auto'; root.style.right = '16px'; root.style.bottom = '16px';
      } else {
        const maxX = Math.max(0, innerWidth - root.offsetWidth);
        const maxY = Math.max(0, innerHeight - root.offsetHeight);
        settings.x = Math.min(maxX, Math.max(0, settings.x));
        settings.y = Math.min(maxY, Math.max(0, settings.y));
        root.style.right = 'auto'; root.style.bottom = 'auto';
        root.style.left = `${settings.x}px`; root.style.top = `${settings.y}px`;
      }
    };
    function apply() {
      root.classList.toggle('onyx3rb-collapsed', settings.collapsed);
      root.classList.toggle('onyx3rb-hidden', settings.hidden);
      root.style.setProperty('--onyx3rb-opacity', (settings.opacity / 100).toFixed(2));
      root.style.setProperty('--onyx3rb-scale', (settings.scale / 100).toFixed(2));
      find('onyx3rb-collapse').textContent = settings.collapsed ? '+' : '−';
      find('onyx3rb-collapse').setAttribute('aria-expanded', String(!settings.collapsed));
      fpsEl.textContent = settings.showFps ? (fps ? String(fps) : '—') : 'OFF';
      fpsToggle.checked = settings.showFps;
      opacityControl.value = String(settings.opacity);
      scaleControl.value = String(settings.scale);
      updatePosition();
    }
    find('onyx3rb-collapse').addEventListener('click', () => { settings.collapsed = !settings.collapsed; save(); apply(); });
    find('onyx3rb-hide').addEventListener('click', () => { settings.hidden = true; save(); apply(); });
    document.addEventListener('keydown', e => {
      if (!(e.ctrlKey && e.shiftKey && e.code === 'KeyO')) return;
      if (e.repeat) return;
      e.preventDefault(); e.stopPropagation();
      settings.hidden = !settings.hidden; save(); apply();
    }, true);
    fpsToggle.addEventListener('change', e => { settings.showFps = e.target.checked; save(); apply(); });
    opacityControl.addEventListener('input', e => { settings.opacity = Number(e.target.value); save(); apply(); });
    scaleControl.addEventListener('input', e => { settings.scale = Number(e.target.value); save(); apply(); });
    find('onyx3rb-reset').addEventListener('click', () => { settings.x = null; settings.y = null; save(); apply(); toast('تم إرجاع اللوحة إلى موقعها'); });
    find('onyx3rb-game').addEventListener('click', () => { window.open('https://3rb.io/', '_blank', 'noopener,noreferrer'); });
    find('onyx3rb-fullscreen').addEventListener('click', async () => {
      try {
        if (document.fullscreenElement) await document.exitFullscreen();
        else await document.documentElement.requestFullscreen();
      } catch { toast('المتصفح رفض وضع ملء الشاشة'); }
    });

    async function captureDisplay() {
      if (!navigator.mediaDevices?.getDisplayMedia) throw Error('متصفحك لا يدعم مشاركة الشاشة');
      // Browser permission prompt; user chooses what screen/window/tab to share.
      return navigator.mediaDevices.getDisplayMedia({ video: { frameRate: 30 }, audio: false });
    }
    function download(blob, filename) {
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url; anchor.download = filename;
      document.body.appendChild(anchor); anchor.click(); anchor.remove();
      setTimeout(() => URL.revokeObjectURL(url), 20000);
    }
    function name(prefix, ext) { return `${prefix}-${new Date().toISOString().replace(/[:.]/g, '-')}.${ext}`; }
    find('onyx3rb-shot').addEventListener('click', async () => {
      let stream;
      let video;
      try {
        stream = await captureDisplay();
        video = document.createElement('video');
        video.muted = true; video.playsInline = true; video.srcObject = stream;
        await video.play();
        if (!video.videoWidth || !video.videoHeight) throw Error('تعذر التقاط الصورة');
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth; canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0);
        const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
        if (!blob) throw Error('تعذر حفظ الصورة');
        download(blob, name('ONYX-3RB-shot', 'png'));
        toast('تم حفظ لقطة الشاشة');
      } catch (error) { toast(error.message || 'لم يتم التقاط الصورة'); }
      finally { stream?.getTracks().forEach(track => track.stop()); if (video) video.srcObject = null; }
    });
    function stopRecording() {
      if (mediaRecorder && mediaRecorder.state !== 'inactive') mediaRecorder.stop();
      recordingStream?.getTracks().forEach(track => track.stop());
    }
    recordingBtn.addEventListener('click', async () => {
      if (mediaRecorder?.state === 'recording') { stopRecording(); return; }
      if (typeof MediaRecorder === 'undefined') { toast('تسجيل الفيديو غير مدعوم'); return; }
      try {
        recordingStream = await captureDisplay();
        const options = {};
        for (const format of ['video/webm;codecs=vp9', 'video/webm;codecs=vp8', 'video/webm']) {
          if (MediaRecorder.isTypeSupported(format)) { options.mimeType = format; break; }
        }
        recordingChunks = [];
        mediaRecorder = new MediaRecorder(recordingStream, options);
        const recorder = mediaRecorder;
        recorder.addEventListener('dataavailable', event => { if (event.data?.size) recordingChunks.push(event.data); });
        recorder.addEventListener('stop', () => {
          const blobs = recordingChunks;
          recordingChunks = [];
          if (blobs.length) download(new Blob(blobs, { type: recorder.mimeType || 'video/webm' }), name('ONYX-3RB-record', 'webm'));
          recordingStream?.getTracks().forEach(track => track.stop());
          recordingStream = null; mediaRecorder = null;
          recordingBtn.classList.remove('onyx3rb-recording');
          recordingBtn.querySelector('span').textContent = 'بدء التسجيل';
          toast(blobs.length ? 'تم حفظ التسجيل' : 'لم يتم تسجيل أي فيديو');
        }, { once: true });
        recorder.addEventListener('error', () => { toast('حدث خطأ أثناء التسجيل'); stopRecording(); });
        recordingStream.getVideoTracks()[0]?.addEventListener('ended', () => { if (recorder.state !== 'inactive') recorder.stop(); });
        recorder.start(1000);
        recordingBtn.classList.add('onyx3rb-recording');
        recordingBtn.querySelector('span').textContent = 'إيقاف وحفظ التسجيل';
        toast('التسجيل بدأ — اختَر تبويب اللعبة من نافذة المشاركة');
      } catch (error) {
        recordingStream?.getTracks().forEach(track => track.stop());
        recordingStream = null; mediaRecorder = null;
        toast(error.message || 'لم يبدأ التسجيل');
      }
    });

    const drag = find('onyx3rb-drag');
    let startDrag = null;
    drag.addEventListener('pointerdown', e => {
      if (e.target.closest('button') || (e.button !== 0 && e.pointerType === 'mouse')) return;
      const rect = root.getBoundingClientRect();
      startDrag = { px: e.clientX, py: e.clientY, x: rect.left, y: rect.top };
      drag.setPointerCapture?.(e.pointerId);
    });
    drag.addEventListener('pointermove', e => {
      if (!startDrag) return;
      settings.x = startDrag.x + e.clientX - startDrag.px;
      settings.y = startDrag.y + e.clientY - startDrag.py;
      updatePosition();
    });
    const finishDrag = () => { if (startDrag) { startDrag = null; save(); } };
    drag.addEventListener('pointerup', finishDrag);
    drag.addEventListener('pointercancel', finishDrag);
    window.addEventListener('resize', updatePosition);
    apply();
    setInterval(() => {
      const seconds = Math.floor((Date.now() - started) / 1000);
      const mm = Math.floor(seconds / 60); const ss = seconds % 60;
      timerEl.textContent = `${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
    }, 1000);
    function frame(now) {
      rafCount++;
      if (now - rafStart >= 1000) {
        fps = document.hidden ? 0 : Math.round(rafCount * 1000 / (now - rafStart));
        rafCount = 0; rafStart = now;
        if (settings.showFps && now - lastFpsTick >= 950) { fpsEl.textContent = String(fps); lastFpsTick = now; }
      }
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, { once: true });
  else mount();
})();

