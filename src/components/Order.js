import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component{
  render() {
    const orderIds = Object.keys(this.props.order)
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if(isAvailable) {
        return prevTotal + (count * fish.price);
      }
      return prevTotal;
    }, 0)
    return(
      <div className="order-wrap">
        <h2>Order!!</h2>
        <div>
          <ul>
            {orderIds.map(key => <li key={key}>{key}</li>)}
            </ul>

          <div className="total">
            Total:
            <strong>{formatPrice(total)}</strong>
          </div>
        </div>
      </div>
    )
  }
}

export default Order
