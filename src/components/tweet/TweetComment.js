import React, { Component } from 'react';


class TweetComment extends Component {
    // static contextType = TweetsContext;
    constructor(props) {
        super(props);
        console.log(this.props);
        
    }



    
    render() {
        return (
            <li>
                <b>{this.props.comment.username} </b> 
                <p>{this.props.comment.text}</p>
            </li>
        );
    }
}

export default TweetComment;
