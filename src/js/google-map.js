var map;

import 'src/images/map-marker.png';

window.initMap = function () {

    var mapStyles = [
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#444444"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#C3D4CB"
                },
                {
                    "visibility": "on"
                }
            ]
        }
    ];


    var mainLocation = { lat: 55.873876, lng: 37.463251 };
    var centerLocation = { lat: 55.8, lng: 37.7};

    var locations = [
        mainLocation,
       // { lat: 55.688, lng: 37.564 },
       // { lat: 55.689, lng: 37.563 },
       // { lat: 55.686, lng: 37.561 }
    ];

    map = new google.maps.Map(document.getElementById('map'), {
        center: centerLocation,
        styles: mapStyles,
        zoom: 11,
        zoomControl: true,
        gestureHandling: 'cooperative',
   		zoomControlOptions: { position: google.maps.ControlPosition.LEFT_CENTER },
   		streetViewControl: true,
        streetViewControlOptions: { position: google.maps.ControlPosition.LEFT_TOP },
    });

    var markerImage = 'images/map-marker.png';

    // var markerImage = {
    //      path: "M7.574,21.654l1.388-1.817c1.455-1.925,6.189-8.469,6.189-12.049C15.151,3.132,12.106,0,7.574,0\n" +
    //      "    C3.045,0,0,3.132,0,7.788c0,3.854,5.56,11.223,6.192,12.049L7.574,21.654z M2.792,7.835c0-2.628,2.146-4.77,4.782-4.77\n" +
    //      "    c2.64,0,4.785,2.142,4.785,4.77c0,2.63-2.146,4.771-4.785,4.771C4.938,12.605,2.792,10.465,2.792,7.835z",
    //     fillColor: '#00BEA4',
    //     fillOpacity: .9,
    //     anchor: new google.maps.Point(0,0),
    //     strokeWeight: 0,
    //     scale: 2
    // }


    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            map: map,
            icon: markerImage
        });
    });

   // var markerCluster = new MarkerClusterer(map, markers,
   //    {imagePath: 'src/icons/marker-clusterer/m'});
}