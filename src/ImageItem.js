import React from 'react';


export default class ImageItem extends React.Component {
    render() {
        return (
        <div> 
            <img className="ImageItem" src={this.props.url} alt={this.props.description}></img>
            <h2 className="titles">{this.props.title}</h2>
            <h2 className="description">{this.props.description}</h2>
            <h2 className="keyword">Keyword:{this.props.keyword}</h2>
            <h2 className="horns">Number of Horns:{this.props.horns}</h2>

        </div>
        )
    }
}