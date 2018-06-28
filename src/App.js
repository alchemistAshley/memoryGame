import React, { Component, Fragment } from 'react';
import NavBar from './components/NavBar';
import Card from './components/Card';
import cards from './travel.json';

class App extends Component {
  state = {
    cards: []
  }

  componentDidMount() {
    this.setState({ cards })
  }

  // handleOnClick (call randomShuffle & handleScore)
  // randomShuffle
  // handleScore 

  render() {
    return (
      <Fragment>
          <NavBar />
          <div className="container row">
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
