var protractor = require('protractor');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var testAmazonWrapper = function(){

	this.Given(/^I open Amazon website$/, function(next) {

		next();
	});

	this.When(/^I search book "([^"]*)"$/, function(book, next) {

        next();
    });

    this.Then(/^I should see the book "([^"]*)" in search result$/, function(book,next) {
    	
        next();
    });	
};

module.exports = testAmazonWrapper;