import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

export default class AppHeader extends Component {
  render() {
    return (
      <div>
        <h1 className="App-title">Character Tracker</h1>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/savageSheet">Savage Worlds</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
