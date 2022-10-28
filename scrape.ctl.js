const category = require('./scraper')

const scapeCtr = async (browserInstance) => {
  const url = 'https://phongtro123.com/'
  try {
    let browser = await browserInstance
    let categories = category.scrapeCate(browser, url)
  } catch (error) {
    console.log('scapeCtr' + error)
  }
}

module.exports = scapeCtr