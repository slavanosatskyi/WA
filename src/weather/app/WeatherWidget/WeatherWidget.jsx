import * as React from 'react';
import { HTTPService } from '../../../common/scripts/http-service';
import { CitySearch } from '../CitySearch/CitySearch.jsx';

import Geocode from "react-geocode";

import './WeatherWidget.scss';

export class WeatherWidget extends React.Component {
    constructor() {
        super();
        this.httpsService = new HTTPService();
        this.state = {
            anstronomy: {},
            condition: {},
            city: ''
        }

        this.handleChange = this.handleChange.bind(this);
        Geocode.setApiKey("AIzaSyCU6PzOG2JD1-1YACW7nMHT70CXZDhTq-Y"); //how to hide it
    }

    componentDidMount() {
        this.getCurrentGeolocation();
        this.fetchData();
    }

    getCurrentGeolocation() {
        let currentPosition = null;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setCityNameFromCoodrindates(position.coords);
            });
        }
    }

    setCityNameFromCoodrindates(coords) {
        Geocode.fromLatLng(coords.latitude, coords.longitude).then(
            response => {
                console.log(response.results[0]);
                for (let i = 0; i < response.results[0].address_components.length; ++i) {
                    if (response.results[0].address_components[i].types.includes('locality')) {
                        this.setState({ city: response.results[0].address_components[i].long_name });
                        console.log(this.state);
                        break;
                    }
                }
            },
            error => {
                console.error(error);
            }
        );
    }

    fetchData() {
        if (this.state.city === null || this.state.city === '') {
            return;
        }

        const URL = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${this.state.city}%22)%20and%20u%3D\'c\'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`
        this.httpsService.get(URL, (data) => {
            this.setState((oldState) => {
                const newState = Object.assign({}, oldState);
                newState.condition = data.query.results.channel.item.condition;
                console.log(newState.condition);
                return newState;
            });
        });
    }

    getImage() {
        if (this.state.condition.code === undefined) {
            return <img src="" alt="" />
        }
        let imageURl = `http://l.yimg.com/a/i/us/we/52/${this.state.condition.code}.gif`
        return <img src={imageURl} alt="" />
    }

    handleChange(object) {
        this.state.city = object.suggestion.name; //CHECK: how to pass parameter into lambda
        this.fetchData();
    }

    render() {
        return (
            <div className="weather-widget">
                <CitySearch defaultValue={this.state.city}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress} />
                <div>{this.state.condition.date}</div>
                <div>{this.state.condition.temp}</div>
                <div>{this.state.condition.text}</div>
                <div className="weather-icon">{this.getImage()}</div>
            </div>
        );
    }
}