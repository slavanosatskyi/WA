import * as React from 'react';

import './WeatherStatus.scss'

export class WeatherStatus extends React.Component {
    
    getImage() {
        let imageURl = `http://l.yimg.com/a/i/us/we/52/${this.props.imageCode}.gif`
        return <img className="weather-status__image-wrapper_image" src={imageURl} alt="" />
    }

    render() {
        return (
            <div className="weather-status">
                <div className="weather-status__header">
                    <div className="weather-status__image-wrapper">
                        {this.getImage()}
                    </div>
                    <div className="weather-status__temperature">
                        {this.props.temperature}
                    </div>            
                </div>
                <div className="weather-status__description">
                    {this.props.description}
                </div>
            </div>
        );
    }
}