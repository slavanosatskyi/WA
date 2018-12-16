import * as React from 'react';

import './VerticalDotsButton.scss';

export class VerticalDotsButton extends React.Component {
    render() {
        return (
            <div className="button" onClick={this.props.onClick}>
                &#8942;
            </div>
        );
    }
}