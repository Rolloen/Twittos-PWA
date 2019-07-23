import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {
  withRouter
} from "react-router";

import './bottomNavigation.css';


class BottomNavContainer extends React.Component {

    state = {
      value: 0
    }

    constructor(props) {
      super(props);
    }

    render() {
      return (
        <BottomNavigation
          value={this.state.value}
          onChange={(event, newValue) => {
            this.setState({value : newValue})
            if(newValue === 0) {
              this.props.history.push('/');
            } else if(newValue === 1) {
              this.props.history.push('/follows');
            } else if(newValue === 2) {
              this.props.history.push('/profile');
            }
          }}
          showLabels
          className="nav-bar"
        >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Following" icon={<BookmarkIcon />} />
            <BottomNavigationAction label="Me" icon={<AccountBoxIcon />} />

        </BottomNavigation>
      );
    }
}

export default withRouter(BottomNavContainer);