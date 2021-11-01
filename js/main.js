/* global _:readonly */

import {onDwellingChange, setAdFormValidation, setUserFormSubmit, resetForm} from'./form-validation.js';
import {deactivateForm} from './page-switch.js';
import {setMap, setAddressValue, setPins} from './map.js';
import {getData} from './api.js';
import './popup.js';
import {setFilterChangeHandler} from './filter.js';
import './avatar.js';

const RERENDER_DELAY = 500;

onDwellingChange();
setAdFormValidation();
deactivateForm();
setMap();
setAddressValue();
setUserFormSubmit();
resetForm();
getData().then((response) => {
  setPins(response);
  setFilterChangeHandler(response);
});
