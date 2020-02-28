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
            <section className="cardHolder wrapper">
                <div className="mushroomCard wrapper" key={i}>
                    <h3>Mystery Mushroom #</h3>
                    <img src={mushroom.image} alt=""/>
                    <div className="cardButtons">
                        <button value='true' onClick={handleClick}>Toxic</button>
                        <button value='false' onClick={handleClick}>Edible</button>
                    </div>  
                </div>
            </section>    
            )
        })
        return realCard;
    }
}

export default Card;