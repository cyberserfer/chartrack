import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import Grid from '@material-ui/core/Grid';


export default class AppHeader extends Component {

    render() {
        return (
            <div>
                <h1 className="App-title">Character Tracker</h1>
                <Grid container spacing={3}>
                    <Grid item xs={1}><NavLink to='/'>Home</NavLink></Grid>
                    <Grid item xs={2}><NavLink to='/savageSheet'>Savage Worlds</NavLink></Grid>
                </Grid>
            </div>
        );
    }
}
