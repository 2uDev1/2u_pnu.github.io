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

naver.maps.Event.addListener(map, 'click', function(e) {
  barrierList.forEach((ele, i, arr) => {
    if (ele.infoWindow.getMap()) ele.infoWindow.close();
  });
});
