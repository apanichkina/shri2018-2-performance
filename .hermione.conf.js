module.exports = {
  baseUrl: 'http://localhost:3000',
  gridUrl: 'http://0.0.0.0:4444/wd/hub',

  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',

      },
      windowSize: {
        width: 1920,
        height: 1080
      }
    }
  },

  plugins: {
    'html-reporter/hermione': {
      path: 'hermione-html-report'
    }
  }
};
