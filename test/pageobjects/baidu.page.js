var Page = require('./page');

class BaiduPage extends Page {

    /**
    * define elements
    */

    get kw() { return $('#kw'); }
    get su() { return $('#su'); }

    /**
     * define or overwrite page methods
     */
    open() {
        super.open('');
    }

    /**
     * your page specific methods
     */

    waitForloginPageToLoad() {
        if (!this.wd.isDisplayed()) {
            this.wd.waitForDisplayed(5000);
        }
    }

    search(kw) {
        // browser.debug();
        this.kw.setValue(kw);
        this.su.click();
    }
}

module.exports = new BaiduPage();