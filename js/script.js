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
//mapy
window.initMap = function(){
  var cord = [];
  var mark = [];
  //var la = carusData[0].cords.lat;
  //var lon = carusData[0].cords.lng;
  // console.log(typeof mark);
  //console.log(marker);
  
  // The location of Uluru
var uluru = {lat: carusData[0].cords.lat, lng: carusData[0].cords.lng};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  for (i=0; i<carusData.length; i++){
    cord.push({lat: carusData[i].cords.lat, lng: carusData[i].cords.lng});
   // mark[i] = new google.maps.Marker({position: cord[i], map: map});
   var marker = new google.maps.Marker({position: cord[i], map: map});
  }
  //var marker = new google.maps.Marker({position: uluru, map: map});
  /* var marker2 = new google.maps.Marker({position: cord[1], map: map});
  var marker3 = new google.maps.Marker({position: cord[2], map: map});
  var marker4 = new google.maps.Marker({position: cord[3], map: map});
  var marker5 = new google.maps.Marker({position: cord[4], map: map});
  console.log(marker5); */
}
})();
