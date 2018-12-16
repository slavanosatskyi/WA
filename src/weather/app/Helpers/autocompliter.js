import { HTTPService } from '../../../common/scripts/http-service';
import { googleAPIkey } from '../common';

export class Autocompliter {
    getSuggestions(input, callback) {
        const URL =`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=(cities)&key=${googleAPIkey}`

        let service = new HTTPService();
        service.get(URL, (data) => {
            callback(data);
        })
    }
}