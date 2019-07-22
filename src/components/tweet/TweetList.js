import React, { Component } from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';

import TweetItem from './TweetItem';

import './tweetList.css';

class TweetList extends Component {
    static contextType = FirebaseContext;

    state = {
        limit: 10,
        tweets: []
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.context.tweetsRoute()
            .orderByChild('createdAt')
            .limitToLast(this.state.limit)
            .on('value', snapshot => {
                const tweetsObject = snapshot.val();
                if (tweetsObject) {
                    
                    let tweetsList = Object.keys(tweetsObject).map(key => ({
                        ...tweetsObject[key],
                        tid: key,
                    }));
                    tweetsList = tweetsList.reverse();
                    this.setState({
                        tweets: tweetsList
                    });
                } else {
                    this.setState({
                        tweets: null
                    });
                }

            });
    }

    render() {

        return (
            <>
                {
                    this.state.tweets.length > 0 && 

                    this.state.tweets.map((tweet) => (
                        <TweetItem key={tweet.tid} tweet={tweet} firebase={this.context}></TweetItem>
                    ))
                }
            </>
        );
    }
}

export default TweetList;
