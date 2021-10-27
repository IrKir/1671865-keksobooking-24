import {onDwellingChange, setAdFormValidation} from'./form-validation.js';
import {deactivateForm} from './page-switch.js';
import {setMap, setMainMarkerAddress} from './map.js';
import './api.js';

onDwellingChange();
setAdFormValidation();
deactivateForm();
setMap();
setMainMarkerAddress();
