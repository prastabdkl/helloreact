import React, {Component} from "react";
import './App.css';

export const NavBar  = () => {
  return (
    <div className="App-header">
      <a href = "#" className = "App-logo"> Home </a>
      <a href = "../public/aboutus.html"> About Us </a>
      <a href = "#"> Services </a>
      <form>
        <input type = "text"/>
      </form>
    </div>
  )
}
