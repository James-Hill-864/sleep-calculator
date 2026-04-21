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

// Pinterest pin: 1000x1500 (2:3), vertical, optimized for Pinterest feed
const PINTEREST_POSTS = [
  { slug: 'what-time-to-go-to-bed-wake-up-5am', eyebrow: 'Bedtime Math', title: 'What time should I go to bed if I wake up at 5 AM?', kicker: 'Cycle-aligned bedtimes for early risers' },
  { slug: 'what-time-to-go-to-bed-wake-up-6am', eyebrow: 'Bedtime Math', title: 'What time should I go to bed if I wake up at 6 AM?', kicker: 'Sleep-cycle math for the 6 AM alarm' },
  { slug: 'what-time-to-sleep-wake-up-7am', eyebrow: 'Bedtime Math', title: 'What time should I go to bed if I wake up at 7 AM?', kicker: 'Optimal bedtimes for a 7 AM wake-up' },
  { slug: 'how-many-sleep-cycles-do-you-need', eyebrow: 'Sleep Science', title: 'How many sleep cycles do you actually need?', kicker: 'By age, by goal, by the research' },
  { slug: 'best-time-to-wake-up-for-deep-sleep', eyebrow: 'Sleep Science', title: 'The best time to wake up for deep sleep', kicker: 'Why 6 hours well-timed beats 8 hours interrupted' },
  { slug: 'sleep-deprivation-effects-one-night', eyebrow: 'Sleep Science', title: 'What one bad night does to your brain', kicker: 'Research from UPenn, Harvard, UC Berkeley' },
  { slug: 'why-am-i-still-tired-after-8-hours-of-sleep', eyebrow: 'Troubleshooting', title: 'Why am I still tired after 8 hours of sleep?', kicker: 'The six most common reasons' },
  { slug: 'can-you-catch-up-on-sleep-on-the-weekend', eyebrow: 'Troubleshooting', title: 'Can you catch up on sleep on the weekend?', kicker: 'What the research actually says' },
  { slug: 'how-to-fall-asleep-fast', eyebrow: 'Practical', title: 'How to fall asleep fast', kicker: '9 methods backed by science' },
  { slug: 'why-do-i-wake-up-at-3am-every-night', eyebrow: 'Troubleshooting', title: 'Why do I wake up at 3 AM every night?', kicker: '7 causes ranked by likelihood' },
];

const pinterestTemplate = (post) => `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  ${FONT_LINK}
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { width: 1000px; height: 1500px; font-family: 'Inter', sans-serif; }
    body {
      background: ${COLORS.bg};
      background-image:
        radial-gradient(circle at 85% 10%, ${COLORS.accentGlow} 0%, transparent 50%),
        radial-gradient(circle at 10% 90%, ${COLORS.accentDim} 0%, transparent 55%);
      padding: 90px 80px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
    }
    .top {
      display: flex;
      flex-direction: column;
      gap: 36px;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .brand-icon {
      width: 52px; height: 52px;
      border-radius: 14px;
      background: ${COLORS.accentDim};
      border: 1px solid ${COLORS.accent};
      display: flex; align-items: center; justify-content: center;
    }
    .brand-name {
      color: ${COLORS.text};
      font-weight: 700;
      font-size: 32px;
      letter-spacing: -0.02em;
    }
    .brand-name-accent { color: ${COLORS.accent}; }
    .eyebrow {
      display: inline-block;
      color: ${COLORS.accent};
      font-size: 24px;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 10px 18px;
      background: ${COLORS.accentDim};
      border: 1px solid ${COLORS.accent};
      border-radius: 999px;
      align-self: flex-start;
    }
    .middle {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
    h1 {
      color: ${COLORS.text};
      font-size: 86px;
      font-weight: 800;
      line-height: 1.03;
      letter-spacing: -0.03em;
      max-width: 820px;
    }
    h1 .accent { color: ${COLORS.accent}; }
    .kicker {
      color: ${COLORS.muted};
      font-size: 34px;
      font-weight: 500;
      line-height: 1.4;
      max-width: 780px;
    }
    .bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid rgba(100,120,160,0.25);
      padding-top: 28px;
    }
    .url {
      color: ${COLORS.accent};
      font-size: 26px;
      font-weight: 700;
      letter-spacing: 0.04em;
    }
    .cta {
      color: ${COLORS.text};
      font-size: 22px;
      font-weight: 600;
      opacity: 0.8;
    }
  </style>
</head>
<body>
  <div class="top">
    <div class="brand">
      <div class="brand-icon">${moonIcon(32)}</div>
      <div class="brand-name">Sleep<span class="brand-name-accent">Cycler</span></div>
    </div>
    <div class="eyebrow">${post.eyebrow}</div>
  </div>

  <div class="middle">
    <h1>${post.title}</h1>
    <p class="kicker">${post.kicker}</p>
  </div>

  <div class="bottom">
    <div class="url">sleepcycler.com</div>
    <div class="cta">Read the full breakdown &rarr;</div>
  </div>
</body>
</html>`;

async function renderToImage(browser, html, width, height, outPath, { scale = 1, type = 'png', quality } = {}) {
  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: scale,
  });
  const page = await context.newPage();
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  const opts = { path: outPath, omitBackground: false, type };
  if (type === 'jpeg' && quality) opts.quality = quality;
  await page.screenshot(opts);
  await context.close();
  console.log(`Wrote ${outPath}`);
}

(async () => {
  const browser = await chromium.launch();
  try {
    // OG image: JPEG @ quality 88 — social platforms don't need retina, this cuts ~90% off size
    await renderToImage(browser, ogTemplate(), 1200, 630, path.join(OUT, 'og-image.jpg'), { scale: 1, type: 'jpeg', quality: 88 });
    // Also keep a PNG fallback for any consumer that wants lossless
    await renderToImage(browser, ogTemplate(), 1200, 630, path.join(OUT, 'og-image.png'), { scale: 1, type: 'png' });
    await renderToImage(browser, appleTouchTemplate(), 180, 180, path.join(OUT, 'apple-touch-icon.png'), { scale: 1, type: 'png' });
    await renderToImage(browser, faviconTemplate(32), 32, 32, path.join(OUT, 'favicon-32.png'), { scale: 1, type: 'png' });
    fs.writeFileSync(path.join(OUT, 'favicon.svg'), faviconSvg);
    console.log(`Wrote ${path.join(OUT, 'favicon.svg')}`);

    // Pinterest pins: 1000x1500 vertical, one per blog post
    const pinOut = path.join(OUT, 'pinterest');
    if (!fs.existsSync(pinOut)) fs.mkdirSync(pinOut, { recursive: true });
    for (const post of PINTEREST_POSTS) {
      await renderToImage(
        browser,
        pinterestTemplate(post),
        1000, 1500,
        path.join(pinOut, `${post.slug}.jpg`),
        { scale: 1, type: 'jpeg', quality: 88 }
      );
    }
  } finally {
    await browser.close();
  }
})();
