import React, { Component } from 'react'
import {
    Redirect,
    withRouter
} from 'react-router-dom';
import {
    FirebaseContext
}
from '../store/FirebaseContext';

import AuthLogin from '../components/authentication/AuthLogin';
import AuthSignup from '../components/authentication/AuthSignup';


class Login extends Component {
    constructor(props) {
        super(props)

    }
    componentDidMount() {
        if (this.props.location.pathname === '/signout') { 
            this.handleLogout();
        }
    }

    handleLogout() {
        this.context.handleLogout()
            .then(()=> {
                this.props.history.push('/login');
            });
        
    }

    render() {
        let comp;
        if (this.context.isAuth && window.localStorage.getItem('authenticated')) {
            comp = <Redirect to={"/"}/>;
        } else  {
            if (this.props.location.pathname === '/login') {
                comp = <AuthLogin></AuthLogin>;
            } else if (this.props.location.pathname === '/signup') {
                comp = <AuthSignup></AuthSignup>
            }
        }
        return (
            <div>
                <button onClick={()=> {
                    this.context.handleLogout();
                }}>Logout</button>
                <button onClick={() => {this.props.history.push('/signup')}}>Signup</button>
                <button onClick={() => this.props.history.push('/login')}>Login</button>
                {comp}
            </div>
        )
    }
}

Login.contextType = FirebaseContext;

export default withRouter(Login)
