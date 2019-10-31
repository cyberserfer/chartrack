import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';


export default class AppHeader extends Component {

    render() {
        return (
            <div>
                <h1 className="App-title">Character Tracker</h1>

                <div><NavLink to='/'>Home</NavLink></div>
                <div><NavLink to='/savageSheet'>Savage Worlds</NavLink></div>

            </div>
        );
    }
}
