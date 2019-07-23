import React, { Component } from 'react';

import './userCard.css'

class UserCard extends Component {
    // static contextType = TweetsContext;


    constructor(props) {
        super(props);
        this.state = {
            isFollowing: this.props.isFollowing
        }
    }

    followUser = () => {
        console.log(this.checkIsFollowed());
        
        let currentUser = this.props.firebase.user;
        let toFollowUserId = this.props.tweet.userId;
        if (!this.checkIsFollowed()){
            this.props.firebase.userRoute(toFollowUserId).child('followers').push(currentUser.uid);
            this.props.firebase.userRoute(currentUser.uid).child('following').push(toFollowUserId);            
        } 
        else {
            this.props.firebase.userRoute(toFollowUserId).child("followers").once('value', snapshot => {
                snapshot.forEach(child => {
                    if (child.val() === currentUser.uid) {
                        child.ref.remove();
                    }
                });
            })
            this.props.firebase.userRoute(currentUser.uid).child("following").once('value', snapshot => {
                snapshot.forEach(child => {
                    if (child.val() === toFollowUserId) {
                        child.ref.remove();
                    }
                });
            })
        }
        this.props.firebase.updateUserData();
    }

    checkIsFollowed = () => {
        let followingUsers = this.props.firebase.user.following;
        for (let index in followingUsers) {
            if (followingUsers[index] === this.props.tweet.userId) {
                return true;
            }
        }
        return false;
    }
    
    render() {
        let FollowBtn;
        if (this.checkIsFollowed()) {            
            FollowBtn = <button onClick={this.followUser}>Unfollow</button>
        } else {
            FollowBtn = <button onClick={this.followUser}>Follow</button>
        }
        return (
            <div className="user-card">
                <img src={this.props.tweet.urlProfilePicture} alt="Profile Picture" />
                <span>
                    {this.props.tweet.username}
                </span>
                {FollowBtn}
             
            </div>
        );
    }
}

export default UserCard;
