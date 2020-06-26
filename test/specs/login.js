function login() {
    browser.deleteAllCookies();
    browser.maximizeWindow();
    browser.url('https://stage.pasv.us/user/login');
    $("//input[@name='email']").setValue('lutka@yahoo.com'); // change
    $("//input[@name='password']").setValue('lutka'); // change
    $("//button[@type='submit']").click();
}

module.exports = login;