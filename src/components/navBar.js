// this is my navbar
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
		flexGrow: 1,
		backgroundColor: '#61CE76'
  },
  title: {
		flexGrow: 1,
  },
}));

// navbar component
// simple nav bar, has title top left, and links in top right for login and listings
export default function Nav(props) {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="relative">
        <Toolbar className={classes.root}>
          <Typography variant="h6" className={classes.title}>
            Austin Small Buisness App
          </Typography>
          <li className="nav-list-item">
          <Link to="/Listings">Listings</Link>
          </li>
          {/* <li className="nav-list-item">
          <Link to="/access">LogIn</Link>
          </li> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}