import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <Banner />
            </div>
        )
    }
}

export class Banner extends React.Component {
    render() {
        return (
            <div>
                <img className="banner" src="" alt="banner"></img>
            </div>
        )
    }
}