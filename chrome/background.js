var scriptchain = createScriptChain(['@shuffle.js'], null, false);

chrome.browserAction.onClicked.addListener(function respondToClick(tab) {
  scriptchain.loadChain();
});

