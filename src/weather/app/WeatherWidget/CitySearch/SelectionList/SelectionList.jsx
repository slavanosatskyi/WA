import * as React from 'react';

import './SelectionList.scss';

export class SelectionList extends React.Component {
    render() {
        const className = "list";
        const visibleClassName = className + "_visible";
        
        let listItems = this.props.listItems.map((value, index) => {
            return (
                <p key={index} className="list__item" onClick={this.props.onListItemClick}>
                    {value}
                </p>
            ); 
        });
        
        return (
            <div className={this.props.isOpened ? className + " " + visibleClassName : className}>
                {listItems}
            </div>
        );
    }
}