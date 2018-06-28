import React,  { Component, Fragment } from 'react';

const style= {
    img: {
        marginRight: 15,
        marginLeft: 15,
        marginTop: 20, 
    }
}


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
        this.handleOnClick = this.handleOnClick.bind(this)
        
    }
    
    // handleOnClick
    handleOnClick() {
        this.setState({ clicked: true })
    }

    render() {
        return (
            <Fragment>
                <img onClick={this.handleOnClick} value={this.state.clicked} style={style.img} key={this.props.title} src={this.props.image} alt={this.props.title}/>
            </Fragment>
        )
    }
}

export default Card;