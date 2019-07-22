import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { FirebaseProvider } from './store/FirebaseContext';
import AuthenticatedRoute from "./AuthenticatedRoute"

//import container
import Login from './container/Login.js';
import Home from './container/Home';

import BottomNavigation from './components/navigation/BottomNavigation';




class App extends React.Component {

    render() {

        return (
            <div className="App">
                <Router>
                    <FirebaseProvider>
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Login} />
                        <Route path="/signout" component={Login} />
                        <AuthenticatedRoute path="/" component={Home} />
                        {/* <AuthenticatedRoute path="/profile" component={Profile} /> */}
                        <BottomNavigation></BottomNavigation>
                    </FirebaseProvider>
                </Router>
            </div>
        );
    }
}

export default App;
