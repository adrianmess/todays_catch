import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {

  state = {
    fishes:{},
    order:{}
  };

  componentDidMount(){
    // alt way
    // const { params } = this.props.match;
    // this.ref = base.syncState(`${params.storeId}/fishes`, {

    //first reinstate our local storage
    const localStorageRef = localStorage.getItem(this.props.match.params.storeId);
    if(localStorageRef){
      this.setState({ order: JSON.parse(localStorageRef) })
    }
    //syncing with firebase
    this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
  }

  componentDidUpdate(){
    console.log(this.state.order);
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));

  };

  componentWillUnmount(){
    base.removeBinding(this.ref);
  };

  addFish = fish => {
    // 1. take a copy of the exsiting state
    const fishes = { ...this.state.fishes };
    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the fishes object to State
    this.setState({ fishes : fishes });
  }

  loadSampleFishes = () => {
    this.setState({fishes : sampleFishes});
  }

  addToOrder = (key) => {
    // 1. take a copy of this.state
    const order = { ...this.state.order };
    // 2. Either add to the order, or update the number in our Order
    order[key] = order[key] + 1 || 1;
    // 3. call setState to update our state object
    this.setState({ order });
  }

  render(){
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="adrian is cool"/>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => <Fish
              key={key}
              index={key}
              details={this.state.fishes[key]}
              addToOrder={this.addToOrder}
              />)}
            </ul>

          </div>
          <Inventory
            addFish={this.addFish}
            loadSampleFishes={this.loadSampleFishes}
            fish={this.state.fishes}
            />
          <Order fishes={this.state.fishes} order={this.state.order} />
        </div>
      )
    }
  }

  export default App;
