import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://nc-news-njb6.onrender.com/api'
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

export function getSingleArticle(path) {

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

export function patchVotes({ article_id, countChange }) {

    const config = {
        method: 'patch',
        url: `/articles/${article_id}`,
        data: {
            inc_votes: countChange
        }
    };

    return instance(config).then(response => {
        return response;
    });
}

export function postComment(article_id, comment) {

    const config = {
        method: 'post',
        url: `/articles/${article_id}/comments`,
        data: comment
    };

    return instance(config)
        .then(response => {
            return response;
        })
        .catch(error => {
            console.log(error)
        })
}