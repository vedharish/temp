describe('Google\'s Search Functionality', function() {
  it('can find search results qwertyui', function() {
    browser.get('https://google.com/ncr').then(function() {
      browser.findElement(by.name('qhhhhhh')).sendKeys('BrowserStack').then(function() {
        browser.findElement(by.name('btnG')).click().then(function() {
          browser.wait(function() {
            return browser.findElements(by.id('resultStats')).then(function(elems) {
              return elems.length > 0;
            });;
          });
          //expect(browser.driver.getTitle()).toEqual('BrowserStack - Google Search');
          expect(browser.getTitle()).toEqual('Browser');
        });
      });
    });
  });
  it('can find search results', function() {
    browser.get('https://google.com/ncr').then(function() {
      browser.findElement(by.name('qhhhhhh')).sendKeys('BrowserStack').then(function() {
        browser.findElement(by.name('btnG')).click().then(function() {
          browser.wait(function() {
            return browser.findElements(by.id('resultStats')).then(function(elems) {
              return elems.length > 0;
            });;
          });
          //expect(browser.driver.getTitle()).toEqual('BrowserStack - Google Search');
          expect(browser.getTitle()).toEqual('Browser');
        });
      });
    });
  });
});
