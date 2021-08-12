
import axios from 'axios';
import config from '../Config/Config';


const Property = {
    uploadPhotos: async (payload, callback) => {
        axios({
            method: 'POST',
            url: config.baseUrl + '/upload',
            data: payload
        }).then(response => {
            return callback(response);
        })
            .catch(error => {
                console.log('error', error);
                return callback(error);
            })
    },
    getPhotos: async (payload, callback) => {
        axios({
            method: 'GET',
            url: config.baseUrl + '/getPhotos',
        }).then(response => {
            return callback(response);
        }).catch(error => {
                return error;
        })
    }
}
export default Property;
