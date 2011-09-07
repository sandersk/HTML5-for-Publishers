window.addEventListener('load', eventWindowLoaded, false);	

function eventWindowLoaded() {
    if (Modernizr.geolocation) {
	get_location();
    } else {
	alert("Sorry, your browser/ereader does not support geolocation.")
    }

    function get_location() {
	if (Modernizr.geolocation) {
	    navigator.geolocation.getCurrentPosition(geolocate_story, throw_error);
	} else {
	    // Do nothing. Sigh
	}
	
	function throw_error(position) {
            alert('Unable to geolocate you. Sorry.');
	}
    }

    function geolocate_story(position) {
	var geo_lat = position.coords.latitude;
	var geo_long = position.coords.longitude;
	// Get weather information
	$.ajax({
	    type: 'GET',
            url: 'http://ws.geonames.org/findNearByWeatherXML?lat=' + geo_lat + '&lng=' + geo_long,
            dataType: 'xml',
            success: function (weather_resp, xmlstatus) {
		var temperature_celsius = $(weather_resp).find("temperature").text();
		if (temperature_celsius != "") {
		    // Weather temp data given in Celsius; convert to Fahrenheit, because I'm American
		    var temperature_fahrenheit = 9/5*temperature_celsius + 32;
		    $('#weather_temp').text(temperature_fahrenheit);
		} else {
		    $('#weather_temp').text("TEMP NOT FOUND");
		}
            },
            error: function (xhr, status, error) {
		$('#weather_temp').text("TEMP NOT FOUND");
            }
	})
	// Get full location information
	$.ajax({
	    type: 'GET',
            url: 'http://ws.geonames.org/extendedFindNearby?lat=' + geo_lat + '&lng=' + geo_long,
            dataType: 'xml',
            success: function (loc_resp, xmlstatus) {
		var city_name = $(loc_resp).find("placename").text();
		if (city_name != "") {
		    $('#city').text(city_name);
		} else {
		    $('#city').text("CITY NOT FOUND");
		}
		var street_address = $(loc_resp).find("streetNumber").text() + " " + $(loc_resp).find("street").text();
		if (street_address != "") {
		    $('#street_address').text(street_address);
		} else {
		    $('#street_address').text("ADDRESS NOT FOUND");
		}
            },
            error: function (xhr, status, error) {
		$('#city').text("CITY NOT FOUND");
		$('#street_address').text("ADDRESS NOT FOUND");
            }
	})

    }
}