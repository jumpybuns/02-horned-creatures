import React from 'react';




export default class Images extends React.Component {
    render() {
        return (
            <div>
                
                    <img className="images" src={this.props.image} alt="images"></img>
                
            </div>
        )
    }
  }