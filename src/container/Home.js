import React, { Component } from 'react'


import TweetsContainer from '../components/tweet/TweetsContainer';
// import SuggestionsContainer from '../components/suggestion/SuggestionsContainer';
// import {TweetsProvider} from '../store/TweetsContext';

class Home extends Component {

    render() {

        return (
            <div>
                {/* <TweetsProvider> */}
                    <TweetsContainer></TweetsContainer>
                    {/* <SuggestionsContainer></SuggestionsContainer> */}
                {/* </TweetsProvider> */}
            </div>
        )
    }
}

export default Home