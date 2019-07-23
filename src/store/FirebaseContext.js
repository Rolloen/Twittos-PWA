import React, {
    Component,
    createContext
} from "react";

import firebase from 'firebase';

const localStorage = window.localStorage;

export const FirebaseContext = createContext({
    user: {},
    isAuth: false,
    checkAuthenticated: () => {},
    handleLogin: () => {},
    handleSignup: () => {},
    handleLogout: () => {},

});

var firebaseConfig = {
    apiKey: "AIzaSyBs7s6u7Mqac0mTBA6-KjxIwp3q3rwdsXI",
    authDomain: "twittos-fc67f.firebaseapp.com",
    databaseURL: "https://twittos-fc67f.firebaseio.com",
    projectId: "twittos-fc67f",
    storageBucket: "",
    messagingSenderId: "504459111623",
    appId: "1:504459111623:web:2967d1db34900acc"
};

export class FirebaseProvider extends Component {

    
    constructor() {
        super();
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        this.serverValue = firebase.database.ServerValue;
        this.auth = firebase.auth();
        this.db = firebase.database();
        this.state.authListener();
    }

    state = {
        user: {},
        isAuth: false,
        error: '',
        checkAuthenticated: () => {
        },

        updateUserData : () => {
            if (this.state.isAuth && this.state.user) {
                this.state.userRoute(this.state.user.uid)
                    .once('value')
                    .then(snapshot => {
                        const dbUser = snapshot.val();
                        let user = {
                            uid: this.state.user.uid,
                            email: this.state.user.email,
                            ...dbUser,
                        };
                        localStorage.setItem('userData', JSON.stringify(user));
                        localStorage.setItem('authenticated', true);
                        this.setState({
                            user: user,
                            isAuth: true
                        });
                    });
            }
        },

        handleLogin: (email, password) => {
            return this.auth.signInWithEmailAndPassword(email, password);

        },

        handleSignup: (email, password) => {

            return this.auth.createUserWithEmailAndPassword(email, password)
                .then(data => {
                    return data;
                })
        },
        authListener:  () => {
            this.auth.onAuthStateChanged((user) => {
                if (user) {
                    this.state.userRoute(user.uid)
                        .once('value')
                        .then(snapshot => {
                            const dbUser = snapshot.val();
                            user = {
                                uid: user.uid,
                                email: user.email,
                                ...dbUser,
                            };
                            localStorage.setItem('userData', JSON.stringify(user));
                            localStorage.setItem('authenticated', true);
                            this.setState({ user: user , isAuth : true});
                        });
                } else {
                    localStorage.removeItem('userData');
                    localStorage.setItem('authenticated', false);
                    this.setState({ user: null, isAuth: false });
                }
            });
        },

        handleLogout: () => {
            return this.auth.signOut();
        },
        getServerTime : () => {
            return this.serverValue.TIMESTAMP;
        },

        userRoute: (userId) => this.db.ref(`users/${userId}`),

        tweetsRoute: () => this.db.ref(`tweets`),
        tweetsRouteWithId: (tweetId) => this.db.ref(`tweets/${tweetId}`),


    }

    render() {
        return <FirebaseContext.Provider value = {
                this.state
            } > {
                this.props.children
            } </FirebaseContext.Provider>
    }
}