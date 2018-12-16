import * as React from 'react';

import './StarButton.scss';

export class StarButton extends React.Component {
    render() {
        const favoriteClassName = "star";
        const favoriteSelectedClassName = favoriteClassName + "_selected";
        return (
            <div className={this.props.isSelected ? favoriteClassName + " " + favoriteSelectedClassName : favoriteClassName} 
                 onClick = {this.props.onClick}>
                ★
            </div>
        );
    }
}