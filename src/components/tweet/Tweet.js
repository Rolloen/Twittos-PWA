import React, { Component } from 'react';
import {
    TweetsContext
} from '../../store/TweetsContext';

class Suggestion extends Component {
    static contextType = TweetsContext;
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <>
                {this.props.suggestions.map(u => (
                    <li key={u._id}>
                    <span>{u.username}</span>
                    <button onClick={()=> {
                        this.context.followUser(u.username);
                    }}>Follow</button>
                    </li>
                    
                 ))}
            </>
        );
    }
}

export default Suggestion;
