import React, { Component } from 'react'


import TweetsContainer from '../components/tweet/TweetsContainer';
// import SuggestionsContainer from '../components/suggestion/SuggestionsContainer';
// import {TweetsProvider} from '../store/TweetsContext';
import CreateTweet from '../components/tweet/CreateTweet';

class Home extends Component {

    render() {

        return (
            <div>
                {/* <TweetsProvider> */}
                    <TweetsContainer></TweetsContainer>
                    <CreateTweet></CreateTweet>

                    {/* <SuggestionsContainer></SuggestionsContainer> */}
                {/* </TweetsProvider> */}
            </div>
        )
    }
}

export default Home