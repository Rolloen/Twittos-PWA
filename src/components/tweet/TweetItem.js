import React, { Component } from 'react';

import UserCard from '../user/UserCard';


class TweetItem extends Component {
    // static contextType = TweetsContext;
    constructor(props) {
        super(props);
    }


    
    render() {
        return (
            <li>
                <UserCard tweet={this.props.tweet} firebase={this.props.firebase}></UserCard>
                {this.props.tweet.message}
                {/* <button>RT</button> */}
            </li>
        );
    }
}

export default TweetItem;
