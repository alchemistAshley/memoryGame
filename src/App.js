import React, { Component, Fragment } from 'react';
import NavBar from './components/NavBar';
import Card from './components/Card';
import cards from './travel.json';

class App extends Component {
  state = {
    cards: [],
    currentScore: 0,
    highScore: 0
  }

  componentDidMount() {
    this.setState({ cards })
  }

  onClick() {
    // check if this.state.card === false, then add 1 to score and randomize. if false, reset game and randomize
  }

  // randomShuffle
  // handleScore 

  render() {
    return (
      <Fragment>
          <NavBar />
          <div className="container row center-align">
            {this.state.cards.map(card => {
              return (
                <Card 
                key={card.title}
                image={card.image}
                // handleOnClick
                />
              )
            })}
          </div>
      </Fragment>
    );
  }
}

export default App;
