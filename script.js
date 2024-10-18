//PASO 3
// Inicializar el mapa centrado en Aguascalientes
var map = L.map('map').setView([21.88234, -102.28259], 13); // Coordenadas de Aguascalientes
// Añadir capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 maxZoom: 19,
 attribution: '© OpenStreetMap'
}).addTo(map);

//PASO 4
//Crear iconos personalizados
var customIcon1 = L.icon({
    iconUrl: 'C:/MapaAguascalientes/smile.png',
    iconSize: [32,32],
    iconAncor: [16, 32],
    popupAnchor: [0, -32]
});

var customIcon2 = L.icon({
    iconUrl: 'C:/MapaAguascalientes/535239.png',
    iconSize: [32,32],
    iconAncor: [16, 32],
    popupAnchor: [0, -32]
});

var customIcon3 = L.icon({
    iconUrl: 'C:/MapaAguascalientes/oso.png',
    iconSize: [32,32],
    iconAncor: [16, 32],
    popupAnchor: [0, -32]
});

// Añadir un marcador en Aguascalientes capital
var marker = L.marker([21.88234, -102.28259], {icon:customIcon1}).addTo(map);
// Añadir un pop-up al marcador
marker.bindPopup("<b>¡Bienvenidos a Aguascalientes!</b><br>Capital del Estado.").openPopup();

//PASO 5
// Marcador en la Plaza de la Patria
var plazaPatria = L.marker([21.88187, -102.29495],{icon:customIcon2}).addTo(map);
plazaPatria.bindPopup("<b>Plaza de la Patria</b><br>Corazón de Aguascalientes.");
// Marcador en el Museo Nacional de la Muerte
var museoMuerte = L.marker([21.88417, -102.28878], {icon:customIcon3}).addTo(map);
museoMuerte.bindPopup("<b>Museo Nacional de la Muerte</b><br>Un lugar único.");

//PASO 6
// Dibujar un círculo en el recinto de la Feria Nacional de San Marcos
var feriaSanMarcos = L.circle([21.87888, -102.29727], {
    color: 'green',
    fillColor: '#0f3',
    fillOpacity: 0.5,
    radius: 300
   }).addTo(map);
   feriaSanMarcos.bindPopup("<b>Feria Nacional de San Marcos</b><br>El evento más importante de Aguascalientes.");

//PASO 7
   var centroHistorico = L.polygon([
    [21.8821, -102.2935],
    [21.8829, -102.2865],
    [21.8797, -102.2860],
    [21.8792, -102.2920]
   ]).addTo(map);
   centroHistorico.bindPopup("<b>Centro Histórico de Aguascalientes</b><br>Una joya colonial.");

//PASO 8
var baseMaps = {
    "Mapa base": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
   };

   var overlayMaps = {
    "Lugares importantes": L.layerGroup([marker, plazaPatria, museoMuerte]),
    "Feria de San Marcos": feriaSanMarcos,
    "Centro Histórico": centroHistorico
   };
   L.control.layers(baseMaps, overlayMaps).addTo(map);