import {activateForm} from './page-switch.js';
import {createCustomPopup} from './card.js';

let map;
let mainPinMarker;
const markersLayer = L.layerGroup();
const DefaultСoordinates = {
  LAT: 35.68171,
  LNG: 139.75389,
};
const addressInput = document.querySelector('#address');

const setMap = () => {
  map = L.map('map-canvas')
    .on('load', () => {
      activateForm();
    })
    .setView({
      lat: DefaultСoordinates.LAT,
      lng: DefaultСoordinates.LNG,
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
      lat: DefaultСoordinates.LAT,
      lng: DefaultСoordinates.LNG,
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
    lat: DefaultСoordinates.LAT,
    lng: DefaultСoordinates.LNG,
  });

  map.setView({
    lat: DefaultСoordinates.LAT,
    lng: DefaultСoordinates.LNG,
  }, 10);
  map.closePopup();
};

const setAddressValue = () => {
  addressInput.value = `${DefaultСoordinates.LAT}, ${DefaultСoordinates.LNG}`;
  mainPinMarker.on('move', (evt) => {
    const mainMarkerAddress = (evt.target.getLatLng());
    addressInput.value = `${mainMarkerAddress.lat.toFixed(5)}, ${mainMarkerAddress.lng.toFixed(5)}`;
  });
};

export {
  setMap,
  setPins,
  setAddressValue,
  resetMapAndMarker,
  removePins
};
