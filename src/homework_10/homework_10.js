import './homework_10.scss';
import { phoneToggler } from './scripts/phoneToggler.js';
import { accordionHandler } from './scripts/accordionHandler.js';

const phoneTogglers = document.querySelectorAll('.container__switching-element');
for (let i = 0; i < phoneTogglers.length; ++i) {
    phoneToggler(phoneTogglers[i]);
}

const accordions = document.querySelectorAll('.accordion');
for (let i = 0; i < accordions.length; ++i) {
    accordionHandler(accordions[i]);
}


