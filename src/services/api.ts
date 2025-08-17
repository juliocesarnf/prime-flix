import axios from 'axios';



const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

const apiKey: string = 'SUA_CHAVE_API';

export { api, apiKey };