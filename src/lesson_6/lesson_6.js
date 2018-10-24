import './lesson_6.scss';

const headers = document.querySelectorAll('.footer__column-header');
for (let i = 0; i < headers.length; ++i) {
    headers[i].addEventListener('click', () => {
        headers[i].classList.toggle('footer__column-header_opened');
        headers[i].nextElementSibling.classList.toggle('footer__column-section_opened');
    });
}




