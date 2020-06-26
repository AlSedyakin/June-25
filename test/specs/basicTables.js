const {expect} = require('chai');


describe('REGISTRATION PAGE', () => {

    before(() => {
        browser.maximizeWindow();
        browser.url('https://app.pasv.us/user/register');

    })

    it('should Title is correct', function () {
        const actualText = $('//h1').getText();
        const expectedText = 'User Register';
        expect(actualText).eq(expectedText);
    });

    it('should fill out name in the field', function () {
        const inputFirstName = $('//input[@name=\'firstName\']');
        inputFirstName.setValue('Egor');
    });

    it('should input first name is valid ', function () {
        const inputFirstName = $('//input[@name=\'firstName\']');
        browser.keys
    });
})