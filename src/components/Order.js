import React from "react";
import PropTypes from 'prop-types';
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    order: PropTypes.object,
    removeFromOrder: PropTypes.func
  }
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";
    //make sure fish is loaded before we continue
    if (!fish) return null;

    if (!isAvailable) {
      return (
        <CSSTransition
          classNames="order"
          key={key}
          timeout={{ enter: 500, exit: 500 }}
        >
          <li key={key}>
            {" "}
            Sorry {fish ? fish.name : "fish"} is no longer available{" "}
          </li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition
        classNames="order"
        key={key}
        timeout={{ enter: 500, exit: 500 }}
      >
        <li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
              {/* key use 'count' - by doing that you tell CSS TransitionGroup to make two
             seperate span elements so if were going 19>20 it's going to aniumate the 19
             out and 20 in*/}
              <CSSTransition
                classNames="count"
                key={count}
                // double curley brackets, first bracket tells react it's javascript
                // second is that it's an object literal
                // alternative for:
                // const settings = {enter: 500, exit: 500}
                // timeout = {settings}
                timeout={{ enter: 500, exit: 500 }}
              >
                <span>{count} </span>
              </CSSTransition>
            </TransitionGroup>
            lbs {fish.name}
            {formatPrice(count * fish.price)}
            <button onClick={() => this.props.removeFromOrder(key)}>
              &times;
            </button>
          </span>
        </li>
      </CSSTransition>
    );
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order!!</h2>
        <div>
          <TransitionGroup component="ul" className="order">
            {orderIds.map(this.renderOrder)}
          </TransitionGroup>

          <div className="total">
            Total:
            <strong>{formatPrice(total)}</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
