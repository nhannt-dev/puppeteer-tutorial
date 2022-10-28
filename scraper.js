const scrapeCate = async (browser, url) => {
  try {
    let page = await browser.newPage()
    await page.goto(url)
    await page.waitForSelector('#webpage')

    const dataCate = await page.$$eval('#navbar-menu > ul > li', els => {
      dataCate = els.map((el) => {
        return{
          category: el?.querySelector('a')?.innerText,
          link: el.querySelector('a').getAttribute('href')
        }
      })
      return dataCate
    })

    console.log(dataCate)
    console.log(dataCate.length)

    await page.close()
    await browser.close()
  } catch (error) {
    console.log('scrapeCate' + error)
  }
}

module.exports = { scrapeCate }