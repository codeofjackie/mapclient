import React, { Component } from 'react';
import logo from './logo.svg';
import MenuAppBar from './components/MenuAppBar'
import Map from './components/Map'
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { BottomNavigation } from '@material-ui/core';
import {BottomNavigationAction } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';

const styles = {
  root: {
    width: "100vw",
  },
};

class App extends Component {
  render() {
    const { classes } = this.props;
    let xstate = "寻车"
    let usestate = "用车"
    return (
      <div>
        <MenuAppBar/>
        <div style={{padding:"0px",display:"flex",height:window.innerHeight-80}}>
          <Map id="mymap"/>
        </div>
        <BottomNavigation className={classes.root} showLabels style={{position:"fixed",bottom:0,zIndex:30}}>
            <BottomNavigationAction label={xstate} value="recents"  icon={<LocationOnIcon />}/>
            <BottomNavigationAction label={usestate} value="favorites" icon={<MotorcycleIcon />} />
        </BottomNavigation>
      </div>
    );
  }
}

export default withStyles(styles)(App);
