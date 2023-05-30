import axios from 'axios';

export default class FakeYoutubeClient {

    async search() {
        return axios.get('/videos/search.json');
    }

    async videos() {
        return axios.get('/videos/popular.json');
    }

    async related() {
        return axios.get('/videos/related.json');
    }

}