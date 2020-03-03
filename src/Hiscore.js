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
        let userNameAndScore = []
        arr.map((name, i) => {
        return userNameAndScore.push({ userName: name.userName, key: i, score: name.score });
        })
        let sortedArray = userNameAndScore.sort(function(a, b) {
          return b.score - a.score;
        });
        let topTenScores = sortedArray.slice(0,10);
        this.setState({ userNameAndScore: topTenScores});
        });
      }

    render(){ 
      return (
        <section className="wrapper hiScore">
            <div className="hiScoreTitle">
              <h3>Hi-Scores <span className="hiScoreTitleThree">Hi-Scores</span> Hi-Scores <span className="hiScoreTitleThree">Hi-Scores</span> Hi-Scores <span className="hiScoreTitleThree">Hi-Scores</span> Hi-Scores <span className="hiScoreTitleThree">Hi-Scores</span>  
              </h3> 
            </div>
            <div className="hiScoreNames">
              {this.state.userNameAndScore.map(name => {
                return <p key={name.userName}><span className="hiScoreTitleTwo">Name:</span>{name.userName} <span className="hiScoreTitleThree">Score:</span>{name.score}/20</p>; })}
            </div>
        </section>
        );
    }
}

export default Hiscore;