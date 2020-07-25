import React from "react";

import "./common.scss";

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-container">
        <h1>Shopping Cart Application</h1>
      </div>
    );
  }
}

export default HeaderComponent;
