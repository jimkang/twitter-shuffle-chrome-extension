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

  // http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#Modern_method
  function shuffle(array) {
    var swapIndex1 = null;
    var swapIndex1UpperLimit = array.length;
    var swapIndex2 = array.length - 1;
    var swapee = null;

    for (var i = 0; i < array.length; ++i) {
      swapIndex1 = ~~(Math.random() * swapIndex1UpperLimit);

      swapee =  array[swapIndex1];
      array[swapIndex1] = array[swapIndex2];
      array[swapIndex2] = swapee;

      swapIndex1UpperLimit -= 1;
      swapIndex2 -= 1;
    }

    return array;
  }

  var tweetTexts = document.querySelectorAll('.tweet-text');
  var tweetContents = [];
  tweetTexts.forEach(function getContents(tweet) {
    tweetContents.push(tweet.innerHTML);
  });
  var shuffledContents = shuffle(tweetContents);

  tweetTexts.forEach(function replaceWithShuffled(tweetText, i) {
    tweetText.innerHTML = shuffledContents[i];
  });

})());

