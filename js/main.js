import {onDwellingChange, setAdFormValidation} from'./form-validation.js';
import {deactivateForm} from './page-switch.js';
import {setMap, setPins} from './map.js';

onDwellingChange();
setAdFormValidation();
deactivateForm();
setMap();
setPins();
