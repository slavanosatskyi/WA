import * as React from 'react';

import {Autocompliter} from '../Autocompliter/autocompliter.js';

import './CitySearch.scss';

//TODO: move list time into separate component

export class CitySearch extends React.Component {
    constructor(props) {
        super();
        this.onChange = this.onChange.bind(this);
        this.onListItemClick = this.onListItemClick.bind(this);
        this.state = {
            predictions: []
        }
    }

    render() {
        return (
            <div className="autocomplete">
                <input  className="autocomplete__input" 
                        type = "text" 
                        placeholder = 'Enter city here...' 
                        value = {this.props.value} 
                        onChange = {this.onChange}/>
                <div className={this.props.isAutoCompleteOpened ? "autocomplete__list autocomplete__list_visible": "autocomplete__list"}>{this.getListOfPredictions()}</div>
            </div>
        );
    }

    getListOfPredictions() {
        let predictions = this.state.predictions.map((prediction, index) => {
            return <p key={index} className = "autocomplete__list-item" onClick = {this.onListItemClick}>{prediction}</p>
        });
        if (predictions.size > 5) {
            predictions = predictions.splice(4);
        }
        return predictions;
    }

    onListItemClick(e) {
        this.props.onListItemClick(e.target.innerText);
    }

    onChange(e) {
        let autocompliter = new Autocompliter();
        autocompliter.getSuggestions(e.target.value, (data) => {
            let cities = [];
            data.predictions.forEach((prediction) => {
                cities.push(prediction.description)
            });
            this.setState({predictions: cities});
        });
        this.props.onChange(e, this.state.predictions.size === 0);
    }
}