const { chromium } = require('@playwright/test');

const BASE_URL = 'https://www.sleepcycler.com';

const PAGES = [
  { name: '01-homepage', path: '/' },
  { name: '02-homepage-mobile', path: '/', mobile: true },
  { name: '03-about', path: '/about' },
  { name: '04-sleep-tips', path: '/sleep-tips' },
  { name: '05-best-mattresses', path: '/best-mattresses' },
  { name: '06-shift-worker', path: '/shift-worker-sleep-calculator' },
  { name: '07-sleep-debt', path: '/sleep-debt-calculator' },
  { name: '08-blog-index', path: '/blog' },
  { name: '09-blog-wakeup-6am', path: '/blog/what-time-to-go-to-bed-wake-up-6am' },
  { name: '10-blog-wakeup-7am', path: '/blog/what-time-to-sleep-wake-up-7am' },
  { name: '11-blog-cycles', path: '/blog/how-many-sleep-cycles-do-you-need' },
  { name: '12-blog-best-wake', path: '/blog/best-time-to-wake-up-for-deep-sleep' },
  { name: '13-blog-deprivation', path: '/blog/sleep-deprivation-effects-one-night' },
];

(async () => {
  const browser = await chromium.launch();

  for (const page of PAGES) {
    const context = await browser.newContext(
      page.mobile ? {
        viewport: { width: 390, height: 844 },
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15'
      } : {
        viewport: { width: 1440, height: 900 }
      }
    );

    const p = await context.newPage();
    await p.goto(`${BASE_URL}${page.path}`, { waitUntil: 'networkidle' });
    await p.waitForTimeout(1000);
    await p.screenshot({
      path: `screenshots/${page.name}.png`,
      fullPage: true
    });

    // For homepage — also capture after clicking Calculate
    if (page.name === '01-homepage') {
      await p.click('button[type="submit"]');
      await p.waitForTimeout(500);
      await p.screenshot({
        path: 'screenshots/01b-homepage-results.png',
        fullPage: true
      });

      // Also capture Sleep Now result
      await p.reload({ waitUntil: 'networkidle' });
      await p.waitForTimeout(500);
      const sleepNowBtn = await p.getByText('Sleep now');
      await sleepNowBtn.click();
      await p.waitForTimeout(500);
      await p.screenshot({
        path: 'screenshots/01c-homepage-sleep-now.png',
        fullPage: true
      });
    }

    // For sleep debt — also capture after filling in values
    if (page.name === '07-sleep-debt') {
      const inputs = await p.locator('input[type="number"]').all();
      const values = ['6', '5', '7', '6', '5', '6', '7'];
      for (let i = 0; i < inputs.length; i++) {
        await inputs[i].fill(values[i]);
      }
      await p.getByText('Calculate Sleep Debt').click();
      await p.waitForTimeout(500);
      await p.screenshot({
        path: 'screenshots/07b-sleep-debt-results.png',
        fullPage: true
      });
    }

    await context.close();
    console.log(`✅ ${page.name}`);
  }

  await browser.close();
  console.log('Done. Screenshots saved to /screenshots folder.');
})();
