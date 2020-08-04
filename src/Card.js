import React, { Component } from "react";
import firebase from "./firebase";
import playerLogo from "./assets/playerPlaceholderImg.jpg";
import FinalScore from "../src/FinalScore";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      mushroomIndex: 0,
      counterIndex: 1,
      correctAnswer: 0,
      wrongAnswer: 0,
      isQuizDone: false,
      userName: null,
      modalOpen: true,
    };
    this.handleClickReset = this.handleClickReset.bind(this);
  }
  handleClickUserName = (e) => {
    this.setState({
      modalOpen: false,
    });
  };
  handleClickReset = function (e) {
    window.location.reload();
  };
  handleUserName = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };
  handleClick = (e) => {
    e.preventDefault();
    const isToxic = this.props.images[
      this.state.mushroomIndex
    ].toxic.toString();
    this.setState({
      mushroomIndex: this.state.mushroomIndex + 1,
      counterIndex: this.state.counterIndex + 1,
    });
    if (this.state.counterIndex === 20) {
      const dbRef = firebase.database().ref("userName");
      dbRef.push().set({
        userName: `${this.state.userName}`,
        score: `${this.state.correctAnswer}`,
      });
      this.setState({
        isQuizDone: true,
      });
    }
    if (isToxic === e.target.value) {
      this.setState({
        correctAnswer: this.state.correctAnswer + 1,
      });
    } else {
      this.setState({
        wrongAnswer: this.state.wrongAnswer + 1,
      });
    }
  };

  render() {
    const currentMushroom = this.props.images[this.state.mushroomIndex];
    if (this.state.modalOpen && !this.state.isQuizDone) {
      return (
        <section className="cardHolder wrapper">
          <div className="playerCard mushroomCard boxShadow wrapper">
            <div className="playerPlaceholderImage">
              <img
                src={playerLogo}
                alt="mushroom logo from the noun project.com created by AomAm"
                title="mushroom logo from the noun project.com created by AomAm"
              />
            </div>
            <div className="playerStack">
              <h3 className="hiScoreTitleTwo">Player</h3>
              <h3 className="hiScoreTitleThree">Player</h3>
              <h3>Player</h3>
            </div>
            <form className="userName">
              <label htmlFor="playerName">Name: </label>
              <input
                type="text"
                id="name"
                minLength="2"
                maxLength="18"
                onChange={this.handleUserName}
                required
              />
              <button
                className="startButton"
                onClick={this.handleClickUserName}
              >
                Start!
              </button>
            </form>
          </div>
        </section>
      );
    }

    if (this.state.isQuizDone) {
      return (
        <FinalScore
          userName={this.state.userName}
          finalScoreTally={this.state.correctAnswer}
          resetQuiz={this.handleClickReset}
        />
      );
    }
    return (
      <section className="cardHolder wrapper">
        <div className="mushroomCard wrapper boxShadow">
          <h2 className="mushroomNames">{currentMushroom.binomial}</h2>
          <img
            src={currentMushroom.image}
            alt={currentMushroom.binomial}
            title={currentMushroom.binomial}
          />
          <div className="bottomHalfCard">
            <div className="gameScore">
              <p> Score: {this.state.correctAnswer} / 20</p>
            </div>
            <div className="cardButtons">
              <button
                value="true"
                className="firstButton"
                onClick={this.handleClick}
              >
                Toxic
              </button>
              <button value="false" onClick={this.handleClick}>
                Edible
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Card;
