import Image1 from "../../../assets/tshirt1.png";
import Image2 from "../../../assets/tshirt2.jpg";
import Image3 from "../../../assets/tshirt3.jpg";
import Image4 from "../../../assets/tshirt4.jpg";
import Image5 from "../../../assets/tshirt5.jpeg";
import Image6 from "../../../assets/tshirt6.jpg";
import Image7 from "../../../assets/tshirt7.png";
import Image8 from "../../../assets/tshirt8.jpg";

import {
  ADD_TO_CART_SUCCESS,
  DELETE_FROM_CART_SUCCESS,
  INCREASE_QUANTITY_SUCCESS,
  DECREASE_QUANTITY_SUCCESS,
} from "./action-types.js";

const initialState = {
  items: [
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
  ],
  addedItems: [],
  total: 0,
};
const cartReducer = (state = initialState, action) => {
  // Add items component
  if (action.type === ADD_TO_CART_SUCCESS) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find((item) => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price,
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
  }
  if (action.type === DELETE_FROM_CART_SUCCESS) {
    let itemToRemove = state.addedItems.find((item) => action.id === item.id);
    let new_items = state.addedItems.filter((item) => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
    };
  }
  //Cart Component
  if (action.type === INCREASE_QUANTITY_SUCCESS) {
    let addedItem = state.items.find((item) => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
    };
  }
  if (action.type === DECREASE_QUANTITY_SUCCESS) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter((item) => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
  } else {
    return state;
  }
};

export default cartReducer;
