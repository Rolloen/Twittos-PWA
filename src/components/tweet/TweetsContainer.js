import React, { Component } from 'react'
import { FirebaseContext} from '../../store/FirebaseContext';

import CreateTweet from './CreateTweet';
import TweetList from './TweetList';

class TweetsContainer extends Component {

    static contextType = FirebaseContext;



    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <TweetList></TweetList>
            </div>
        )
    }
}

export default TweetsContainer