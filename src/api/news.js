import { API_HOST } from '../utils/constant';
const apiKey = '74f196d55e9a4a379e7c2e5a9adcc2a3';

export function getTopHeadlinesApi(){
    const url = `${API_HOST}/top-headlines?country=ar&apiKey=${apiKey}&pageSize=25`;
    return fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((result) => {
        return result;
    })
}