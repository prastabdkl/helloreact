import React, { Component } from 'react';
import logo from './logo.svg';
import pasa from './pasa.jpg';
import './App.css';
import { NavBar } from './navBar'
import { ImgContainer } from './image-container'

const a = "App-intro"

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className={a}>
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <div>
        <NavBar />
        <ImgContainer description = "This is the logo of React and the description is available whenever needed. please call me at 9818311488" image = {logo}/>
        <ImgContainer description = "rambahadur" image = {pasa}/>
        <ImgContainer />
        <ImgContainer />



      </div>
    );
  }
}



export default App;
