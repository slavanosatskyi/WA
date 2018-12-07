import Geocode from "react-geocode";

import { HTTPService } from '../../../common/scripts/http-service';
import { googleAPIkey } from '../common';

export class LocalTime {
    constructor() {
        this.date = null;
    }

    getCityLocalTime(city, callback) {
        this.getCityLocation(city, callback)
    }

    getCityLocation(city, callback) {
        Geocode.setApiKey(googleAPIkey);
        Geocode.fromAddress(city).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                this.requestLocalTime(lat, lng, callback);
            },
            error => {
                console.error(error);
            }
        );
    }

    requestLocalTime(lat, lng, callback) {
        let d1 = new Date();
        let timestamp = new Date( d1.getUTCFullYear(), d1.getUTCMonth(), d1.getUTCDate(), d1.getUTCHours(), d1.getUTCMinutes(), d1.getUTCSeconds() );//Date.now()/1000//Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDay(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds())/1000;
        const URL = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=${timestamp/1000}&key=${googleAPIkey}`;
        let service = new HTTPService();
        service.get(URL, (data) => {
            callback(data);
        });
    }
}

