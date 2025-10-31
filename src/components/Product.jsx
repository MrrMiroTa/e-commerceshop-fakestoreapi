import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import "./style.css";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price } = product;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"> 
      <div className="card border-0 shadow-sm h-100">
        {/* Product Image */}
        <div className="position-relative">
          <img
            src={image}
            className="card-img-top p-3"
            alt={title}
            style={{ maxHeight: "200px", objectFit: "contain" }}
          />
          <div className="position-absolute top-0 end-0 p-2 d-flex flex-column">
            {/* Add to Cart Button */}
            <button
              className="btn btn-success mb-2 rounded-square shadow"
              onClick={() => addToCart(product, id)}
              style={{ width: "40px", height: "40px" }}
            >
              <BsPlus className="text-white text-center" />
            </button>
            {/* View Details Button */}
            <Link
              to={`/product/${id}`}
              className="btn btn-light border rounded-circle shadow"
              style={{ width: "40px", height: "40px" }}
            >
              <BsEyeFill className="text-black" />
            </Link>
          </div>
        </div>
        {/* Product Details */}
        <div className="card-body text-center">
          <small className="text-muted text-uppercase">{category}</small>
          <h5 className="card-title mt-2">
            <Link
              to={`/product/${id}`}
              className="text-dark text-decoration-none"
            >
              {title}
            </Link>
          </h5>
          <p className="card-text fw-bold text-primary">$ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
