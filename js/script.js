'use strict';
(function() {
    var tpl = document.getElementById('tempcarusl').innerHTML;
    var results = document.getElementById('result');

    for(var i = 0; i < carusData.length; i++){
        var generator = Mustache.render(tpl, carusData[i]);
        results.insertAdjacentHTML('beforeend', generator);
    }



  var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity( elem, {
      // options
      cellAlign: 'left',
      contain: true,
      lazyLoad: true, 
      pageDots: false, 
      hash: true
    });
    //reset
var flkty = new Flickity('.main-carousel');

var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelectorAll('.button');
buttons = fizzyUIUtils.makeArray( buttons );

buttonGroup.addEventListener( 'click', function( event ) {
  // filter for button clicks
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var index = buttons.indexOf( event.target );
  flkty.select( index );
});
// pasek postepu
var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});
})();
