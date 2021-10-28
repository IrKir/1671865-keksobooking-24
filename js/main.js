import {onDwellingChange, setAdFormValidation} from'./form-validation.js';
import {deactivateForm} from './page-switch.js';
import {setMap, setAddressValue} from './map.js';
import './api.js';
import './popup.js';

onDwellingChange();
setAdFormValidation();
deactivateForm();
setMap();
setAddressValue();


