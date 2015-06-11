;function Globe() {
  var earth = new WE.map('globe');
  WE.tileLayer('http://data.webglearth.com/natural-earth-color/{z}/{x}/{y}.jpg', {
    tileSize: 256,
    tms: true
  }).addTo(earth);

  var mtv = [37.3894, -122.0819];
  var marker2 = WE.marker(mtv).addTo(earth);
  marker2.bindPopup('You are here!', {maxWidth: 120, closeButton: false});

  earth.setView(mtv, 1);
}

window.globe = new Globe();
