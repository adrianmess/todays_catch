import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {

  state = {
    fishes:{},
    order:{}
  };

  addFish = fish => {
    // 1. take a copy of the exsiting state
    const fishes = { ...this.state.fishes };
    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the fishes object to State
    this.setState({ fishes : fishes });
}

render(){
  return (
    <div className="catch-of-the-day">
      <div className="menu">
        <Header tagline="adrian is cool"/>
      </div>
      <Inventory addFish={this.addFish} />
      <Order />
    </div>
  )
}
}

export default App;
