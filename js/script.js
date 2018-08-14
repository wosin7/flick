//'use strict';

(function() {
  var markera = 0;
  var cord = [];
  var marker = [];
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
     // hash: true
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
//inicjacja mapy
 initMap = function() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: carusData[0].cords.lat, lng: carusData[0].cords.lng }
  });
  for (var i=0; i<carusData.length; i++){
    var index = i;
   // cord.push({lat: carusData[i].cords.lat, lng: carusData[i].cords.lng});
    var marker = new google.maps.Marker({
      position: {
        lat: carusData[i].cords.lat,
        lng: carusData[i].cords.lng
      },
      map: map
    });
    slideChange(marker, index);
  }

  function slideChange(marker, index) {
    marker.addListener('click', function() {
      flkty.select( index );
      console.log(index);
      console.log("działa");
    });
  }


  flkty.on( 'change', function( index ) {
    console.log('Flickity change ' + index );
    var cordy =  {lat: carusData[index].cords.lat, lng: carusData[index].cords.lng};
    map.panTo(cordy);
        
    // A następnie zmieniamy powiększenie mapy:
    map.setZoom(4);
  });
}



})();
