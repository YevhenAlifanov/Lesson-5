let assert = require('assert');
const {Builder, By, Key, until} = require('selenium-webdriver');
describe('open Citrus.ua', function() {
  describe('equel of link', function() {
    it('should return -1 when the value is not present', async function() {
      
    let driver = await new Builder().forBrowser('chrome').build();

    //Navigate to url
    await driver.get('http://www.google.com');
    

    await driver.findElement(By.name('q')).sendKeys('Citrus.ua', Key.ENTER);
    await driver.findElement(By.className("LC20lb MBeuO DKV0Md")).click();
    let actualRes = await driver.getCurrentUrl();
    let expectedRes = 'https://www.citrus.ua/';
    assert.deepStrictEqual(actualRes, expectedRes, ('Expected error!'));

    await driver.quit();
    });
  });
});