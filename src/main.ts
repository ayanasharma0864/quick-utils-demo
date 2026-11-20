import './style.css';
import { slugify, capitalize, truncate, randomId, sleep } from '@ayanasharma0864/quick-utils';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
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
`;

// 1. slugify
const slugInput = document.querySelector<HTMLInputElement>('#slugify-input')!;
const slugOutput = document.querySelector<HTMLDivElement>('#slugify-output')!;
function updateSlug() {
  slugOutput.textContent = slugify(slugInput.value);
}
slugInput.addEventListener('input', updateSlug);
updateSlug();

// 2. capitalize
const capInput = document.querySelector<HTMLInputElement>('#capitalize-input')!;
const capOutput = document.querySelector<HTMLDivElement>('#capitalize-output')!;
function updateCap() {
  capOutput.textContent = capitalize(capInput.value);
}
capInput.addEventListener('input', updateCap);
updateCap();

// 3. truncate
const truncInput = document.querySelector<HTMLInputElement>('#truncate-input')!;
const truncLen = document.querySelector<HTMLInputElement>('#truncate-len')!;
const truncOutput = document.querySelector<HTMLDivElement>('#truncate-output')!;
function updateTrunc() {
  const len = parseInt(truncLen.value, 10);
  if (isNaN(len) || len < 1) {
    truncOutput.textContent = '(maxLength must be ≥ 1)';
    return;
  }
  try {
    truncOutput.textContent = truncate(truncInput.value, len);
  } catch (err: unknown) {
    truncOutput.textContent = err instanceof Error ? err.message : String(err);
  }
}
truncInput.addEventListener('input', updateTrunc);
truncLen.addEventListener('input', updateTrunc);
updateTrunc();

// 4. randomId
const randLen = document.querySelector<HTMLInputElement>('#randomid-len')!;
const randBtn = document.querySelector<HTMLButtonElement>('#randomid-btn')!;
const randOutput = document.querySelector<HTMLDivElement>('#randomid-output')!;
function updateRandomId() {
  const len = parseInt(randLen.value, 10);
  if (isNaN(len) || len < 1) {
    randOutput.textContent = '(length must be ≥ 1)';
    return;
  }
  try {
    randOutput.textContent = randomId(len);
  } catch (err: unknown) {
    randOutput.textContent = err instanceof Error ? err.message : String(err);
  }
}
randBtn.addEventListener('click', updateRandomId);
updateRandomId();

// 5. sleep
const sleepMsInput = document.querySelector<HTMLInputElement>('#sleep-ms')!;
const sleepBtn = document.querySelector<HTMLButtonElement>('#sleep-btn')!;
const sleepBtnText = document.querySelector<HTMLSpanElement>('#sleep-btn-text')!;
const sleepOutput = document.querySelector<HTMLDivElement>('#sleep-output')!;

sleepBtn.addEventListener('click', async () => {
  const ms = parseInt(sleepMsInput.value, 10);
  if (isNaN(ms) || ms < 0) {
    sleepOutput.textContent = 'Please enter a valid non-negative milliseconds value.';
    return;
  }

  sleepBtn.disabled = true;
  sleepMsInput.disabled = true;
  sleepBtnText.innerHTML = '<span class="spinner"></span> Sleeping...';
  sleepOutput.className = 'output-val';
  sleepOutput.textContent = `Sleeping for ${ms} ms...`;

  const startTime = performance.now();
  await sleep(ms);
  const elapsed = Math.round(performance.now() - startTime);

  sleepOutput.className = 'output-val success';
  sleepOutput.textContent = `Woke up after ${elapsed} ms!`;
  sleepBtnText.textContent = 'Start Sleep';
  sleepBtn.disabled = false;
  sleepMsInput.disabled = false;
});
