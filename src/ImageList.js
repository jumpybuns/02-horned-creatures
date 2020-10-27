//IMAGE ITEM ARRAY
import React from 'react';
import images from './data.js';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <images /> 
            </div>
        );
    }
  }
  


export class imageItem extends React.Component {
    render() {
        return (
            <div className='imageItem'>
                <input type="checkbox"/>
                {this.props.images}
            </div>
        )
    }
}
