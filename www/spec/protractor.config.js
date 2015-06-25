exports.config = {
  chromeDriver: '../../node_modules/chromedriver/lib/chromedriver/chromedriver',
  //please verify the stand alone version number matches wheat exists inside node_modules
  seleniumServerJar: '../../node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.45.0.jar',
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  restartBrowserBetweenTests: true,
  capabilities: {
    // You can use other browsers
    // like firefox, phantoms, safari, IE (-_-)
    'browserName': 'chrome'
  },
  specs: [
    './e2e/**/*.js'
  ],
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    isVerbose: true,
  },
  allScriptsTimeout: 20000,
  onPrepare: function() {
    //run once before all protractor tests begin
  }
};