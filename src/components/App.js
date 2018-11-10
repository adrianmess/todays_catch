import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {

  State = {
        fishes:{},
        order:{}
  };

  addFish = fish => {
    console.log("Adding a fish!");
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
