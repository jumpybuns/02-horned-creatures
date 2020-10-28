import './App.css';
import React from 'react';
import Header from './Header.js';
import ImageList from './ImageList.js';
import images from './data.js';
import DropDown from './DropDown.js';


export default class App extends React.Component {
    state = {
        filter: '',
        horns: '',
        keyword: '',
        
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
    handleChangeKeyword = e => {
        this.setState({
            keyword: e.target.value,
        });
    }
    render() {
        return (
            <div>
                <Header /> 
                <DropDown />
                <ImageList imagesProps={images}/>
                
            </div>
        );
    }
    }
