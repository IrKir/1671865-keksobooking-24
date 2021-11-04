import {onDwellingChange, setAdFormValidation, setUserFormSubmitHandler, setFormResetHandler} from'./form-validation.js';
import {deactivateForm} from './page-switch.js';
import {setMap, setAddressValue, setPins} from './map.js';
import {getData} from './api.js';
import {setFilterChangeHandler, ELEMENTS_QUANTITY} from './filter.js';
import './popup.js';
import './avatar.js';

onDwellingChange();
setAdFormValidation();
deactivateForm();
setMap();
setAddressValue();

getData().then((response) => {
  setUserFormSubmitHandler(response);
  setFormResetHandler(response);
  setFilterChangeHandler(response);
  setPins(response.slice(0, ELEMENTS_QUANTITY));
});
