var {By, until} = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var {driver, base_url} = require('../index.js');
var expect = require('chai').expect;
var utils = require("../helpers/util.js");
const readXlsxFile = require('read-excel-file/node');
const fs = require('fs');
const { random } = require('core-js/fn/number');



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
        inputPassword = driver.findElement(By.id('txtPassword'));
        inputPassword.sendKeys(USER_PASSWORD);
        driver.sleep(3000);
        driver.findElement(By.id('btnLogin')).click();
        
        driver.sleep(3000);
    });

    test.it('Revisar nombre de el Admin',function(){
        driver.sleep(3000);
        userName=driver.findElement(By.css('#option-menu > li:nth-child(1)'));
        userName.getText().then(function(text){
            expect(text).contains('Welcome User');
        });
        driver.sleep(3000);
        
    });

    test.it('Creacion de Cliente', function(){
        
        tasks.hoverElement('#admin > a','css');
        driver.sleep(3000);
        tasks.hoverElement('#admin > ul > li:nth-child(8) > a','css');        
        driver.sleep(3000);
        driver.findElement(By.css('#admin > ul > li:nth-child(8) > ul > li:nth-child(1) > a')).click();
        driver.sleep(3000);

        
        frame1 = tasks.findElement('rightMenu','name');
        driver.switchTo().frame(frame1); 
       //readXlsxFile(fs.createReadStream('users.xlsx')).then(rows=>{
            //users=rows[0];            
            for(i=0; i<5; i++){
                users= Math.random();
                driver.findElement(By.id('btnAdd')).click();
                customerName = driver.findElement(By.id('addCustomer_customerName'));
                customerName.sendKeys("customer"+users);//users[i][0]);
                driver.sleep(3000);
                customerDescription = driver.findElement(By.id('addCustomer_description'));
                customerDescription.sendKeys("descrption"+users);//users[i][1]);
                driver.sleep(3000);
                driver.findElement(By.id('btnSave')).click();
            };

        //});
        
        

    });

   
});