import React, { Component } from 'react';
import logo from './logo.svg';
import MenuAppBar from './components/MenuAppBar'
import Map from './components/Map'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <MenuAppBar/>
        <div style={{padding:"10px",display:"flex",height:window.innerHeight-100}}>
          <Map id="mymap"/>
        </div>
      </div>
    );
  }
}

export default App;
