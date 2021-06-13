document.addEventListener("DOMContentLoaded", function (event) {

  let info = document.querySelector('.info')
  info.addEventListener('click', (event) => {
    info.classList.toggle('--hidden')
  })

  let map = L.map('map', window.MAPsettings)

  L.tileLayer('./tiles/{z}/{x}/{y}.png').addTo(map);

  map.on('click', function(e){
    if (e.originalEvent.altKey) {
      var coord = e.latlng;
      var lat = coord.lat;
      var lng = coord.lng;
      alert("lat: " + lat.toFixed(2) + ",\r\nlng: " + lng.toFixed(2) + ",")
    }
  });


  let divIcon = L.divIcon({className: 'div-icon'});
  window.MAPmarker.forEach((marker) => {
    let leafletMarker = L.marker([marker.lat, marker.lng], {icon: divIcon}).addTo(map).bindPopup(`<p>${marker.text}</p>`);
  })

});
