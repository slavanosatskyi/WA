import './homework_10.scss';

const TOGGLE_OFF_CLASS_NAME = 'toggle_off';
const DEVICE_ON_CLASS_NAME = 'container__device_on';

const element1 = document.querySelector('#element1');
const element2 = document.querySelector('#element2');
const element3 = document.querySelector('#element3');

const toggle1 = element1.querySelector('#toggle');
const toggle2 = element2.querySelector('#toggle');
const toggle3 = element3.querySelector('#toggle');

function trigger(element) {
    const toggle = element.querySelector('#toggle');
    const device = element.querySelector('#device');
    toggle.classList.toggle(TOGGLE_OFF_CLASS_NAME);
    device.classList.toggle(DEVICE_ON_CLASS_NAME);
}

function triggerToggle1() {
    trigger(element1);
}

function triggerToggle2() {
    trigger(element2);
}

function triggerToggle3() {
    trigger(element3);
}

toggle1.addEventListener('click', () => {
    triggerToggle1();
});

toggle2.addEventListener('click', () => {
    triggerToggle2();
});

toggle3.addEventListener('click', () => {
    triggerToggle3();
});