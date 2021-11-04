import {activateForm} from './page-switch.js';
import {createCustomPopup} from './card.js';

let map;
let mainPinMarker;
const markersLayer = L.layerGroup();

const setMap = () => {
  map = L.map('map-canvas')
    .on('load', () => {
      activateForm();
    })
    .setView({
      lat: 35.6895,
      lng: 139.692,
    }, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'},
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: '../img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  mainPinMarker = L.marker(
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
};

const setPins = (finalArray) => {
  finalArray.map((element) => {
    const icon = L.icon({
      iconUrl: '../img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });
    const lat = Number(element.location.lat);
    const lng = Number(element.location.lng);
    const marker = L.marker({
      lat,
      lng,
    },
    {
      icon,
    });
    marker
      .addTo(markersLayer)
      .bindPopup(createCustomPopup(element));
  });
  markersLayer.addTo(map);
};

const removePins = () => {
  markersLayer.clearLayers();
};

const resetMapAndMarker = () => {
  mainPinMarker.setLatLng({
    lat: 35.6895,
    lng: 139.692,
  });

  map.setView({
    lat: 35.6895,
    lng: 139.692,
  }, 10);
  map.closePopup();
};

const setAddressValue = () => {
  const address = document.querySelector('#address');
  mainPinMarker.on('move', (evt) => {
    const mainMarkerAddress = (evt.target.getLatLng());
    address.value = `${mainMarkerAddress.lat.toFixed(5)}, ${mainMarkerAddress.lng.toFixed(5)}`;
  });
};

export {
  setMap,
  setPins,
  setAddressValue,
  resetMapAndMarker,
  removePins
};
