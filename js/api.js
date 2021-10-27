import {setPins} from './map.js';

const getData = fetch('https://24.javascript.pages.academy/keksobooking/data',
  {
    method: 'GET',
  },
)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then((advertisements) => {
    setPins(advertisements);
  })
  .catch((err) => {
    console.error(err);
  });


/*const setData = fetch('https://24.javascript.pages.academy/keksobooking/data',
  {
    method: 'POST',
    body: new FormData(),
  },
)
  .then((response) => response.json())
  .then((data) => {
    console.log('Результат', data);
  })
  .catch((err) => {
    console.error(err);
  });*/


export {getData};
