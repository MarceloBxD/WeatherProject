import axios from "axios";

const API_KEY = '4821c1b2';

const api = axios.create({
    baseURL: `https://api.hgbrasil.com/weather?format=json-cors&key=${API_KEY}`,
});

export default api;