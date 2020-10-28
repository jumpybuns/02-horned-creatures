import './App.css';
import React from 'react';
import Header from './Header.js';
import ImageList from './ImageList.js';

export default class App extends React.Component {
  render() {
      return (
          <div>
              <Header /> 
              <ImageList />
              <h1>The World of Horned Creatures</h1>
              <option className="keyword">Keywords</option>
          </div>
      );
  }
}


// const numbers = [1, 2, 3, 4, 5,];
// const keywords = numbers.filter(number => number === true);