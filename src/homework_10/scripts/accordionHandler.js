export function accordionHandler(accordion) {
    const ITEM_CLASS_NAME = 'accordion__item';
    const HEADER_CLASS_NAME = 'accordion__header'; 
    const OPENED_SUFFIX = '_opened';

    const items = accordion.querySelectorAll('.' + ITEM_CLASS_NAME);
    let activeItem = null;

    for (let i = 0; i < items.length; ++i) {
        const currentItem = items[i];
        const header = currentItem.querySelector('.' + HEADER_CLASS_NAME);
        
        header.addEventListener('click', () => {
            if (activeItem !== null && activeItem !== currentItem) {
                activeItem.classList.remove(ITEM_CLASS_NAME + OPENED_SUFFIX);
            }
            currentItem.classList.toggle(ITEM_CLASS_NAME + OPENED_SUFFIX);
            activeItem = currentItem;
        });    
    }
}