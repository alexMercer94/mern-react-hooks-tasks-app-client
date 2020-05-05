import AxiosClient from './axios';

/**
 * Put headers in requests
 * @param {*} token User's token
 */
const tokenAuth = (token) => {
    if (token) {
        AxiosClient.defaults.headers.common['X-AUTH-TOKEN'] = token;
    } else {
        delete AxiosClient.defaults.headers.common['X-AUTH-TOKEN'];
    }
};

export default tokenAuth;
