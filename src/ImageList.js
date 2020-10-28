// //IMAGE ITEM ARRAY
import React, { Component } from 'react';
import ImageItem from './ImageItem.js';




export default class ImageList extends Component {
    render() {
        const filtered = this.props.imagesProps.filter((image) => {
        if (!this.props.horns) return true;
        if (image.horns === +this.props.horns) return true;
        return false;

     })
        .filter((image) => {
        if (!this.props.keyword) return true;
        if (image.keyword === +this.props.keyword) return true;
        return false;
        })   
        return (
        <div className="ImageList">    
                    {
            filtered.map(image => 
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