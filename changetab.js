window.onload = function () {
  var doc = document;
  var pageTitle = doc.title;
  var attentionMessage = 'Ayo teman balik kesini!';
  var blinkInterval;

  doc.addEventListener('visibilitychange', function () {
    var isPageActive = !doc.hidden;
    if (isPageActive) {
      doc.title = pageTitle;
      clearInterval(blinkInterval);
      blinkInterval = null;
    } else if (!blinkInterval) {
      blinkInterval = blink();
    }
  });

  function blink() {
    return setInterval(function () {
      doc.title =
        doc.title === attentionMessage ? pageTitle : attentionMessage;
    }, 100);
  }
};
