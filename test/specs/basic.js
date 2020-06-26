describe('Test Progress Monitor first page', () => {
    it('should have the right title', () => {
        browser.url('https://app.pasv.us');
        const expectedTitle = 'Progress Monitor';
        const actualTitle = browser.getTitle();
        expect(actualTitle).toEqual(expectedTitle);
    })


    it('should chck Login button text', () => {
        const element = $('//a[@qa=\'login-link\']');
        const text = element.getText();
        const expected = 'Login';
        expect(text).toEqual(expected);
    })

    it('should click to Login and go to the login page', () => {
        const element = $('//a[@qa=\'login-link\']');
        element.click();

    })

    it('should check Login page title', () => {
        const elementText = $('//h1').getText();
        const expected = 'User Login';
        expect(elementText).toEqual(expected);

    })

})

describe('Main page', () => {

    it('should Title main page is present and correct', function () {
        browser.url('https://stage.pasv.us/');
        const titleProgressMonitor = "//span[@id='site-name']";
        const text = $(titleProgressMonitor).getText();
        expect(text).toEqual("Progress Monitor")
    });

    it('should Title main page is cliclable', function () {
        const titleProgressMonitor = "//span[@id='site-name']";
        const result = $(titleProgressMonitor).isClickable();
        expect(result).toEqual(true);
    });

    // it('should verify text is login button', function () {
    //     const loginButton = $(//a[@class='nav-link']);
    //     const textOfLogin = $(loginButton).getText();
    //     expect(loginButton).toEqual('Login')
    // });

})