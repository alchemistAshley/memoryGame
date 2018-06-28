import React,  { Component, Fragment } from 'react';
 

class Card extends Component {
    state = {
    clicked: false
    }
    
    // handleOnClick

    render() {
        return (
            <Fragment>
                <img className="center-align" key={this.props.title} src={this.props.image} alt={this.props.title}/>
            </Fragment>
        )
    }
}

export default Card;