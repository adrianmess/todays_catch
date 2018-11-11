import React from 'react';

class Order extends React.Component{
  render() {
    const orderIds = Object.keys(this.props.order)
    return(
      <div className="order-wrap">
        <h2>Order!!</h2>
        <div>
          {orderIds}
        </div>
      </div>
    )
  }
}

export default Order
