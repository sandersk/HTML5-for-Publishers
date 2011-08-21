  function initialize() {
    get_location();

      function draw_map(position) {
	  var geo_lat = position.coords.latitude;
	  var geo_long = position.coords.longitude;
	  var street_view = new google.maps.LatLng(geo_lat, geo_long);
	  var viewOptions = {
              position: street_view,
              pov: {
		  heading: 34,
		  pitch: 10,
		  zoom: 1
              }
	  };
	  var street_view = new google.maps.StreetViewPanorama(document.getElementById("street_view"),viewOptions);
	  update_story(geo_lat, geo_long);
      }

      function update_story(geo_lat, geo_long) {
          alert("Hello");
      }

      function get_location() {
	  if (Modernizr.geolocation) {
	      navigator.geolocation.getCurrentPosition(draw_map, throw_error);
	  } else {
	      // Do nothing. Sigh
	  }
	  
	  function throw_error(position) {
              alert('Unable to geolocate you. Sorry.');
	  }
      }
  }