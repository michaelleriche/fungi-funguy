import React, { Component } from 'react';

class Card extends Component {

    handleClick() {
        // e.preventDefualt()
        console.log('I CLICK')
        // pass an event to your onclick
        
    }
    render(){
        const realCard = this.props.images.map((mushroom, i) => {
            return (
            <div key={i}>
                <img src={mushroom.image} alt=""/>
                <fieldset>
                    <label htmlFor="toxic">Toxic</label>
                    <input type="radio" id="toxic" name="toxic" value="true"></input>
                    <label htmlFor="nontoxic">Non-Toxic</label>
                    <input type="radio" id="nontoxic" name="nontoxic" value="false"></input>
                    <button onClick={this.handleClick()}>CLICK ME</button>
                </fieldset>
            </div>
            )
        })
        return realCard;
    }
}

export default Card;