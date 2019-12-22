const puppeteer = require('puppeteer');

async function getPage () {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  console.log('Есть заход!');

  await browser.close();
};

setInterval(getPage, 5000);
