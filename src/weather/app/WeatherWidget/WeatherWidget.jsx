import * as React from 'react';
import Geocode from "react-geocode";

import { HTTPService } from '../../../common/scripts/http-service';
import { googleAPIkey } from '../common';
import { LocalTime } from '../Helpers/localtime.js';

import { CitySearch } from './CitySearch/CitySearch.jsx';
import { CalendarDate } from './CalendarDate/CalendarDate.jsx';
import { WeatherStatus } from './WeatherStatus/WeatherStatus.jsx';

import './WeatherWidget.scss';

/////////////////////////
//TODO
// * Write correct requests for cities
// * handle unknow cities weather request
// * fix strange behavior in fuction onListItemClick
// 1. Hide api key
// 2. Remove redundant fetchData calls
// 3. Get city name for weather request only from input field. 
//    Currently after geolocation process it is taken 
//    direclty from geolocation result
//  4. Rework bug URL into SQL language
// * FIX issue with dalayed response from geolocation (temperature sign is shown)
// * move calculation of timestamp into common place 
// * refactor WeatherWidget. It is doing too many things
// * geolocation brings another name of the city than yahoo api. It doesn't allow to save autodetected city into favorites
// * change structure of the project. Make tree structure accoding to components nesting
// * fix issue with overlapping text and star favorite

export class WeatherWidget extends React.Component {
    constructor() {
        super();
        this.httpsService = new HTTPService();
        this.state = {
            condition: {},
            city: '',
            favorites: [],
            sunrise: new Date(),
            sunset: new Date(),
            currentTime: null,
            isAutoCompleteOpened: false,
            isFavoriteListOpened: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.onListItemClick = this.onListItemClick.bind(this);
        this.addFavorite = this.addFavorite.bind(this);
        this.deleteFavorite = this.deleteFavorite.bind(this);
        this.isCityInFavorites = this.isCityInFavorites.bind(this);
        this.onFavoritesListButtonClick = this.onFavoritesListButtonClick.bind(this);
        Geocode.setApiKey(googleAPIkey);
    }

    componentDidMount() {
        this.getCurrentGeolocation();
        this.fetchData();
        document.addEventListener('click', (event) => {
            if (this.state.isAutoCompleteOpened) {
                this.setState({ isAutoCompleteOpened: false });
            }
            if (this.state.isFavoriteListOpened) {
                this.setState({ isFavoriteListOpened: false });
            }
        })
    }

    getCurrentGeolocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setCityNameFromCoodrindates(position.coords);
            }, (error) => {
                console.log(error);
            });
        }
    }

    setCityNameFromCoodrindates(coords) {
        Geocode.fromLatLng(coords.latitude, coords.longitude).then(
            response => {
                for (let i = 0; i < response.results[0].address_components.length; ++i) {
                    if (response.results[0].address_components[i].types.includes('locality')) {
                        this.setState({ city: response.results[0].address_components[i].long_name });
                        this.fetchData();
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
                this.setSunriseTime(data.query.results.channel.astronomy);
                this.setSunsetTime(data.query.results.channel.astronomy);
                return newState;
            });
        });
        let localTime = new LocalTime();
        localTime.getCityLocalTime(this.state.city, (data) => {
            this.setState((oldState) => {
                let d1 = new Date();
                let timestamp = new Date(d1.getUTCFullYear(), d1.getUTCMonth(), d1.getUTCDate(), d1.getUTCHours(), d1.getUTCMinutes(), d1.getUTCSeconds());
                const newState = Object.assign({}, oldState);
                newState.currentTime = new Date((timestamp / 1000 + data.dstOffset + data.rawOffset) * 1000);
                return newState;
            });
        });
    }

    setSunriseTime(astronomy) {
        let hoursAndMinutes = this.getHoursAndMinutes(astronomy.sunrise);
        this.state.sunrise.setHours(hoursAndMinutes[0]);
        this.state.sunrise.setMinutes(hoursAndMinutes[1]);
    }

    setSunsetTime(astronomy) {
        let hoursAndMinutes = this.getHoursAndMinutes(astronomy.sunset);
        this.state.sunset.setHours(hoursAndMinutes[0]);
        this.state.sunset.setMinutes(hoursAndMinutes[1]);
    }

    getHoursAndMinutes(time) {
        let regexp = /\d+:\d+/;
        let found = time.match(regexp);
        if (found.size === 0) {
            return null;
        }
        let result = found[0].split(':');
        if (time.includes('pm')) {
            result[0] = (parseInt(result[0]) + 12).toString(); 
        }
        return result;
    }

    handleChange(event, isPredictionResultEmpty) {
        this.setState({
            city: event.target.value,
            isAutoCompleteOpened: !isPredictionResultEmpty
        });
    }

    onListItemClick(itemText) {
        this.state.city = itemText; //strange behavior here if call setState
        this.fetchData();
    }

    isDayTime() {
        return this.state.currentTime > this.state.sunrise && this.state.currentTime < this.state.sunset;
    }

    addFavorite(city) {
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.favorites.push(city);
            return newState;
        });
    }

    deleteFavorite(city) {
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.favorites = newState.favorites.filter((element) => {
                return element !== city;
            });
            return newState;
        });
    }

    isCityInFavorites() {
        return this.state.favorites.includes(this.state.city);
    }

    onFavoritesListButtonClick(event) {
        if (this.state.favorites.length === 0) {
            return;
        }
        this.setState({isFavoriteListOpened: !this.state.isFavoriteListOpened});
        event.nativeEvent.stopImmediatePropagation();
    }

    render() {
        return (
            <div className={this.isDayTime() ? "weather-widget weather-widget_day" : "weather-widget"}>
                <CitySearch 
                    value={this.state.city}
                    onChange={this.handleChange}
                    isAutoCompleteOpened={this.state.isAutoCompleteOpened}
                    onListItemClick={this.onListItemClick}
                    addFavorite={this.addFavorite}
                    deleteFavorite={this.deleteFavorite}
                    isCityInFavorites={this.isCityInFavorites()}
                    favoritesList={this.state.favorites}
                    isFavoriteListOpened={this.state.isFavoriteListOpened}
                    onFavoritesListButtonClick={this.onFavoritesListButtonClick}
                />
                <div className="weather-widget__date">
                    <CalendarDate/>
                </div>
                <div className="weather-widget__status">
                    <WeatherStatus temperature={this.state.condition.temp}
                        description={this.state.condition.text}
                        imageCode={this.state.condition.code} 
                    />
                </div>
            </div>
        );
    }
}