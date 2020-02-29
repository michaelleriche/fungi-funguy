import React, { Component } from 'react';
import firebase from './firebase';

class Hiscore extends Component {
    constructor() {
        super ();
        this.state = {
            userNameAndScore: []
        }
      }
    
      componentDidMount () {
        const dbRef = firebase.database().ref()
        dbRef.on('value', (response) => {
        const hiScoreNames = response.val()
        const arr = Object.values(hiScoreNames.userName);
        let userNameAndScore = [...this.state.userNameAndScore]
        arr.map((name, i) => {
        return userNameAndScore.push({ userName: name.userName, key: i, score: name.score });
        })
        this.setState({ userNameAndScore: userNameAndScore})
      });
    }

 

    render(){ 
        const userNames = this.state.userNameAndScore.map(name => {
        return <p>{name.userName} {name.score} </p>
        })
      return (
        <section className="wrapper hiScore">
            <h3><span className="hiScoreTitleTwo">Hi-Scores</span><span className="hiScoreTitleThree"> Hi-Scores</span> Hi-Scores</h3>
            <div>
            <p> {userNames}</p>
            </div>
        </section>
        );
    }
}

export default Hiscore;