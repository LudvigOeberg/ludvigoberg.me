$(window).scroll(function() {
  var windowOffset = $(window).scrollTop();

  var reachedEl = function($el) {
    var divOffset 	 = $el.offset().top;
    var reachedDiv 	 = (divOffset - windowOffset - 400) <= 0;
    return reachedDiv;
  };
  
  var $safelloEl = $('section.safello');
  if (reachedEl($safelloEl)) {
    $safelloEl.addClass('show');
  } else {
    $safelloEl.removeClass('show');
  }

  var $genesisEl = $('section.genesis-block');
  if (reachedEl($genesisEl)) {
    $genesisEl.addClass('show');
  } else {
    $genesisEl.removeClass('show');
  }

  var $chromawayEl = $('section.chromaway');
  if (reachedEl($chromawayEl)) {
    $chromawayEl.addClass('show');
  } else {
    $chromawayEl.removeClass('show');
  }

  var $eventsEl = $('section.events');
  if (reachedEl($eventsEl)) {
    $eventsEl.addClass('show');
  } else {
    $eventsEl.removeClass('show');
  }

});

// Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-79748020-1', 'auto');
  ga('send', 'pageview');
