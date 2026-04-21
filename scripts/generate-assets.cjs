const { chromium } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

const OUT = path.resolve(__dirname, '..', 'public');

const COLORS = {
  bg: '#0a0e1a',
  card: '#151c2e',
  border: 'rgba(100,120,160,0.12)',
  accent: '#3dd4b8',
  accentDim: 'rgba(61,212,184,0.08)',
  accentGlow: 'rgba(61,212,184,0.15)',
  text: '#e2e8f0',
  muted: '#94a3b8',
};

const FONT_LINK = `
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&display=swap" rel="stylesheet" />
`;

const moonIcon = (size, color = COLORS.accent) => `
  <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
`;

const ogTemplate = () => `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  ${FONT_LINK}
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { width: 1200px; height: 630px; font-family: 'Inter', sans-serif; }
    body {
      background: ${COLORS.bg};
      background-image:
        radial-gradient(circle at 85% 20%, ${COLORS.accentGlow} 0%, transparent 50%),
        radial-gradient(circle at 15% 80%, ${COLORS.accentDim} 0%, transparent 50%);
      padding: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 48px;
    }
    .brand-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      background: ${COLORS.accentDim};
      border: 1px solid ${COLORS.accent};
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .brand-name {
      color: ${COLORS.text};
      font-weight: 700;
      font-size: 28px;
      letter-spacing: -0.02em;
    }
    .brand-name-accent { color: ${COLORS.accent}; }
    h1 {
      color: ${COLORS.text};
      font-size: 88px;
      font-weight: 800;
      line-height: 1.05;
      letter-spacing: -0.03em;
      max-width: 960px;
      margin-bottom: 32px;
    }
    h1 .accent { color: ${COLORS.accent}; }
    p {
      color: ${COLORS.muted};
      font-size: 32px;
      font-weight: 500;
      line-height: 1.4;
      max-width: 900px;
    }
    .badge {
      position: absolute;
      bottom: 80px;
      left: 80px;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 10px 16px;
      border-radius: 999px;
      background: ${COLORS.accentDim};
      border: 1px solid ${COLORS.accent};
      color: ${COLORS.accent};
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
  </style>
</head>
<body>
  <div class="brand">
    <div class="brand-icon">${moonIcon(28)}</div>
    <div class="brand-name">Sleep<span class="brand-name-accent">Cycler</span></div>
  </div>
  <h1>Find your <span class="accent">perfect bedtime.</span></h1>
  <p>Science-backed sleep calculator based on 90-minute sleep cycles. Free, fast, no sign-up.</p>
  <div class="badge">
    <span style="width:8px;height:8px;border-radius:999px;background:${COLORS.accent};display:inline-block"></span>
    sleepcycler.com
  </div>
</body>
</html>`;

const appleTouchTemplate = () => `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { width: 180px; height: 180px; }
    body {
      background: ${COLORS.bg};
      background-image: radial-gradient(circle at 70% 30%, ${COLORS.accentGlow} 0%, transparent 70%);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 40px;
    }
  </style>
</head>
<body>
  ${moonIcon(100)}
</body>
</html>`;

const faviconTemplate = (size) => `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { width: ${size}px; height: ${size}px; }
    body {
      background: ${COLORS.bg};
      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>
</head>
<body>
  ${moonIcon(Math.round(size * 0.72))}
</body>
</html>`;

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="${COLORS.bg}"/>
  <path d="M25 17.58A10.5 10.5 0 1 1 14.42 7 8.17 8.17 0 0 0 25 17.58z" fill="none" stroke="${COLORS.accent}" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

async function renderToPng(browser, html, width, height, outPath) {
  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: outPath, omitBackground: false });
  await context.close();
  console.log(`Wrote ${outPath}`);
}

(async () => {
  const browser = await chromium.launch();
  try {
    await renderToPng(browser, ogTemplate(), 1200, 630, path.join(OUT, 'og-image.png'));
    await renderToPng(browser, appleTouchTemplate(), 180, 180, path.join(OUT, 'apple-touch-icon.png'));
    await renderToPng(browser, faviconTemplate(32), 32, 32, path.join(OUT, 'favicon-32.png'));
    fs.writeFileSync(path.join(OUT, 'favicon.svg'), faviconSvg);
    console.log(`Wrote ${path.join(OUT, 'favicon.svg')}`);
  } finally {
    await browser.close();
  }
})();
