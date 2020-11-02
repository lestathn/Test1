require('dotenv').config();
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var firefox = require('selenium-webdriver/firefox');
var phantomjs = require('selenium-webdriver/phantomjs');
var safari = require('selenium-webdriver/safari');
var opera = require('selenium-webdriver/opera');
var edge = require('selenium-webdriver/edge');
var ie = require('selenium-webdriver/ie');
var {
  setBrowserService,
  getDriverConfig,
} = require('./helpers/driversServices.js');
var path = require('path');
var addToPath = require('add-to-path');
const env = process.env.ENV;
addToPath([__dirname + '\\drivers']);

var browser = process.env.MOCHA_BROWSER || 'chrome';

capabilities = {
  os_version: '10',
  resolution: '1920x1080',
  browserName: 'Chrome',
  browser_version: 'latest-beta',
  os: 'Windows',
  name: 'Gigawatt Automation Test',
  build: 'BStack Build Number 1', // CI/CD job or build name
  'browserstack.user': 'eldercerrato3',
  'browserstack.key': 'kTN3uKCew9NSNqk5AdBh',
};
cap = {
  browserName: 'Chrome',
  browserVersion: '84.0',
};

if (env == 'browserStack') {
  driver = new webdriver.Builder()
  .usingServer('https://hub-cloud.browserstack.com/wd/hub')
  .withCapabilities(capabilities)
  .build();
} else if (env == 'selenoid') {
  driver = new webdriver.Builder()
  .usingServer('http://3.135.205.131:4444')
  .withCapabilities(cap)
  .build();
} else {
  driver = getDriverConfig(browser);
}

//http://3.135.205.131:8080/#/capabilities/

exports.driver = driver;
exports.base_url = process.env.TEST_BASE_URL;
