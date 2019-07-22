import axios from "axios";

import Api from './ApiRoutes';

const GetAllTweets = () => {
    return axios.get(Api.verifyTokenUrl)
        .then(function (response) {
            // handle success
            console.log(response);
            return response;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}


export default {
    verifyAndRefreshToken,
    login,
    register
}