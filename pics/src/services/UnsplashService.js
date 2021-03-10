import axios from 'axios';
import * as jsfd from 'js-file-download';
import * as mime from 'mime-types';

const API_URL = 'https://api.unsplash.com';

const client = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
    }
});

export const getPhoto = (payload) => {
    return client.get('/search/photos', {
        params: {
            query: payload
        },
    });
}

export const saveImage = (src) => {
    return axios.get(src, {
        responseType: 'blob'
    }).then(response => {
        jsfd(response.data, `image.${mime.extension(response.headers['content-type'])}`)
    });
}