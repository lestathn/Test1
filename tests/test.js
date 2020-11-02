var {By, until} = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var {driver, base_url} = require('../index.js');
var expect = require('chai').expect;
var utils = require("../helpers/util.js");

var tasks = new utils.DriverTasks(); 
USER_EMAIL = process.env.USER_EMAIL;
USER_PASSWORD = process.env.USER_PASSWORD;

test.describe( 'Test Suite' , function(){
    this.timeout('60000');

    test.before(function(){
        return driver.get(base_url);
    });

    test.after(function(){
        driver.takeScreenshot().then(function(data) {
            utils.writeScreenshot(data, 'screenshot');
            driver.close();
        });
    });


    test.it( 'Login', function(){
        driver.sleep(4000);
        
        inputUser= tasks.findElement('txtUsername','id');
        inputUser.sendKeys(USER_EMAIL);
        driver.sleep(3000);
        buttonLogin = driver.findElement(By.id('btnLogin'));
        driver.sleep(3000);
    });

   
});