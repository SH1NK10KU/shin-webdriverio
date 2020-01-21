var assert = require('assert')
var BaiduPage = require('../pageobjects/baidu.page');

/*
	This is a BDD test using Mocha JavaScript framework
*/

describe('Baidu - Search', function () {
    it('should allow user to search', function () {
        BaiduPage.open();
        BaiduPage.search('WebDriverIO');
        browser.getTitle().should.be.equal('WebDriverIO_百度搜索');
    });
});