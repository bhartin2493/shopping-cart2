import React from "react";

import Image1 from "../../../assets/tshirt1.png";
import Image2 from "../../../assets/tshirt2.jpg";
import Image3 from "../../../assets/tshirt3.jpg";
import Image4 from "../../../assets/tshirt4.jpg";
import Image5 from "../../../assets/tshirt5.jpeg";
import Image6 from "../../../assets/tshirt6.jpg";
import Image7 from "../../../assets/tshirt7.png";
import Image8 from "../../../assets/tshirt8.jpg";

class AddItemComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = [
      {
        id: 1,
        title: "Winter body",
        desc: "TShirt 1",
        price: 110,
        img: Image1,
      },
      {
        id: 2,
        title: "Adidas",
        desc: "TShirt 2",
        price: 80,
        img: Image2,
      },
      {
        id: 3,
        title: "Vans",
        desc: "TShirt 3",
        price: 120,
        img: Image3,
      },
      {
        id: 4,
        title: "White",
        desc: "TShirt 4",
        price: 260,
        img: Image4,
      },
      {
        id: 5,
        title: "Cropped-sho",
        desc: "TShirt 5",
        price: 160,
        img: Image5,
      },
      {
        id: 6,
        title: "Blues",
        desc: "TShirt 6",
        price: 90,
        img: Image6,
      },
      {
        id: 7,
        title: "Cropped-sho",
        desc: "TShirt 7",
        price: 160,
        img: Image7,
      },
      {
        id: 8,
        title: "Blues",
        desc: "TShirt 8",
        price: 90,
        img: Image8,
      },
    ].map((item) => {
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <img src={item.img} alt={item.title} />
            <div className="card-title">
              {item.title}
              <span>₹{item.price}</span>
            </div>
          </div>

          <div className="card-content">
            <button
              className="btn btn-default"
              onClick={() => {
                this.props.onClickAddItem(item.id);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      );
    });
    return <div className="items-list">{items}</div>;
  }
}

export default AddItemComponent;
