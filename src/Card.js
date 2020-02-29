import React, { Component } from 'react';
import firebase from './firebase';
import FinalScore from '../src/FinalScore';

class Card extends Component {
    constructor() {
        super()
        this.state = {
            mushroomIndex: 0,
            correctAnswer: 0,
            wrongAnswer: 0,
            isQuizDone: false,
            userName: null,
            modalOpen: true
        }
    }

    handleClickUserName = (e) => {
        this.setState({
            modalOpen: false,
        })
        
    }

    handleUserName = (e) => {
        this.setState({
            userName: e.target.value
        })
    }


    
    handleClick = (e) => {
        e.preventDefault()
        const isToxic = this.props.images[this.state.mushroomIndex].toxic.toString()
        this.setState({
            mushroomIndex: this.state.mushroomIndex + 1,
        })
        if (this.state.mushroomIndex == 19) {
            const dbRef = firebase.database().ref('userName');
            dbRef.push().set({userName: `${this.state.userName}`, score: `${this.state.correctAnswer}`}) 
            this.setState({
                isQuizDone: true,
            })
            console.log(this.state.isQuizDone)
        }

        if(isToxic === e.target.value) {
            this.setState({
                correctAnswer: this.state.correctAnswer + 1,
            })
        } else {
            this.setState({
                wrongAnswer: this.state.wrongAnswer + 1,
            })
        }
    
        console.log('You got it right', this.state.correctAnswer)
        console.log('you dumb~', this.state.wrongAnswer)

    }

   

    render(){
        const currentMushroom = this.props.images[this.state.mushroomIndex];
       

  
        if(this.state.modalOpen && !this.state.isQuizDone) {
            return (
                <section className="cardHolder wrapper">
                <div className="playerCard mushroomCard wrapper">
                    <h3><span className="hiScoreTitleTwo">Player </span><span className="hiScoreTitleThree">Player</span> Player</h3>

                        <div className="userName">
                            <label htmlFor="playerName">Name: </label>
                            <input type="text" id="name" onChange={this.handleUserName}/>
                            <button  onClick={this.handleClickUserName}>Submit!</button>
                        </div>  
                </div>
            </section>    
            )
        }

        if (this.state.isQuizDone) {

            return <FinalScore userName={this.state.userName} finalScoreTally={this.state.correctAnswer}/>
        } 
            return (
                <section className="cardHolder wrapper">
                        <div className="mushroomCard wrapper">
                            <h3>Mystery Mushroom #</h3>
                            <img src={currentMushroom.image} alt=""/>
                             <div className="cardButtons">
                                <button value='true' onClick={this.handleClick}>Toxic</button>
                                <button value='false' onClick={this.handleClick}>Edible</button>
                            </div>  
                        </div>
                     </section>  

            ) 
        // const realCard = this.props.images.map((mushroom, i) => {
        //    const handleClick = (e) => {
        //         e.preventDefault()
        //         const isToxic = mushroom.toxic.toString()
        //         if(isToxic === e.target.value) {
        //             console.log('You got it right')
        //         } else {
        //             console.log('you dumb~')
        //         }
        //     }
        //     return (
        //     <section className="cardHolder wrapper">
        //         <div className="mushroomCard wrapper" key={i}>
        //             <h3>Mystery Mushroom #</h3>
        //             <img src={mushroom.image} alt=""/>
        //             <div className="cardButtons">
        //                 <button value='true' onClick={handleClick}>Toxic</button>
        //                 <button value='false' onClick={handleClick}>Edible</button>
        //             </div>  
        //         </div>
        //     </section>    
        //     )
        // })
        // return realCard;
    }
}

export default Card;