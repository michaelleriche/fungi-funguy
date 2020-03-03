import React, { Component } from 'react';

class Footer extends Component {
    render(){
      return (
        <footer>
            <div className="wrapper">
                <h3 className="hiScoreTitleTwo wrapper">Disclaimer!</h3>
                <p>This game is made out of respect and love for the mushroom, fungi, and the entire natural world. Don't eat random mushrooms you find in the woods. You'll get sick or die and that is 100% not chill.</p>
                <p className="copyrightText">Copyright &copy; 2020 // Coded by Michael le Riche</p>
                <div class="socialIcons">
                    <ul>
                        <li>
                            <a className="linkedInLogo" href="https://www.linkedin.com/in/michael-le-riche-147b361a0/">
                                <i class="fab fa-linkedin-in"></i>
                                <span class="visuallyHidden">Linkedin</span>
                            </a>
                        </li>  
                        <li>
                            <a className="twitterLogo" href="https://twitter.com/mlerichecodes">
                                <i class="fab fa-twitter"></i>
                                <span class="visuallyHidden">Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a className ="gitHubLogo" href="https://github.com/michaelleriche">
                                <i class="fab fa-github"></i>
                                <span class="visuallyHidden">github</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="lastTextDiv">
                    <p className="hiScoreTitleTwo lastText"> When in doubt, ask yourself:</p>
                    <p className="hiScoreTitleThree lastText"> ***** What would Neil Young Do? ***** </p>
                </div>
            </div>
        </footer>
      );
  }
}

export default Footer;