import React from 'react';


const FinalScore = (props) => {
    console.log(props.finalScoreTally)
        return (
            <div>
                <h3>{props.userName} got {props.finalScoreTally}out of 20!</h3>
            </div>
        )
    

}








export default FinalScore;