import React,  { Component, Fragment } from 'react';

const style= {
    img: {
        marginRight: 15,
        marginLeft: 15,
        marginTop: 20, 
    }
}


class Card extends Component {
    state = {
    clicked: false
    }
    
    // handleOnClick

    render() {
        return (
            <Fragment>
                <img style={style.img} key={this.props.title} src={this.props.image} alt={this.props.title}/>
            </Fragment>
        )
    }
}

export default Card;