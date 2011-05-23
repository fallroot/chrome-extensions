(function() {
  var top    = document.createElement('a'),
      topImg = document.createElement('img');

  topImg.src = chrome.extension.getURL('top.png');
  top.addEventListener('click', function() {
    window.scrollTo(0, 0);
  });
  top.appendChild(topImg);

  var bottom    = document.createElement('a'),
      bottomImg = document.createElement('img');

  bottomImg.src = chrome.extension.getURL('bottom.png');
  bottom.addEventListener('click', function() {
    window.scrollTo(0, document.body.scrollHeight);
  });
  bottom.appendChild(bottomImg);

  var wrap = document.createElement('div');
  wrap.style.position = 'fixed';
  wrap.style.right    = 0;
  wrap.style.top      = 0;
  wrap.style.zIndex   = 10000;

  wrap.appendChild(top);
  wrap.appendChild(bottom);

  document.body.appendChild(wrap);
})();