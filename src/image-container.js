import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

export const ImgContainer = (props) =>{
  return (
    <div className = "img-rect">
      <img src = {props.image} />
      <p>
        {props.description}
      </p>
    </div>
  )
}
