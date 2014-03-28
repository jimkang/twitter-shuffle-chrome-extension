((function shuffleTweets() {
  NodeList.prototype.forEach = function nodeListEach(callback, thisArg) {
    for (var i = 0; i < this.length; ++i) {
      var value = this[i];
      if (thisArg) {
        callback.bind(thisArg)(value, i, this);
      }
      else {
        callback(value, i, this);
      }
    }
  };

  // From Underscore.
  function shuffle(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    obj.forEach(function(value) {
      rand = ~~(Math.random(index++));
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  }

  var tweetTexts = document.querySelectorAll('.tweet-text');
  var shuffledTexts = shuffle(tweetTexts);

  tweetTexts.forEach(function replaceWithShuffled(tweetText, i) {
    var parent = tweetText.parentNode;
    parent.removeChild(tweetText);
    parent.appendChild(shuffledTexts[i]);
  });
})());

