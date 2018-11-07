import * as React from 'react';

import './main.scss';

export class Main extends React.Component {
    render() {
        let classList = "main";
        if (this.props.isSideBarOpen) {
            classList += " main__narrowed";
        }
        return (
            <div className={classList}>
                <button className="main__openbtn" onClick={this.props.onOpenBtnClick}> 
                    ☰ Toggle Sidebar
                </button>  
            </div>
        );
    }
}