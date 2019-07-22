import React, { Component } from 'react'
import {
    FirebaseContext
} from '../../store/FirebaseContext';


export default class CreateTweet extends Component {

    static contextType = FirebaseContext;

    render() {
        return (
            <div>
                <form>
                    <input id="tweetMessage" placeholder="Your tweet" maxLength="280" />
                    <input type="submit" value="Send"></input>
                </form>
            </div>
        )
    }
}
