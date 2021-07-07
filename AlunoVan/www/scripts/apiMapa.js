var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('Mapa'), {
        center: { lat: -23.508632406907786, lng: -46.338449200000014 },
        zoom: 14,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            mapTypeIds: [
              google.maps.MapTypeId.ROADMAP,
              google.maps.MapTypeId.TERRAIN
            ]
        }
    });
}