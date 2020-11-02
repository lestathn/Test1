# Selenium JS Example Project

This is a base project using the [`selenium-webdriver`](http://seleniumhq.github.io/selenium/docs/api/javascript/index.html) for JavaScript and Mocha to handle the tests and reporting.

## Run Locally

1. Install [Mocha](http://mochajs.org) globally

```
$ npm install -g mocha
```

4. Install [cross-env](https://www.npmjs.com/package/cross-env) to make sure Environment Variables are set correctly in each OS:

```
$ npm install -g cross-env
```

3. Run all project dependencies:

```
$ npm install
```

4. Run the following command to run the test:

```
$ npm run test
```

On Mac, if the Chrome Driver fails, run this:

```
$ npm install -g chromedriver --save
```

## Configuration Overrides

All variables can be modified by changing the `.env` file with the appropiate files. The available environment variables to override are:

- MOCHA_BROWSER: specifies the webdriver to use. Options are:

  - phantomjs
  - chrome
  - headlessChrome
  - firefox
  - opera
  - safari
  - ie
  - edge

- TEST_BASE_URL: specifies which url the tests should run on.
