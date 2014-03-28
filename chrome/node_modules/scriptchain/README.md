scriptchain
==============

This is a helper for Chrome extensions that injects a chain of JavaScript files into a content page in sequence. It's only for Chrome extensions and is not a Node module; it's in NPM just for convenience.

Usage
-----

If you are injecting JavaScript files into a content page, and they depend on each other, pass their names to createScriptChain with the dependencies first, and the 'app file' last.

Example Chrome extension background.js:

    var scriptchain = createScriptChain(
      ['readability.js', 'parser.js', 'onebyone.js'], null, false
    );

    chrome.browserAction.onClicked.addListener(function respondToClick(tab) {
      scriptchain.loadChain();
    });

That's it.

License
-------

MIT.
