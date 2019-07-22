import React, { Component } from 'react'
import {
    FirebaseContext
} from '../../store/FirebaseContext';
import {
    withRouter
} from 'react-router-dom'


 class AuthSignup extends Component {

    static contextType = FirebaseContext;

    state = {
        username: '',
        email: '',
        password: '',
        hasError: false
    }
    
    constructor(props) {
        super(props);
        this.email = '';
        this.password = '';
        this.handleSignup = this.handleSignup.bind(this);
    }

    handleSignup(e) {
        e.preventDefault();
        if (!this.hasError) {
            this.context.handleSignup(this.email, this.password)
                .then(data => {
                    let defaultProfilePictureUrl = 'https://lolstatic-a.akamaihd.net/esports-assets/production/player/faker-jgj38q70.png'
                    let newUser = {
                        username: this.username,
                        email: this.email,
                        urlProfilePicture: defaultProfilePictureUrl,
                        uid: data.user.uid
                    };
                    this.context.user(data.user.uid).set(newUser);
                });
                this.props.history.push('/login');
        }
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSignup}>
                    <input id="username" name="username" type="username" placeholder="Your username" required onChange={(e) => {
                        this.username = e.currentTarget.value;
                    }} minLength="3"></input>

                    <input id="email" name="email" type="email" placeholder="Your Email" required onChange={(e) => {
                        this.email = e.currentTarget.value;
                    }}></input>

                    <input id="password" name="password" type="password" placeholder="Password" onChange={(e)=> {
                        this.password = e.currentTarget.value;
                    }} required autoComplete='true'></input>


                    <input id="password" name="password" type="password" placeholder="Confirm password" onChange={e => {
                        if (e.currentTarget.value !== this.password) {
                            this.hasError = true;
                        } else {
                            this.hasError = false;
                        }
                    }} required autoComplete='true'></input>
                    {this.hasError && <span> Mot de passe ne correspondent pas</span>}

                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}

export default withRouter(AuthSignup)