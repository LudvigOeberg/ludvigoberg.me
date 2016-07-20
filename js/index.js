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
