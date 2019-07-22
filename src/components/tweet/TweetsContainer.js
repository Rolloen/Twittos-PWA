import React, { Component } from 'react'
import { FirebaseContext} from '../../store/FirebaseContext';

import CreateTweet from './CreateTweet';

class TweetsContainer extends Component {

    static contextType = FirebaseContext;

    state = {
        limit: 10
    }

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.context.tweetRoute()
            .orderByChild('createdAt')
            .limitToLast(this.state.limit)
            .on('value', snapshot => {
                const tweetsObject = snapshot.val();
                console.log(tweetsObject);
                
                if (tweetsObject) {
                    const tweetsList = Object.keys(tweetsObject).map(key => ({
                        ...tweetsObject[key],
                        tid: key,
                    }));

                    this.setState({
                        tweets: tweetsList,
                        loading: false,
                    });
                } else {
                    this.setState({
                        tweets: null,
                        loading: false
                    });
                }

            });
    }

    render() {
        return (
            <div>
                <CreateTweet></CreateTweet>
            </div>
        )
    }
}

export default TweetsContainer