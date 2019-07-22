import React, { Component } from 'react'
import Suggestion from './Suggestion';
import { TweetsContext} from '../../store/TweetsContext';
import Grid from '@material-ui/core/Grid';

import './suggestionsContainer.css';

class SuggestionsContainer extends Component {

    static contextType = TweetsContext;

    state = {

    }

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        console.log(this.context);
        
        this.context.getSuggestions();
    }

    render() {
        return (
            <Grid container spacing={1}>
                <Grid item xs={2} className="suggestions-container">
                    <Suggestion suggestions={this.context.suggestions}></Suggestion>
                </Grid>
            </Grid>
        )
    }
}

export default SuggestionsContainer