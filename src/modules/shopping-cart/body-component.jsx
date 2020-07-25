import React from "react";
import { connect } from "react-redux";
import "./common.scss";

import AddItemComponent from "./add-items-component.jsx";
import CartComponent from "./cart-component.jsx";

//importing actions
import {
  addToCartSuccess,
  deleteFromCartSuccess,
  increaseQuantitySuccess,
  decreaseQuantitySuccess,
} from "./actions.js";

class BodyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addedItems: [],
    };
  }

  onClickAddItem = (id) => {
    console.log("Item in body:", id);
    this.props.addToCartSuccess(id);
  };

  onClickRemoveItem = (id) => {
    this.props.deleteFromCartSuccess(id);
  };

  onClickAddQuantity = (id) => {
    this.props.increaseQuantitySuccess(id);
  };

  onClickDecreaseQuantity = (id) => {
    this.props.decreaseQuantitySuccess(id);
  };

  render() {
    return (
      <div className="body-container">
        <AddItemComponent onClickAddItem={this.onClickAddItem} />
        <CartComponent
          cartItems={this.props.cart.addedItems}
          onClickRemoveItem={this.onClickRemoveItem}
          onClickAddQuantity={this.onClickAddQuantity}
          onClickDecreaseQuantity={this.onClickDecreaseQuantity}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartSuccess: (id) => dispatch(addToCartSuccess(id)),
  deleteFromCartSuccess: (id) => dispatch(deleteFromCartSuccess(id)),
  increaseQuantitySuccess: (id) => dispatch(increaseQuantitySuccess(id)),
  decreaseQuantitySuccess: (id) => dispatch(decreaseQuantitySuccess(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BodyComponent);
