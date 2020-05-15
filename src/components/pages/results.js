import axios from 'axios';

export default axios.create(
    {
        baseURL:'https://leisure-api.firebaseio.com/'
    }
)