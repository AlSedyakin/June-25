const login = require("./login");

describe('EDIT PROFILE', () => {
    before(() => {
        login();
    })
    it('Check size t-short ', function () {
        // $("//select[@name='tShirtSize']").selectByVisibleText('Men/Unisex - XL');

        browser.pause(2000);
    });

    it('should click I UNDERSTOOD EVERYTHING', function () {
        const elem = $("//label[@for='input-1']");
        elem.click();
        const res = $("//input[@id='input-1']");
        expect(res.isSelected()).true;

    });
    it('should click on check box Helped classmates', function () {
        const elem = $("//label[@for='input-2']");
        elem.click();
        const res = $("//input[@id='input-2']");
        expect(res.isSelected()).true;
        browser.pause(2000)
    });

})

//gfgf
/ ggfgff