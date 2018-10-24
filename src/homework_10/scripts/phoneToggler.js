export function phoneToggler(targetElement) {
    const TOGGLE_OFF_CLASS_NAME = 'toggle_off';
    const DEVICE_ON_CLASS_NAME = 'container__device_on';
    const TOGGLE_CLASS_NAME = '.toggle';
    const DEVICE_CLASS_NAME = '.container__device';

    function toggle(element) {
        const toggle = element.querySelector(TOGGLE_CLASS_NAME);
        const device = element.querySelector(DEVICE_CLASS_NAME);
        toggle.classList.toggle(TOGGLE_OFF_CLASS_NAME);
        device.classList.toggle(DEVICE_ON_CLASS_NAME);
    }

    const toggleWidget = targetElement.querySelector(TOGGLE_CLASS_NAME);
    toggleWidget.addEventListener('click', () => {
        toggle(targetElement);
    });
}

