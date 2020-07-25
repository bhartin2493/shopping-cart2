import React from "react";
import { connect } from "react-redux";

class CartComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let addedItems =
      this.props.cartItems && this.props.cartItems.length ? (
        this.props.cartItems.map((item) => {
          return (
            <li className="collection-item avatar" key={item.id}>
              <div className="item-img">
                <img src={item.img} alt={item.img} className="" />
              </div>

              <div className="item-desc">
                <span className="title">
                  {item.title}
                  <span>{item.desc}</span>
                </span>
                <div className="price-quantity">
                  <b>Price: ₹{item.price}</b>
                </div>

                <div className="add-remove">
                  <i
                    class="fa fa-arrow-circle-up"
                    aria-hidden="true"
                    onClick={() => {
                      this.props.onClickAddQuantity(item.id);
                    }}
                  ></i>
                  <span>
                    <b>Quantity: {item.quantity}</b>
                  </span>
                  <i
                    class="fa fa-arrow-circle-down"
                    aria-hidden="true"
                    onClick={() => {
                      this.props.onClickDecreaseQuantity(item.id);
                    }}
                  ></i>
                </div>
                <button
                  className="btn btn-default button-class"
                  onClick={() => {
                    this.props.onClickRemoveItem(item.id);
                  }}
                >
                  Remove Item From Cart
                </button>
              </div>
            </li>
          );
        })
      ) : (
        <div className="empty-cart">
          <img src="../assets/empty-cart2.png" alt="Cart empty"></img>
        </div>
      );
    return (
      <div className="cart-items">
        {addedItems.length > 0 ? <h3>You have ordered:</h3> : ""}
        <ul className="collection">{addedItems}</ul>
      </div>
    );
  }
}

export default CartComponent;
