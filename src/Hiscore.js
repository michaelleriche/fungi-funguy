import React, { Component } from "react";
import firebase from "./firebase";

class Hiscore extends Component {
  constructor() {
    super();
    this.state = {
      userNameAndScore: [],
    };
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on("value", (response) => {
      const hiScoreNames = response.val();
      const arr = Object.values(hiScoreNames.userName);
      let userNameAndScore = [];
      arr.map((name, i) => {
        return userNameAndScore.push({
          userName: name.userName,
          key: i,
          score: name.score,
        });
      });
      let sortedArray = userNameAndScore.sort(function (a, b) {
        return b.score - a.score;
      });
      let topTenScores = sortedArray.slice(0, 10);
      this.setState({ userNameAndScore: topTenScores });
    });
  }

  render() {
    return (
      <section className="wrapper hiScore boxShadow" tabIndex="0">
        <div className="playerStack hiScoreTitle">
          <h3 className="hiScoreTitleTwo">Hi-Scores</h3>
          <h3 className="hiScoreTitleThree">Hi-Scores</h3>
          <h3>Hi-Scores</h3>
        </div>
        <div className="hiScoreNames">
          {this.state.userNameAndScore.map((name) => {
            return (
              <p key={name.userName} className="hiScoreNameSpan">
                <span className="hiScoreTitleTwo hiScoreNameSpan">Name:</span>
                {name.userName}{" "}
                <span className="hiScoreTitleThree hiScoreNameSpan">
                  Score:
                </span>
                {name.score}/20
              </p>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Hiscore;
