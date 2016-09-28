describe('BrowserStack Local Testing', function() {
  it('check folder testing', function() {
    browser.driver.get('http://harishved2.browserstack.com').then(function() {
      expect(browser.driver.getPageSource()).toMatch(/Up and running/i);
    });
  });
  it('check only google', function() {
    browser.driver.get('http://google.com').then(function() {
      expect(browser.driver.getPageSource()).toMatch(/Up and running/i);
    });
  });
  it('check only not google', function() {
    browser.driver.get('http://twitter.com').then(function() {
      expect(browser.driver.getPageSource()).toMatch(/Up and running/i);
    });
  });
  it('can check tunnel working', function() {
    browser.driver.get('http://bs-local.com:45691/check').then(function() {
      expect(browser.driver.getPageSource()).toMatch(/Up and running/i);
    });
  });
});
