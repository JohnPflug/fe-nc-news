import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://nc-news-njb6.onrender.com/api/'
});

export function getArticles(path) {

    return instance(path)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
}

export function getComments(path) {

    return instance(path)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
}