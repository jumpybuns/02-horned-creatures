// //IMAGE ITEM ARRAY
import React from 'react';
import ImageItem from './ImageItem.js';




export default class ImageList extends React.Component {
    state = {
        filter: '',
        horns: '',
        
    }

    handleChange = e => {
        this.setState({
            filter: e.target.value,
        });
    }

    handleChangeHorns = e => {
        this.setState({
            horns: e.target.value,
        });
    }

    render() {
        const filtered = this.props.imagesProps.filter((image) => {
        if (!this.state.horns) return true;
        if (image.horns === +this.state.horns) return true;
        return false;
      })
        return (
            <>
            <select onChange={this.handleChangeHorns}>
                <option value="">All Horns</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="100">100</option>

            </select>
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
        </>
        )
    }
}

