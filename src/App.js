import './App.css';
import React from 'react';
import Header from './Header.js';
import Animals from './Animals.js';
import Images from './Images.js';

export default class App extends React.Component {
  render() {
      return (
          <div>
              <Header /> 
              <Animals /> 
              <Images /> 
          </div>
      );
  }
}



