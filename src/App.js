import React, { Component } from 'react';
import firebase from './firebase';
import './App.css';

class App extends Component{
  constructor() {
    super ();
    this.state = {
      mushroomSpecies: [],
    }
  }

  // componentDidMount () {
  //   const dbRef = firebase.database().ref();
  //   dbRef.on('value', (response) => {
  //     const mushroomGallery = [];
  //     const data = response.val();
  //     for (let key in data) {
  //       mushroomGallery.push(data[key]);
  //     }
  //     this.setState({
  //       mushroomSpecies: mushroomGallery
  //     });
  //   });
  // }
    


  render(){
      return (
        <div>
          <header>
            <h1>Is this fungi a fun guy?</h1>
          </header>
          <ul>
            {this.state.mushroomSpecies.map((mushroom) => {
              return <li>{mushroom}</li>
            })}
          </ul>
        </div>
      );
  }
}

export default App;