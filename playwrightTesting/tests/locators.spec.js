
const {test,expect}=require('@playwright/test')

test("Locators", async({page})=>{
  await page.goto('https://sireto.io/')

  // click on career Let's Talk Button

  // here locator can be 
  // property, css,xpath
  await page.locator('').click()


})