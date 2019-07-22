import React, { Component } from 'react'
import {
    FirebaseContext
} from '../../store/FirebaseContext';


export default class CreateTweet extends Component {

    static contextType = FirebaseContext;

    state = {
        message: '',
        authUser:{}
    }

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        let userData = JSON.parse(window.localStorage.getItem('userData'));
        this.setState({
            authUser: userData
        })
    }

    sendNewTweet = (e) => {
        let key = this.context.tweetsRoute().push({
            message: this.state.message,
            userId: this.state.authUser.uid,
            username: this.state.authUser.username,
            createdAt: this.context.getServerTime(),
            urlProfilePicture: this.state.authUser.urlProfilePicture,
            like: 0,
            retweets: 0,
            listreTweets: [],
            listFav: [],
        }).key;

        key = key.substring(1);
        
        this.setState({
            message: ''
        });
          this.context.userRoute(this.state.authUser.uid).child('tweets').push(key);
        e.preventDefault();

    }

    render() {
        return (
            <div>
                <form onSubmit={this.sendNewTweet}>
                    <input id="tweetMessage" placeholder="Your tweet" value={this.state.message} maxLength="280" 
                    onChange={(e) => this.setState({message: e.target.value})}/>
                    <input type="submit" value="Send"></input>
                </form>
            </div>
        )
    }
}
