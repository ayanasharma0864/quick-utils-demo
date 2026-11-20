(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){return e.toLowerCase().trim().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)}function t(e){return e.length===0?e:e.charAt(0).toUpperCase()+e.slice(1)}function n(e,t){if(t<1)throw RangeError(`maxLength must be at least 1`);return e.length<=t?e:e.slice(0,t-1)+`…`}function r(e){if(e<1)throw RangeError(`length must be at least 1`);let t=``;for(let n=0;n<e;n++)t+=`abcdefghijklmnopqrstuvwxyz0123456789`.charAt(Math.floor(Math.random()*36));return t}function i(e){if(e<0)throw RangeError(`ms must not be negative`);return new Promise(t=>setTimeout(t,e))}var a=document.querySelector(`#app`);a.innerHTML=`
  <div class="container">
    <header>
      <div class="badge">v1.0.0 &bull; Dependency-Free</div>
      <h1>quick-utils demo</h1>
      <p class="subtitle">Interactive playground for <code>@ayanasharma0864/quick-utils</code> — a tiny TypeScript utility library.</p>
      
      <div class="links">
        <a href="https://www.npmjs.com/package/@ayanasharma0864/quick-utils" target="_blank" rel="noopener noreferrer" class="btn-link">
          <svg width="16" height="16" viewBox="0 0 780 250" fill="currentColor">
            <path d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"></path>
          </svg>
          npm Package
        </a>
        <a href="https://github.com/ayanasharma0864/quick-utils" target="_blank" rel="noopener noreferrer" class="btn-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          Library Repo
        </a>
        <a href="https://github.com/ayanasharma0864/quick-utils-demo" target="_blank" rel="noopener noreferrer" class="btn-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 14 14"></polyline>
          </svg>
          Demo Repo
        </a>
      </div>

      <div class="install-box">
        <span>$</span> npm i @ayanasharma0864/quick-utils
      </div>
    </header>

    <main class="grid">
      <!-- slugify Card -->
      <section class="card">
        <div class="card-header">
          <div class="fn-name">slugify(text)</div>
          <div class="fn-desc">Transforms text into a clean URL-friendly slug</div>
        </div>
        <div class="form-group">
          <label for="slugify-input">Input text</label>
          <input type="text" id="slugify-input" value="Hello World! & Beyond #2026" placeholder="Type text to slugify..." />
        </div>
        <div class="output-box">
          <div class="output-label">Result</div>
          <div class="output-val" id="slugify-output"></div>
        </div>
      </section>

      <!-- capitalize Card -->
      <section class="card">
        <div class="card-header">
          <div class="fn-name">capitalize(text)</div>
          <div class="fn-desc">Capitalizes the first character of any string</div>
        </div>
        <div class="form-group">
          <label for="capitalize-input">Input text</label>
          <input type="text" id="capitalize-input" value="typescript is awesome" placeholder="Type text to capitalize..." />
        </div>
        <div class="output-box">
          <div class="output-label">Result</div>
          <div class="output-val" id="capitalize-output"></div>
        </div>
      </section>

      <!-- truncate Card -->
      <section class="card">
        <div class="card-header">
          <div class="fn-name">truncate(text, maxLength)</div>
          <div class="fn-desc">Shortens strings cleanly with an ellipsis</div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="truncate-input">Input text</label>
            <input type="text" id="truncate-input" value="The quick brown fox jumps over the lazy dog" />
          </div>
          <div class="form-group small">
            <label for="truncate-len">Max Length</label>
            <input type="number" id="truncate-len" value="20" min="1" max="100" />
          </div>
        </div>
        <div class="output-box">
          <div class="output-label">Result</div>
          <div class="output-val" id="truncate-output"></div>
        </div>
      </section>

      <!-- randomId Card -->
      <section class="card">
        <div class="card-header">
          <div class="fn-name">randomId(length)</div>
          <div class="fn-desc">Generates random alphanumeric identifier strings</div>
        </div>
        <div class="form-row" style="align-items: flex-end;">
          <div class="form-group">
            <label for="randomid-len">ID Length</label>
            <input type="number" id="randomid-len" value="12" min="1" max="64" />
          </div>
          <div class="form-group">
            <button id="randomid-btn" class="primary-btn" type="button">Generate</button>
          </div>
        </div>
        <div class="output-box">
          <div class="output-label">Generated ID</div>
          <div class="output-val" id="randomid-output"></div>
        </div>
      </section>

      <!-- sleep Card -->
      <section class="card" style="grid-column: 1 / -1;">
        <div class="card-header">
          <div class="fn-name">sleep(ms)</div>
          <div class="fn-desc">Promise-based async delay helper for delays and animations</div>
        </div>
        <div class="form-row" style="align-items: flex-end; max-width: 480px;">
          <div class="form-group">
            <label for="sleep-ms">Duration (ms)</label>
            <input type="number" id="sleep-ms" value="1000" min="100" step="100" />
          </div>
          <div class="form-group">
            <button id="sleep-btn" class="primary-btn" type="button">
              <span id="sleep-btn-text">Start Sleep</span>
            </button>
          </div>
        </div>
        <div class="output-box">
          <div class="output-label">Status</div>
          <div class="output-val" id="sleep-output">Ready to sleep</div>
        </div>
      </section>
    </main>

    <footer>
      Built with Vite + TypeScript &bull; Powered by <a href="https://www.npmjs.com/package/@ayanasharma0864/quick-utils" style="color: #818cf8; text-decoration: none;">@ayanasharma0864/quick-utils</a>
    </footer>
  </div>
`;var o=document.querySelector(`#slugify-input`),s=document.querySelector(`#slugify-output`);function c(){s.textContent=e(o.value)}o.addEventListener(`input`,c),c();var l=document.querySelector(`#capitalize-input`),u=document.querySelector(`#capitalize-output`);function d(){u.textContent=t(l.value)}l.addEventListener(`input`,d),d();var f=document.querySelector(`#truncate-input`),p=document.querySelector(`#truncate-len`),m=document.querySelector(`#truncate-output`);function h(){let e=parseInt(p.value,10);if(isNaN(e)||e<1)m.textContent=`(maxLength must be ≥ 1)`;else try{m.textContent=n(f.value,e)}catch(e){m.textContent=e instanceof Error?e.message:String(e)}}f.addEventListener(`input`,h),p.addEventListener(`input`,h),h();var g=document.querySelector(`#randomid-len`),_=document.querySelector(`#randomid-btn`),v=document.querySelector(`#randomid-output`);function y(){let e=parseInt(g.value,10);if(isNaN(e)||e<1)v.textContent=`(length must be ≥ 1)`;else try{v.textContent=r(e)}catch(e){v.textContent=e instanceof Error?e.message:String(e)}}_.addEventListener(`click`,y),y();var b=document.querySelector(`#sleep-ms`),x=document.querySelector(`#sleep-btn`),S=document.querySelector(`#sleep-btn-text`),C=document.querySelector(`#sleep-output`);x.addEventListener(`click`,async()=>{let e=parseInt(b.value,10);if(isNaN(e)||e<0){C.textContent=`Please enter a valid non-negative milliseconds value.`;return}x.disabled=!0,b.disabled=!0,S.innerHTML=`<span class="spinner"></span> Sleeping...`,C.className=`output-val`,C.textContent=`Sleeping for ${e} ms...`;let t=performance.now();await i(e);let n=Math.round(performance.now()-t);C.className=`output-val success`,C.textContent=`Woke up after ${n} ms!`,S.textContent=`Start Sleep`,x.disabled=!1,b.disabled=!1});