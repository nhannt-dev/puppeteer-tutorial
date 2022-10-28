const starBrowser = require("./browser");
const scapeCtr = require("./scrape.ctl");

let browser = starBrowser()

scapeCtr(browser)