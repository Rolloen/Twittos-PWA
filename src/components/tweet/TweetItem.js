import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CachedIcon from '@material-ui/icons/Cached';
import StarsIcon from '@material-ui/icons/Stars';
import UserCard from '../user/UserCard';
import TweetComment from './TweetComment';

import './tweetItem.css';
class TweetItem extends Component {
    // static contextType = TweetsContext;
    constructor(props) {
        super(props);
        this.state = {
            tweet : this.props.tweet,
            comment: '',
            listComments : []
        }
    }

    deleteTweet = () => {

    }

    componentDidMount() {
        let tmpList = [];
        let listCommentaire = this.state.tweet.listCommentaire;
        for (let index in listCommentaire) {
            tmpList.push(listCommentaire[index]);
        }

        this.setState({
            listComments: tmpList
        });
    }

    likeTweet = () => {
        let user = this.props.firebase.user;
        this.props.firebase.tweetsRouteWithId(this.state.tweet.tid).child('listLike').push({
            userId: user.uid,
            username: user.username,
        });
        let tweet = this.state.tweet;
        console.log(tweet);
        
        tweet.like++;
        this.props.firebase.tweetsRouteWithId(tweet.tid).child('like').set(tweet.like);
        this.props.firebase.userRoute(user.uid).child('listLike').push(tweet.tid);
        this.setState({
            tweet: tweet
        })
    }

    addNewComments = (e) => {
        e.preventDefault();
        let user = this.props.firebase.user;
        this.props.firebase.tweetsRouteWithId(this.state.tweet.tid).child('listCommentaire').push({
            text: this.state.comment,
            userId: user.uid,
            username: user.username,
            createdAt: this.props.firebase.getServerTime()
        });
        
    }

    
    render() {
        return (
            <li>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <UserCard tweet={this.state.tweet} firebase={this.props.firebase}></UserCard>

                    </Grid>
                    <Grid item xs={8}>

                        <div className="tweet-card">
                            <p>{this.state.tweet.message}</p>
                            <div className="share-btn">
                                <div className="rts">
                                    <span>{this.state.tweet.retweets}</span>
                                    <CachedIcon ></CachedIcon>
                                </div>
                                <div className="like" onClick={this.likeTweet}>
                                    <span>{this.state.tweet.like}</span>
                                    <StarsIcon ></StarsIcon>
                                </div>

                            </div>
                            <div className="comments">
                                <div>
                                    <form onSubmit={this.addNewComments}>
                                        <input type="text" value={this.state.comment} onChange={e => {
                                            this.setState({
                                                comment: e.target.value
                                            })
                                        }} minLength="1" maxLength="280"/>
                                        <input type="submit" value="Send"/>
                                    </form>
                                </div>
                                <div className="list-comments">
                                    {(this.state.listComments && this.state.listComments.length > 0 ) 
                                        && this.state.listComments.map((comment, index) => (
                                            
                                            <ul>
                                                <TweetComment key={index} comment={comment}></TweetComment>
                                            </ul>
                                        ))}
                                </div>
                            </div>
                            {/* {this.props.firebase.user.uid === this.props.tweet.userId && <CloseIcon />} */}
                        </div>
                    </Grid>
                </Grid>
            </li>
        );
    }
}

export default TweetItem;
