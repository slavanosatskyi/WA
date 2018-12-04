import { HTTPService } from '../../../common/scripts/http-service';

export class Autocompliter {
    getSuggestions(input, callback) {
        const URL =`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=(cities)&key=AIzaSyCU6PzOG2JD1-1YACW7nMHT70CXZDhTq-Y`

        let service = new HTTPService();
        service.get(URL, (data) => {
            callback(data);
        })
    }
}