// //IMAGE ITEM ARRAY
import React from 'react';
import images from './data.js';
import ImageItem from './ImageItem.js';




export default class ImageList extends React.Component {
    render() {
        return (
        <div className="ImageList">    
                      {
            images.map(image => 
              <ImageItem
                url={image.url} 
                title={image.title} 
                description={image.description}
                keyword={image.keyword}
                horns={image.horns} 
                />)
          }
        </div>
        )
    }
}