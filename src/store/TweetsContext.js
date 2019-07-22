import React, {
    Component,
    createContext
} from "react";

export const TweetsContext = createContext({
    tweets: [],
    suggestions: [],
    getSuggestions: () => {}

});

export class TweetsProvider extends Component {
    state = {
        tweets: [],
        suggestions: [],
        getAllTweets: () => {

        },

        
        
        getSuggestions : () => {
            UserApi.suggestion()
                .then(data => {
                    this.setState({
                        suggestions: data.users
                    });
                })
        },

        followUser: (toFollowUsername) => {
            UserApi.followUser(toFollowUsername)
                .then(data => {
                    console.log(data);
                    
                    // this.setState({
                    //     suggestions: data.users
                    // });
                })
        }
    }



    render() {
        return <TweetsContext.Provider value = {
                this.state
            } > {
                this.props.children
            } </TweetsContext.Provider>
    }
}