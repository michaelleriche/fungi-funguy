import React, { Component } from 'react';
import mushroomLogo from './assets/logo.jpg';

class Header extends Component{
    render(){
      return (
        <header className="wrapper">
          <div className="title">
            <h1>Is this fungi a Fun Guy?</h1>
            <img src={mushroomLogo} className="mushyLogo" alt="smiling mushroom fun guy logo from the nounproject.com by sobinsergey"/>
          </div>
          <h4>Mushrooms are fascinating, but they're not always friendly! Can you tell which are toxic and which are edible? </h4>
        </header>
      );
  }
}

export default Header;
