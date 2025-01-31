const puppeteer = require("puppeteer-extra");

// Add stealth plugin and use defaults
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

const { executablePath } = require("puppeteer");
const url_16 = "https://www.apple.com/in/shop/buy-iphone/iphone-16-pro";

async function givePage() {
    const browser = await puppeteer.launch({ headless: false, executablePath: executablePath() });
    let page = await browser.newPage();
    return page;
}

async function run() {
    let page = await givePage();
    await page.goto(url_16);
    await add_to_cart(page);
}

async function add_to_cart(page) {
    selector = "input[data-autom='dimensionScreensize6_3inch']";
    await page.waitForSelector(selector);
    await page.evaluate(()=>document.querySelector("input[data-autom='dimensionScreensize6_3inch']").click());
    selector ="input[value='deserttitanium']"
    await page.waitForSelector(selector)
    await page.evaluate((s)=>document.querySelector(s).click(),selector);

}

run();
 