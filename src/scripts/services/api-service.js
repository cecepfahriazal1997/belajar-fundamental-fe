import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDQ3Y2JiMDhiZjFlZmNlNTNlYWM2M2JjYWJiMzdiNCIsInN1YiI6IjY1MTViNzU4ZWE4NGM3MDEwYzExNzFmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AkFf86lSCdVYTimF3mV9aGdZCSv5dGQTKtTfPKwN4qA`
    },
});

export default class ApiServices {
    constructor() {
        this.api = api
    }

    static get(uri = '', params = {}) {
        return new Promise((resolve, reject) => {
            let baseUrl = uri ? `/${uri}` : ''
            api.get(baseUrl, {
                    params: {
                        ...params,
                    },
                })
                .then((response) => {
                    if (response.statusText.toLowerCase() === 'ok' || response.status === 200) {
                        resolve(response.data);
                    } else {
                        reject(response);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}