import React, { Component } from 'react'
import {
    FirebaseContext
} from '../../store/FirebaseContext';
import {
    withRouter
} from 'react-router-dom';

 class AuthLogin extends Component {

    static contextType = FirebaseContext;

    state = {
        email: '',
        password: ''
    }
    
    constructor(props) {
        super(props);
        console.log(this);
        
        this.email = '';
        this.password = '';
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(e) {
        e.preventDefault();
        this.context.handleLogin(this.email, this.password)
            .then(data => {
                console.log(data);
                
            });
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleLogin}>
                    <label htmlFor="email">Email : </label>
                    <input id="email" name="email" type="email" required onChange={(e) => {
                        this.email = e.currentTarget.value;
                    }}></input>

                    <label htmlFor="password">Password : </label>
                    <input id="password" name="password" type="password" onChange={(e)=> {
                        this.password = e.currentTarget.value;
                    }} required autoComplete='true'></input>

                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}

export default withRouter(AuthLogin)