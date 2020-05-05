import axios from 'axios';

const AxiosClient = axios.create({
    baseURL: process.env.REACT_APP_BACKED_URL,
});

export default AxiosClient;
