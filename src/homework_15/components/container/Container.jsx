import * as React from 'react';

import './container.scss';

import { Main } from '../main/Main.jsx';
import { Sidebar } from '../sidebar/Sidebar.jsx';

export class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            isSideBarOpen: true
        };
        this.closeSidePanel = this.closeSidePanel.bind(this); 
        this.openSidePanel = this.openSidePanel.bind(this);
    }

    closeSidePanel() {
        this.changeSidePanelState(false);
    }

    openSidePanel() {
        this.changeSidePanelState(true);
    }

    changeSidePanelState(isOpened) {
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.isSideBarOpen = isOpened;
            return newState;
        });
    }

    render() {
        return (
            <div className="container">
                <Sidebar onCloseBtnClick = {this.closeSidePanel}
                         isSideBarOpen = {this.state.isSideBarOpen}/>
                <Main onOpenBtnClick = {this.openSidePanel}
                         isSideBarOpen = {this.state.isSideBarOpen}/>
            </div>
        );
    }
}