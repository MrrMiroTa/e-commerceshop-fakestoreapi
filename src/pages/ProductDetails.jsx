import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the product based on the ID
    const foundProduct = products.find((item) => item.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate("/products"); // Redirect if product is not found
    }
    setLoading(false);
  }, [id, products, navigate]);

  // Loading state
  if (loading) {
    return (
      <section className="d-flex vh-100 justify-content-center align-items-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </section>
    );
  }

  // If product is not found
  if (!product) {
    return (
      <section className="d-flex vh-100 justify-content-center align-items-center">
        <span>
          Product not found. Go back to the <a href="/products">product list</a>.
        </span>
      </section>
    );
  }

  const { title, price, description, image } = product;

  return (
    <section className="d-flex align-items-center py-5" style={{ minHeight: "100vh" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Product Image */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={image}
              alt={title}
              className="img-fluid rounded shadow-sm"
              style={{ maxWidth: "300px" }}
            />
          </div>

          {/* Product Details */}
          <div className="col-md-6">
            <h1 className="h3 mb-3">{title}</h1>
            <h2 className="text-danger mb-4">${price}</h2>
            <p className="mb-4">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="btn btn-primary btn-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
