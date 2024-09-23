/*
Version: 1.0.0
Author: thememasti
Author URI: http://thememasti.com
*/

/*----------------------------------------------*/
/*  Configuration                               */
/*----------------------------------------------*/

// set latitude for map
var lat =   20.5466618,
     //20.546596,

    //set longitude for map 
    lng = 72.9002922,
    //72.899234,

    // Marker Title
    markerTitle = "Meh",

    // Adjust zoom for map
    mapZoom = 14;
    
/*----------------------------------------------*/
/*  Configuration End                           */
/*----------------------------------------------*/

/**
 * This function create custom zoom control for googlemap
 * @param controlDiv (the control DIV as an argument.)
 * @param map
 */
function MyZoomControl(controlDiv, map) {

    "use strict";

    var zoomInControl = "<div id=\"my-zoom-in\"><i class=\"fa fa-plus\"></i></div>",
        zoomOutControl = "<div id=\"my-zoom-out\"><i class=\"fa fa-minus\"></i></div>";

    $('#google-map').after(zoomInControl + zoomOutControl);

    /* Select zoom control and insert them into map */
    var myZoomIn = document.getElementById('my-zoom-in'),
        myZoomOut = document.getElementById('my-zoom-out');


    controlDiv.appendChild(myZoomIn);
    controlDiv.appendChild(myZoomOut); /* end */

    /* Setup the click event listeners for zoomin and zoom out */
    google.maps.event.addDomListener(myZoomIn, 'click', function () {
        map.setZoom(map.getZoom() + 1);
    });

    google.maps.event.addDomListener(myZoomOut, 'click', function () {
        map.setZoom(map.getZoom() - 1);
    }); /* end */

}

/**
 * This function display google map on page
 */
function googleMap() {

    "use strict";

    // Style Google Map
    var style = [

            {
                featureType: "landscape",
                stylers: [{
                    "color": "#f2f2f2"
                }]
            },

            {
                featureType: "water",
                stylers: [{
                    "color": "#46bcec"
                }]
            },

            {
                featureType: "road.local",
                stylers: [{
                    "color": "#93d8b0"
                }]
            },

            {
                featureType: "road",
                elementType: "all",
                stylers: [{
                    "saturation": -100
                }, {
                    "lightness": 60
                }]
            },

            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{
                    "color": "#515151"
                }]
            },

            {
                featureType: "road",
                elementType: "labels.icon",
                stylers: [{
                    "hue": "#108896"
                }, {
                    "saturation": 50
                }, {
                    "lightness": 2
                }, {
                    "gamma": 0.50
                }]
            },

            {
                featureType: "road.highway",
                elementType: "all",
                stylers: [{
                    "visibility": "simplified"
                }]
            },

            {
                featureType: "road.arterial",
                elementType: "geometry.fill",
                stylers: [{
                    "color": "#ffffff"
                }]
            },

            {
                featureType: "road.arterial",
                elementType: "geometry.stroke",
                stylers: [{
                    "color": "#cccccc"
                }]
            },

            {
                featureType: "transit.station",
                elementType: "geometry.fill",
                stylers: [{
                    "color": "#f2f2f2"
                }]
            },

            {
                featureType: "transit.line",
                elementType: "geometry.fill",
                stylers: [{
                    "color": "#bbbbbb"
                }]
            },

            {
                featureType: "administrative",
                elementType: "labels.text.fill",
                stylers: [{
                    "color": "#333333"
                }]
            },

            {
                featureType: "poi",
                elementType: "all",
                stylers: [{
                    "visibility": "off"
                }]
            }

        ],

        /* Google Map Option */
        mapOptions = {

            center: {
                lat: lat - 0.003408,
                lng: lng
            },
            zoom: mapZoom,
            mapTypeControl: false,
            panControl: false,
            streetViewControl: false,
            scrollwheel: false,
            zoomControl: false,
            styles: style

        },

        map = new google.maps.Map(document.getElementById('google-map'), mapOptions),

        // Set marker
        marker = new google.maps.Marker({

            position: {
                lat: lat,
                lng: lng
            },
            animation: google.maps.Animation.DROP,
            icon: 'images/fancy-marker.png',
            title: markerTitle

        });
      
      marker.setMap(map);

    // my zoom control
    var zoomControlDiv = document.createElement('div'),
        zoomControl = new MyZoomControl(zoomControlDiv, map);

    //insert the zoom div on the top left of the map
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
}

// Enable overlay in touch devices.
if (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {

    $('#map-overlay').addClass('map-overlay');

}

// Initialize google map on load.
google.maps.event.addDomListener(window, 'load', googleMap);

// Initialize google map on resize (make it responsive).
google.maps.event.addDomListener(window, 'resize', googleMap);
