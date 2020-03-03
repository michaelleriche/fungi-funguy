import React, { Component } from 'react';

class Footer extends Component {
    render(){
      return (
        <footer>
            <div className="wrapper">
                <h3 className="hiScoreTitleTwo wrapper">Disclaimer!</h3>
                <p>This game is made out of respect and love for the mushroom, fungi, and the entire natural world. Don't eat random mushrooms you find in the woods. You'll get sick or die and that is 100% not chill.</p>
                <p className="copyrightText">Copyright &copy; 2020 // Coded by Michael le Riche</p>
                <p className="hiScoreTitleThree lastText"> ***** What would Neil Young Do? ***** </p>
            </div>
        </footer>
      );
  }
}

export default Footer;