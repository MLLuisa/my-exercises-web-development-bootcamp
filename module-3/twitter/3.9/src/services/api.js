const getTweets = () => {
    return fetch("https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/twitter-v1/tweets.json")
    .then(response => response.json());
}

const getProfile = () => {
    return fetch("https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/twitter-v1/profile.json")
    .then(response => response.json());
}

const objExport = {
    getTweets,
    getProfile
}

export default objExport;