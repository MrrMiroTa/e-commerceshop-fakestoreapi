import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";

import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  // destructure item
  const { id, title, image, price, amount } = item;

  return (
    <div className="d-flex gap-4 py-2 px-3 border-bottom w-100 text-secondary">
      <div className="d-flex align-items-center w-100 min-vh-100">
        {/* image */}
        <Link to={`/product/${id}`} className="d-block">
          <img className="img-fluid" src={image} alt="" style={{ maxWidth: '80px' }} />
        </Link>
        <div className="d-flex flex-column w-100 ms-3">
          {/* title and remove icon */}
          <div className="d-flex justify-content-between mb-2">
            {/* title */}
            <Link
              to={`/product/${id}`}
              className="text-muted text-decoration-none text-truncate"
              style={{ maxWidth: '240px' }}
            >
              {title}
            </Link>
            {/* remove icon */}
            <div
              onClick={() => removeFromCart(id)}
              className="text-danger cursor-pointer"
            >
              <IoMdClose className="fs-4" />
            </div>
          </div>
          <div className="d-flex gap-2 align-items-center h-auto">
            {/* quantity */}
            <div className="d-flex flex-row align-items-center border px-2 py-1 rounded">
              <div
                onClick={() => decreaseAmount(id)}
                className="d-flex justify-content-center align-items-center cursor-pointer"
              >
                <IoMdRemove />
              </div>
              <div className="d-flex justify-content-center align-items-center px-2">
                {amount}
              </div>
              <div
                onClick={() => increaseAmount(id)}
                className="d-flex justify-content-center align-items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className="d-flex justify-content-center align-items-center flex-grow-1">
              ${price}
            </div>
            {/* final price */}
            <div className="d-flex justify-content-end align-items-center flex-grow-1 text-primary font-weight-bold">
              ${parseFloat(price * amount).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
