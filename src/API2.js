import axios from 'axios';

const API2 = axios.create ({
    baseURL:"https://api.genius.com/",
    headers: {
            'Authorization': 'Bearer M9Gs9tNh-Dm-dt_TEZkCgE8sGja-T94unluSwahQHrij5U00y4ZseV5CuP6oO98-'
        }
})

export default API2;