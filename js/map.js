import {activateForm, deactivateForm} from './popup-switch.js';
import {finalArray} from './data.js';
import {createCustomPopup} from './card.js';

deactivateForm();

const map = L.map('map-canvas')
  .on('load', () => {
    activateForm();
  })
  .setView({
    lat: 35.6895,
    lng: 139.692,
  }, 10);

const mapTitle = L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'},
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.6895,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

const icon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});
const lat = Number(finalArray[0].location.lat);
const lng = Number(finalArray[0].location.lng);
const marker = L.marker({
  lat,
  lng,
},
{
  icon,
});
marker
  .addTo(map)
  .bindPopup(createCustomPopup(finalArray[0]));

const getMainMarkerAddress = () => mainPinMarker.on('moveend', (evt) => {
  const mainMarkerAddress = (evt.target.getLatLng());
  console.log(mainMarkerAddress);
});
getMainMarkerAddress();

/* Вернуть метке изначальные координаты
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng({
    lat: 35.6895,
    lng: 139.692,
  });
});*/

/*добавить возвращение к начальным значениям масштаба и центра карты
map.setView({
    lat: 35.6895,
    lng: 139.692,
  }, 10);*/
