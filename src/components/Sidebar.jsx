import React, { useContext, useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import "./style.css";
import CartItem from "./CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import PaypalCheckoutButton from "./PaypalCheckoutButton";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false); // State to toggle checkout UI

  const product = {
    description: "Your Cart Purchase",
    price: total.toFixed(2), // Use cart's total price for PayPal
  };

  return (
    <div 
      className={`sidebar bg-white shadow position-fixed top-0 ${
        isOpen ? "end-0" : "end-100"
      } transition-all`}
      style={{
        backgroundColor:"",
        height: "100vh",
        width: "100%",
        maxWidth: "30vw",
        zIndex: 1050,
        transition: "bottom 0.3s ease-in-out",
      }}
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center border-bottom py-3 px-4">
        <h6 className="text-uppercase fw-bold mb-0">
          {showCheckout ? "Checkout" : `Shopping Bag (${itemAmount})`}
        </h6>
        <button
          className="btn p-0 d-flex align-items-center justify-content-center"
          onClick={() => {
            if (showCheckout) {
              setShowCheckout(false); // Go back to the cart
            } else {
              handleClose();
            }
          }}
        >
          <IoMdArrowForward size={24} />
        </button>
      </div>

      {/* Cart Items or Checkout */}
      <div className="px-4">
        {showCheckout ? (
          // PayPal Checkout UI
          <div className="paypal-checkout">
            <p className="text-center mt-4">
              Complete your purchase using PayPal.
            </p>
            <div className="paypal-button-container">
              <PaypalCheckoutButton product={product} />
            </div>
          </div>
        ) : (
          // Cart Items
          <>
            <div
              className="overflow-auto border-bottom"
              style={{ height: "50vh" }}
            >
              {cart.length > 0 ? (
                cart.map((item) => <CartItem item={item} key={item.id} />)
              ) : (
                <p className="text-center mt-4">Your cart is empty.</p>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-3">
              {/* Subtotal & Clear Cart */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="fw-bold">
                  <span className="me-2">Subtotal:</span>${total.toFixed(2)}
                </div>
                <button
                  className="btn btn-danger rounded-circle d-flex align-items-center justify-content-center"
                  onClick={clearCart}
                  style={{ width: "48px", height: "48px" }}
                >
                  <FiTrash2 size={20} className="text-white" />
                </button>
              </div>

              {/* Buttons */}
              <button
                className="btn btn-primary w-100 text-uppercase fw-semibold text-white"
                onClick={() => setShowCheckout(true)} // Show PayPal checkout
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
