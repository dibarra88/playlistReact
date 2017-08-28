import React, { Component } from 'react';
import img from '../img/headphonesmonkey.jpg'

export default class NavBar extends Component {
    render() {
        return (
            // <nav className="navbar navbar-inverse bg-inverse">
            //     <a className="navbar-brand" href="/">Play What?!</a>
            // </nav>
        <nav className="navbar navbar-inverse bg-inverse">
            <a className="navbar-brand">
              <img src={img} width="50" height="50" className="d-inline-block align-top" alt="" />
              <span className="navbar-text">Play what?!</span>
            </a>
          </nav>
        )
    }
}