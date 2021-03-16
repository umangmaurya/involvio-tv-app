/* Initilalize constants */
const CONTENT_TYPE = 'application/json';
const API_END_POINT = 'http://api.tvmaze.com/';
const SHOWS_LIST_URL = 'search/shows?q=';


//Common method to make api call
async function apiCall({ url = '', method = 'GET', body = {} }) {

    const apiContent = {
        method,
    }
    if (method === 'POST') {
        apiContent.body = JSON.stringify(body) // body data type must match "Content-Type" header
    }
    const response = await fetch(url, apiContent);
    return response.json(); // parses JSON response into native JavaScript objects
}

/* To search shows */
export const SearchShows = (searchterm = '') => {
    const url = `${API_END_POINT}${SHOWS_LIST_URL}${searchterm}`;
    return apiCall({ url });
}


