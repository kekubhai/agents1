// const puppeteer = require("puppeteer-extra");

// // Add stealth plugin and use defaults
// const StealthPlugin = require("puppeteer-extra-plugin-stealth");
// puppeteer.use(StealthPlugin());

// const { executablePath } = require("puppeteer");
// const url_16 = "https://www.apple.com/in/shop/buy-iphone/iphone-16-pro";

// async function givePage() {
//     const browser = await puppeteer.launch({ headless: false, executablePath: executablePath() });
//     let page = await browser.newPage();
//     return page;
// }

// async function run() {
//     let page = await givePage();
//     await page.goto(url_16);
//     await add_to_cart(page);
// }

// async function add_to_cart(page) {
//     selector = "input[data-autom='dimensionScreensize6_3inch']";
//     await page.waitForSelector(selector);
//     await page.evaluate(()=>document.querySelector("input[data-autom='dimensionScreensize6_3inch']").click());
//     selector ="input[value='deserttitanium']"
//     await page.waitForSelector(selector)
//     await page.evaluate((s)=>document.querySelector(s).click(),selector);
//  selector="input[data=autom='dimensionCapacity256gb']"
//  await page.waitForSelector(selector)
//  await page.evaluate((s)=>document.querySelector(s).click(),selector);
 

//  selector='[id="noTradeIn_label"]'
//  await page.evaluate((s)=>document.querySelector(s).click(),selector);
//  await new Promise(r=>setTimeout(r,1500));
 

 
//  selector='[data-autom="purchaseGroupOptionfullprice_price"]'
//  await page.evaluate((s)=>document.querySelector(s).click(),selector);
//  await new Promise(r=>setTimeout(r,1500));
 


 
//  selector='.form-selector-title.rf-bfe-dimension-simfree';
//  await page.evaluate((s)=>document.querySelector(s).click(),selector);
//  await new Promise(r=>setTimeout(r,1500));
 
 
//  selector='[id="applecareplus_59_noapplecare_label"]'
//  await page.evaluate((s)=>document.querySelector(s).click(),selector);
//  await new Promise(r=>setTimeout(r,1500));
//  await page.evaluate((s)=>document.querySelector(s).click(),selector);
 

// }
// async function shipping(page){
//     selector="button[name='proceed']"
//     await page.waitForSelector(selector)
//   await page.evaluate((s)=>document.querySelector(s).click(),selector)   
// }

// async function smart_click_pause(page,selector){
    
//     await page.waitForSelector(selector)
//     await page.evaluate((s)=>document.querySelector(s).click(),selector);
    
   
// }

// run();
 


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
    await shipping(page);
}

async function add_to_cart(page) {
await smart_click_pause(page,"input[data-autom='dimensionScreensize6_3inch']", 0);
await smart_click_pause(page,"input[value='deserttitanium']", 0);
await smart_click_pause(page,"input[data=autom='dimensionCapacity256gb']", 0);
await smart_click_pause(page,"[id='noTradeIn_label']", 0);
await smart_click_pause(page,"[data-autom='purchaseGroupOptionfullprice_price']", 0);
await smart_click_pause(page,".form-selector-title.rf-bfe-dimension-simfree", 0);
await smart_click_pause(page,"[id='applecareplus_59_noapplecare_label']", 0);
await smart_click_pause(page,'[data-autom="add-to-cart"]',0);
}
async function shipping(page){
    await smart_click_pause(page,"button[name='proceed']", 0);
    await smart_click_pause(page,"[id='shoppingCart.actions.navCheckout']",0)
    await smart_click_pause(page,"[id='signIn.guestLogin.guestLogin']",0)
    await smart_click_pause(page,"id='rs-checkout-continue-button-bottom']",0)
   

    selector ="input[id='checkout.shipping.addressSelector.newAddress.address.firstName']"
    await    page.waitForSetector(setector)
    await page.type(selector,"Anirban")




    await page.type("input[name='lastName']",'Ghosh');
    await     
    page. type( "input[name='street']",'India');
    
    
    const   input= await page.$("input[name='postalCode']");

    await input.click({clickCount:3})
    await input.type('20740');


    await page.type("input[name='emailAddress']",'ghoshanirban690@gmail.com');

    await new Promise(r=>setTimeout(r,1000));
    await page.type(" input[name='fullDaytimePhone']", '6764837482' ) ;
    await new Promise(r =>setTimeout(r,1000));
    await page.click('#rs-checkout-continue-button-bottom');
}

async function payment(page){
    await smart_click_pause(page,"input[id='checkout.billing.billingOption.selectBilloptions.selectBillingOptions']",0)
    await page.type("input[id='checkout.billing.billingOptions.creditCard.cardInputs.cardInput-0.cardNumber']");
    await page.waitForSelector(selector)
    await page.type(selector,"340191313610053");

    await page.type("inpu")

}
async function smart_click_pause(page,selector,remove){
    
    await page.waitForSelector(selector)
    await page.evaluate((s)=>document.querySelector(s).click(),selector);
    await new Promise(r=>setTimeout(r,pause));
    
   
}

run();
 
