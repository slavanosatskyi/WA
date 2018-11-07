import * as React from 'react';

import './sidebar.scss';

export class Sidebar extends React.Component {
    render() {
        let sideBarClassList = "sidebar";
        if (!this.props.isSideBarOpen) {
            sideBarClassList += ' sidebar__closed';
        }
        return (
            <div className={sideBarClassList}>
                <a className="sidebar__closebtn" onClick={this.props.onCloseBtnClick}>×</a>
                <a className="sidebar__link" href="#">About</a>
                <a className="sidebar__link" href="#">Services</a>
                <a className="sidebar__link" href="#">Clients</a>
                <a className="sidebar__link" href="#">Contact</a>
            </div>
        );
    }
}