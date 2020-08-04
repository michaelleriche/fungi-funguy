import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="wrapper">
          <h3 className="hiScoreTitleTwo wrapper" tabIndex="0">
            Disclaimer!
          </h3>
          <p>
            This game is made out of love and respect for the mushroom, fungi,
            and the entire natural world. Whatever you do, don't eat random
            mushrooms you find in the woods! You could get very sick and
            possibly even die.
          </p>
          <p className="copyrightText">
            Copyright &copy; 2020 // Coded by Michael le Riche
          </p>
          <div className="socialIcons">
            <ul>
              <li>
                <a
                  className="linkedInLogo"
                  href="https://www.linkedin.com/in/michael-le-riche-147b361a0/"
                >
                  <i tabIndex="0" className="fab fa-linkedin-in"></i>
                  <span className="visuallyHidden">Linkedin</span>
                </a>
              </li>
              <li>
                <a
                  className="twitterLogo"
                  href="https://twitter.com/mlerichecodes"
                >
                  <i tabIndex="0" className="fab fa-twitter"></i>
                  <span className="visuallyHidden">Twitter</span>
                </a>
              </li>
              <li>
                <a
                  className="gitHubLogo"
                  href="https://github.com/michaelleriche"
                >
                  <i tabIndex="0" className="fab fa-github"></i>
                  <span className="visuallyHidden">github</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="lastTextDiv">
            <p className="hiScoreTitleTwo lastText">
              {" "}
              When in doubt, ask yourself:
            </p>
            <p className="hiScoreTitleThree lastText">
              {" "}
              ***** What would Neil Young Do? *****{" "}
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
