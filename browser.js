const puppeteer = require("puppeteer")

const starBrowser = async () => {
  let browser
  try {
    browser = await puppeteer.launch({
      headless: false,
      args: ['--disable-setuid-sandbox'],
      'ignoreHTTPSErrors': true
    })
  } catch (error) {
    console.log('starBrowser' + error)
  }
  return browser
}

module.exports = starBrowser