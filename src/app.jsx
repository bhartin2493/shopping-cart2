import React from "react";
import ReactDOM from "react-dom";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

//import components
import HeaderComponent from "../src/modules/shopping-cart/header-component.jsx";
import FooterComponent from "../src/modules/shopping-cart/footer-component.jsx";
import BodyComponent from "../src/modules/shopping-cart/body-component.jsx";

//scss import
import "font-awesome/css/font-awesome.min.css";
import "./app.scss";

//import reducer

import cartReducer from "../src/modules/shopping-cart/reducer.js";

const reducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(reducer);

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <div className="header-class">
          <HeaderComponent />
        </div>
        <div className="body-class">
          <BodyComponent />
        </div>
        <div className="footer-class">
          <FooterComponent />
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
