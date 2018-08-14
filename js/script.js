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
    attachSecretMessage(marker, index);
  }

  function attachSecretMessage(marker, index) {
    marker.addListener('click', function() {
      flkty.select( index );
      console.log(index);
      console.log("działa");
    });
  }
 /*  var bounds = {
    north: -25.363882,
    south: -31.203405,
    east: 131.044922,
    west: 125.244141
  }; */

  // Display the area between the location southWest and northEast.
  /* map.fitBounds(bounds); */

  // Add 5 markers to map at random locations.
  // For each of these markers, give them a title with their index, and when
  // they are clicked they should open an infowindow with text from a secret
  // message.
  /* var secretMessages = ['This', 'is', 'the', 'secret', 'message'];
  var lngSpan = bounds.east - bounds.west;
  var latSpan = bounds.north - bounds.south;
  for (var i = 0; i < secretMessages.length; ++i) {
    var marker = new google.maps.Marker({
      position: {
        lat: bounds.south + latSpan * Math.random(),
        lng: bounds.west + lngSpan * Math.random()
      },
      map: map
    });
    attachSecretMessage(marker, secretMessages[i]);
  }
}

// Attaches an info window to a marker with the provided message. When the
// marker is clicked, the info window will open with the secret message.
function attachSecretMessage(marker, secretMessage) {
  var infowindow = new google.maps.InfoWindow({
    content: secretMessage
  });

  marker.addListener('click', function() {
    infowindow.open(marker.get('map'), marker);
  }); */

  flkty.on( 'change', function( index ) {
    console.log('Flickity change ' + index );
    var cordy =  {lat: carusData[index].cords.lat, lng: carusData[index].cords.lng};
    map.panTo(cordy);
        
    // A następnie zmieniamy powiększenie mapy:
    map.setZoom(4);
  });
}

//mapy stare
/* var uluru = {lat: carusData[0].cords.lat, lng: carusData[0].cords.lng};
for (var i=0; i<carusData.length; i++){
  
  cord.push({lat: carusData[i].cords.lat, lng: carusData[i].cords.lng});
 
} */
/* initMap = function(){
  markera = 3;
  console.log(markera); */
  //var la = carusData[0].cords.lat;
  //var lon = carusData[0].cords.lng;
  // console.log(typeof mark);
  //console.log(marker);
  
  // The location of Uluru

  // The map, centered at Uluru
  /* var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  for (var i=0; i<carusData.length; i++){
    // *///console.log("aaa");
    //console.log(i);
    //console.log(markera);
    //console.log(carusData.length);
    //cord.push({lat: carusData[i].cords.lat, lng: carusData[i].cords.lng});
    //marker[i] = new google.maps.Marker({position: cord[i], map: map});
    //console.log(marker);
    
    //markera = new google.maps.Marker({position: cord[0], map: map});
    //console.log(typeof marker);
   //var marker = new google.maps.Marker({position: cord[i], map: map});
   //console.log(marker);
   //var mark = marker[i];

  // mark.addEventListener( 'click', function() {
 //   flkty.select( i );
 // });
  //}
  
 /*  for (var i=0; i<marker.length; i++){
    console.log("klick");
    console.log(i);
    marker[i].addEventListener("click", falala(i), false);
    
  } */
  //var marker = new google.maps.Marker({position: uluru, map: map});
  /* var marker2 = new google.maps.Marker({position: cord[1], map: map});
  var marker3 = new google.maps.Marker({position: cord[2], map: map});
  var marker4 = new google.maps.Marker({position: cord[3], map: map});
  var marker5 = new google.maps.Marker({position: cord[4], map: map});
  console.log(marker5); */
//}
//console.log(markera);
/* console.log(markera);
console.log(typeof marker);
console.log(marker);
markera.addEventListener("click", falala(i));
var falala = function(a){
  console.log("fala");
  
  console.log(a);
  flkty.select(a);
 
} */

})();
