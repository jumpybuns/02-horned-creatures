import './App.css';
import React from 'react';
import Header from './Header.js';
import ImageList from './ImageList.js';
import images from './data.js';

export default class App extends React.Component {
  render() {
      return (
          <div>
              <Header /> 
              <ImageList imagesProps={images}/>
          </div>
      );
  }
}

