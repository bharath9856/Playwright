import {Given, When, Then } from "@cucumber/cucumber"
import {chromium, Page, Browser} from "@playwright/test"

let browser:Browser;
let page:Page;

//const {Given, When, Then } = require('@cucumber/cucumber');



         Given('User navigates to the application', async function () {
           browser = await chromium.launch({headless:false});
           page = await browser.newPage();
           await page.goto("https://bookcart.azurewebsites.net/");
         });


         Given('User click on the login link', async function () {
           await page.locator("(//span[text()='Login'])[1]").click()
         });



         Given('User enter the username as {string}', async function (username) {
           await page.locator("//input[@formcontrolname='username']").type(username);
         });


         Given('User enter the password as {string}', async function (password) {
          await page.locator("//input[@type='password']").type(password);
         });



         When('user click on the login button', async function () {
           await page.locator("//buttn[@color='primary']").click();
         });


         Then('Login should be success', async function () {
           
         });

         When('User click on the login button', async function () {
        
          });
 
   
 
          When('Login should fail', async function () {
        
          });
 