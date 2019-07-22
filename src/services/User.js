import axios from "axios";

import Api from './ApiRoutes';

const verifyAndRefreshToken = (token) => {
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

const login = (email, password) => {
    return axios.post(Api.login, {
            email: email,
            password: password
        })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}

const register = (username, email, password) => {
    
    return axios.post(Api.register, {
            username: username,
            email: email,
            password: password
        })
        .then(function (response) {
            console.log('response: ', response);
            
            return response.data;
        })
        .catch(function (error) {
            throw error;
        });
}

const suggestion = () => {
    
    return axios.get(Api.suggestion)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}

const followUser = (toFollowUsername) => {
    
    return axios.post(Api.follow, {
        toFollowUsername: toFollowUsername
    })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}

export default {
    verifyAndRefreshToken,
    login,
    register,
    suggestion,
    followUser
}