import React from 'react';
import images from './data.js';

export default class Animals extends React.Component {
    render() {
        return (
            <div>
                          {
              images.map(image => 
                <Animals
                  description={image.title} 
                  keyword={image.horns} />)
            }
            </div>
        );
    }
  }
  