import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://nc-news-njb6.onrender.com/api'
});

export function getArticles(topic, sort_by, order) {

    const config = {
        url: `/articles`,
        params: {
            topic: topic,
            sort_by: sort_by,
            order: order
        }
    };

    return instance(config)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            throw err;
        });
}

export function getSingleArticle(path) {

    return instance(path)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            throw err;
        });
}

export function getComments(path) {

    return instance(path)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            throw err;
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

    return instance(config)
        .then(response => {
            return response;
        })
        .catch((err) => {
            throw err;
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
        .catch((err) => {
            throw err;
        });
}

export function deleteComment(comment_id) {

    const config = {
        method: 'delete',
        url: `comments/${comment_id}`,
    };

    return instance(config)
        .then(response => {
            return response;
        })
        .catch((err) => {
            throw err;
        });
}

export function getTopics() {

    return instance("/topics")
        .then(response => {
            return response;
        })
        .catch((err) => {
            throw err;
        });
}