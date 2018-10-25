export function tabsWidgetHandler(tabsWidget, tabsContent) {
    const TAB_CLASS_NAME = 'tabs-container__tab';
    const ACTIVE_TAB_CLASS_NAME = TAB_CLASS_NAME + '_active';
    const CONTENT_CLASS_NAME = 'tabs-container__content';

    const tabs = tabsWidget.querySelectorAll('.' + TAB_CLASS_NAME);
    const content = tabsWidget.querySelector('.' + CONTENT_CLASS_NAME);
    let activeTab = null;
    
    //first tab is active by default
    activateTab(tabs[0], tabsContent[0]);
    
    for (let i = 0; i < tabs.length; ++i) {
        tabs[i].addEventListener('click', () => {
            handleClickOnTab(tabs[i], tabsContent[i]); 
        });
    }

    function handleClickOnTab(tab, contentForTab) {
        if (activeTab === tab) {
            return;
        }

        if (activeTab !== null) {
            activeTab.classList.remove(ACTIVE_TAB_CLASS_NAME);
        }

        activateTab(tab, contentForTab);
    }

    function activateTab(tab, contetForTab) {
        tab.classList.add(ACTIVE_TAB_CLASS_NAME);
        content.textContent = contetForTab;
        activeTab = tab;
    }
}