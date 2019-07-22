import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import Button from '@material-ui/core/Button';

import FirebaseContext from '../../store/FirebaseContext';

const useStyles = makeStyles({
  root: {
    width: "100%",
    borderTop: '1px solid blue',
    position: "fixed",
    bottom: 0
  },
});

function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);


  // const FirebaseContext = React.useContext(FirebaseContext);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Following" icon={<BookmarkIcon />} />
        <BottomNavigationAction label="Me" icon={<AccountBoxIcon />} />
        {/* <Button label="Me" onClick={e => {
          // FirebaseContext.handleLogout();
        }}>Signout</Button> */}
    </BottomNavigation>
  );
}

export default SimpleBottomNavigation;