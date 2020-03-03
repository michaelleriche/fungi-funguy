import React from 'react';

const FinalScore = (props) => {
    return (
        <div className="finalScoreBanner wrapper">
            <h3><span className="hiScoreTitleTwo">Congrats </span><span className="hiScoreTitleThree">Congrats</span> Congrats</h3>
            <h3>You're done!</h3>
            <p>Your final score was:</p>
            <p> {props.finalScoreTally} / 20!</p>
            <p>And always remember mushrooms are our friends!</p>
            <button onClick={props.resetQuiz}>Reset!</button>
        </div>
    )
}



export default FinalScore;