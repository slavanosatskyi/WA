import * as React from 'react';

import {Autocompliter} from '../Autocompliter/autocompliter.js';

export class CitySearch extends React.Component {
    constructor(props) {
        super();
        this.onChange = this.onChange.bind(this);
        this.state = {
            city: props.defaultValue,
        }
    }

    onChange(e) {
        let autocompliter = new Autocompliter();
        autocompliter.getSuggestions(e.target.value, (data) => {
            this.setState({city: data.predictions[0].description});
        });   
    }

    render() {
        console.log(this.state.city);
        return (
            <input type = "text"
                value = {this.state.city}
                onChange = {this.onChange}
            />
        );
    }
}