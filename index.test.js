const {Builder, Capabilities, By} = require('selenium-webdriver')
require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

describe('3 Movie tests', async () => {
    test('crossing off movie', async () => {
        const inputField = await driver.findElement(By.xpath('//form/input'))
        await inputField.sendKeys('Shrek')
        await driver.sleep(2000)

        await driver.findElement(By.xpath('//form/button')).click()
        await driver.sleep(2000)
        
        await driver.findElement(By.xpath('//ul/li/span')).click()
        await driver.sleep(2000)
        expect('')
    })

    test('delete a movie', async () => {
        await driver.findElement(By.xpath('//ul/li/button')).click()
        await driver.sleep(2000)
    }) 

    test('notifications are working', async () => {
        const inputField = await driver.findElement(By.xpath('//form/input'))
        await inputField.sendKeys('Shrek')
        await driver.sleep(2000)

        await driver.findElement(By.xpath('//form/button')).click()
        await driver.sleep(2000)

        await driver.findElement(By.xpath('//ul/li/button')).click()

        await driver.findElement(By.xpath('//*[text()="Shrek deleted!"]'))
        // expect(await driver.findElement(By.id('message')).isDisplayed()).toEqual(true)
    })
})      

