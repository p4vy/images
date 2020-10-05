import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID BaSR2mu9RtteayrWRkBAzldRvwx88ZBZc6BuCwNK_U0'
    }
});