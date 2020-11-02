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

4.1  Run Single Test:

```
$ MATCH='testname.js' npm run singleTest 
```

```
4.2 Running in browserstack:

```
$  ENV=browserStack  npm run test
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

### CI Override

To change the variable during the CI process a special `.env` file can be found on the `helpers` folder, this has the same variables but the values are changed to keys so it can easily be replaced by any value.

---

# Test Automation Process

## Process to start a new set of tests:

1. git checkout master
2. git pull origin master
3. git checkout -b “[BranchName]”

## Process to send completed tests:

1. git add -A
2. git commit -m “[Insert comment here]”
3. git push origin [BranchName]

## Process to review tests:

1. git fetch
2. git checkout [TargetBranchName]
3. git pull origin [TargetBranchName]
4. Run tests locally.
5. Notify if there is any issue when running the tests locally.

## If everything is alright, then:

1. The owner of the branch makes a `merge request` on Gitlab.
2. The reviewer accepts the `merge request` of the new tests on Gitlab.
