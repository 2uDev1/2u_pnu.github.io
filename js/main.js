let mapOptions = {
  center: new naver.maps.LatLng(35.2333775, 129.0798497),
  zoom: 18,
  minZoom: 16,
  zoomControl: false,
  mapDataControl: false,
  logoControlOptions: {
    position: naver.maps.Position.LEFT_BOTTOM
  },
  disableKineticPan: false,
  maxBounds: new naver.maps.LatLngBounds(
    new naver.maps.LatLng(35.2300145, 129.0739435),
    new naver.maps.LatLng(35.2389005, 129.0849727)
  )
};

let map = new naver.maps.Map('map', mapOptions);

// let menuLayer = $('<div style="position:absolute;z-index:10000;background-color:#fff;border:solid 1px #333;padding:10px;display:none;"></div>');

let markerOptions = {
  position: new naver.maps.LatLng(35.2333775, 129.0798497),
  map: map,
  icon: {
    url: './img/circle.png',
    size: new naver.maps.Size(14, 20),
    origin: new naver.maps.Point(0, 0),
    anchor: new naver.maps.Point(7, 10),
  }
}

//let marker = new naver.maps.Marker(markerOptions);
let markerList = [];
let infoList = [];
// map.getPanes().floatPane.appendChild(menuLayer[0]);

// naver.maps.Event.addListener(map, 'rightclick', function(e) {
//   let coordHtml = 'lat: ' + e.latlng.lat() + '<br />' +
//   'lng: ' + e.latlng.lng() + '<br />';
//   console.log(e);
//   menuLayer.show().css({
//     left: e.offset.x,
//     top: e.offset.y
//   }).html(coordHtml);
// });

naver.maps.Event.addListener(map, 'click', function(e) {
  let marker = new naver.maps.Marker({
    position: e.latlng,
    map: map,
    icon: {
      url: './img/circle.png',
      size: new naver.maps.Size(14, 20),
      origin: new naver.maps.Point(0, 0),
      anchor: new naver.maps.Point(7, 10),
    }
  });
  markerList.push(marker);

  let infoWindow = new naver.maps.InfoWindow({
    content: '<p>lat: ' + e.latlng.lat() + '<br />' + '<p>lng: ' + e.latlng.lng() + '<br /></p>',
    backgroundColor: "#fff",
    borderColor: "#333",
    anchorSize: new naver.maps.Size(20, 20),
    anchorSkew: true,
    anchorColor: "#fff",
    pixelOffset: new naver.maps.Point(5, -5)
  });

  infoList.push(infoWindow);

  naver.maps.Event.addListener(marker, 'rightclick', function(e) {
    const idx = markerList.indexOf(marker);
    marker.setMap(null);
    markerList.splice(idx, 1);
    if (infoList[idx].getMap()) {
      infoList[idx].close();
    }
    infoList.splice(idx, 1);
  });
  naver.maps.Event.addListener(marker, 'click', function(e) {
    const idx = markerList.indexOf(marker);
    if (infoList[idx].getMap()) {
      infoList[idx].close();
    } else {
      infoList[idx].open(map, marker);
    }
  });
});
naver.maps.Event.addListener(map, 'mousedown', function(e) {
  // menuLayer.hide();
});
