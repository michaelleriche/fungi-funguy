import React, { Component } from 'react';

class Card extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }


    render(){
        const realCard = this.props.images.map((mushroom, i) => {
           const handleClick = (e) => {
                e.preventDefault()
                const isToxic = mushroom.toxic.toString()
                if(isToxic === e.target.value) {
                    console.log('You got it right')
                } else {
                    console.log('you dumb~')
                }
            }
            return (
            <div key={i}>
                <img src={mushroom.image} alt=""/>
                <button value='true' onClick={handleClick}>Toxic</button>
                <button value='false' onClick={handleClick}>Nontoxic</button>
            </div>
            )
        })
        return realCard;
    }
}

export default Card;