var protractor = require('protractor');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var testAmazonWrapper = function(){

	this.Given(/^I open Amazon website$/, function(next) {
		browser.driver.navigate().to('http://www.amazon.com/');
		browser.driver.manage().window().maximize();

		next();
	});

	this.When(/^I search book "([^"]*)"$/, function(book, next) {
		browser.driver.findElement(By.id('twotabsearchtextbox')).sendKeys(book);
		browser.driver.findElement(By.className('nav-submit-input')).click();
        next();
    });

    this.Then(/^I should see the book "([^"]*)" in search result$/, function(book,next) {
    	chai.expect(browser.driver.findElement(By.linkText(book))).to.exist;
        next();
    });
	
};

module.exports = testAmazonWrapper;