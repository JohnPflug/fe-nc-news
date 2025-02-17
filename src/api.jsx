import axios from 'axios';

export default function api(path) {

    const instance = axios.create({
        baseURL: 'https://nc-news-njb6.onrender.com/api/'
    });

    const config = {
        url: path,
    }

    return instance(config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
}