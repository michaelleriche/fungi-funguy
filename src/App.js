import React, { Component } from 'react';
import firebase from './firebase';
import Header from './Header';
import Card from './Card';
import Hiscore from './Hiscore';
import PlayerCard from './PlayerCard';
import './App.css';

class App extends Component {
  constructor() {
    super ();
    this.state = {
      mushroomSpecies: []
    }
  }

  componentDidMount () {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {
      const mushroomObj = response.val();
      const arr = Object.values(mushroomObj.Mushrooms);
      let mushroomSpecies = [...this.state.mushroomSpecies]
      arr.map((mush, i) => {
      return mushroomSpecies.push({ image: mush.img, key: i, toxic: mush.toxic  });
      })
      this.setState({ mushroomSpecies: mushroomSpecies})
    });
  }

  
    


  render(){
      return (
        <div className>
        <Header />
        {/* <PlayerCard /> */}
        <Card images={this.state.mushroomSpecies} />
        <Hiscore />
        </div>
      );
  }
}

export default App;