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
	  // Geocode story
          var geocoder;
	  geocoder = new google.maps.Geocoder();

	  var street_html_element = document.getElementById("street_name");
	  var city_html_element = document.getElementById("city");
	  var lat_and_long = new google.maps.LatLng(geo_lat, geo_long);
	  geocoder.geocode({'latLng': lat_and_long}, function(geolocation_results, geocode_status) {
	      if (geocode_status == google.maps.GeocoderStatus.OK) {
		  if (geolocation_results[0]) {
		      full_address = geolocation_results[0].formatted_address;
		      street_address = full_address.split(",")[0];
		      street_html_element.innerHTML = street_address;
		  } else {
		      alert("Cannot update street address");
		  }
		  if (geolocation_results[3]) {
		      city = geolocation_results[3].formatted_address;
		      city_html_element.innerHTML = city;
		  } else {
		      alert("Cannot update city");
		  }
	      } else {
		  alert("Geocoder failed due to: " + status);
	      }
	  });
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