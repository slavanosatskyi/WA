import './lesson_6.scss';

function switchVisibility(element) {
    element.classList.toggle('footer__column-header_opened');
    element.nextElementSibling.classList.toggle('footer__column-section_opened');
}

let switchVisibilityHeader1 = function () {
    switchVisibility(header_1);
};

let switchVisibilityHeader2 = function () {
    switchVisibility(header_2);
};

let switchVisibilityHeader3 = function () {
    switchVisibility(header_3);
};

let switchVisibilityHeader4 = function () {
    switchVisibility(header_4);
};

let switchVisibilityHeader5 = function () {
    switchVisibility(header_5);
};

let switchVisibilityHeader6 = function () {
    switchVisibility(header_6);
};

let switchVisibilityHeader7 = function () {
    switchVisibility(header_7);
};

const header_1 = document.querySelector('#header_1');
const header_2 = document.querySelector('#header_2');
const header_3 = document.querySelector('#header_3');
const header_4 = document.querySelector('#header_4');
const header_5 = document.querySelector('#header_5');
const header_6 = document.querySelector('#header_6');
const header_7 = document.querySelector('#header_7');

header_1.onclick = switchVisibilityHeader1;
header_2.onclick = switchVisibilityHeader2;
header_3.onclick = switchVisibilityHeader3;
header_4.onclick = switchVisibilityHeader4;
header_5.onclick = switchVisibilityHeader5;
header_6.onclick = switchVisibilityHeader6;
header_7.onclick = switchVisibilityHeader7;






