chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.windows.create({
    url: chrome.runtime.getURL("headers.html"),
    type: "popup", width: 400, height: 800, left: 1200 
  }, function(win) {
    // win represents the Window object from windows API
    // Do something after opening

  });
});
