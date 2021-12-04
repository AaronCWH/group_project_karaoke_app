import axios from 'axios';

const API = axios.create ({
    baseURL:"https://genius.p.rapidapi.com/",
    headers: {
        'x-rapidapi-host': 'genius.p.rapidapi.com',
        'x-rapidapi-key': '8f6a805d32msh0745f29a4cf83a2p134cadjsnb38ffe05207e',
        'Authorization': 'Bearer NshdscyEkgVUKTlQbQ3NSsPvb6mR2Mgrq97tYIxKMfkctJ69kGSrB5d3PKn3ihq3'
    }
});



export default API;