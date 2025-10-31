import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import logo from "../image/U.png";
import eng from "../image/flag-uk.png";
import cam from "../image/cambodia.png";
import "./style.css";

function Header({ setLogin }) {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount, addToCart } = useContext(CartContext);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch products by category and update URL
  const fetchProductsByCategory = async (category) => {
    try {
      // Update the URL in the browser
      window.history.pushState(null, "", `?category=${category}`);

      // Fetch products based on selected category
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await response.json();
      setProducts(data); // Update the products state with fetched data
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const toggleNav = () => {
    setIsSidenavOpen(!isSidenavOpen);
  };

  return (
    <>
      <div className="header_section_top">
        <div className="row">
          <div className="col-sm-12">
            <div className="custom_menu">
              <ul>
                <li>
                  <a href="#">Best Sellers</a>
                </li>
                <li>
                  <a href="#">Gift Ideas</a>
                </li>
                <li>
                  <a href="#">New Releases</a>
                </li>
                <li>
                  <a href="#">Today's Deals</a>
                </li>
                <li>
                  <a href="#">Customer Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="logo_section">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            {" "}
            <div className=" col-12 col-sm-12 col-md-4 col-lg-3">
              <div className="logo align-items-center">
                <a href="/home">
                  <img src={logo} alt="Logo" />
                </a>
                <h5 id="logo" className="pt-2">UziTa Shop</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header_section">
        <div className="container">
          <div className="row align-items-center">
            {/* Sidebar Toggle */}
            <div className="col-lg-1 col-md-1 col-2">
              <button
                className="toggle-icon fs-4 btn btn-black "
                onClick={toggleNav}
              >
                &#9776;
              </button>
            </div>

            {/* Category Dropdown */}
            <div className="col-lg-2 col-md-3 col-4">
              <div className="dropdown cursor-pointer">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="categoryDropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  All Category
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="categoryDropdown"
                >
                  {categories.map((category, index) => (
                    <a
                      key={index}
                      className="dropdown-item"
                      onClick={() => fetchProductsByCategory(category)}
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="col-lg-5 col-md-4 col-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Products....."
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    style={{
                      backgroundColor: "#f26522",
                      borderColor: "#f26522",
                    }}
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Language Selector */}
            <div className="col-lg-2 col-md-2 d-none d-md-flex">
              <div className="lang_box">
                <a
                  href="#"
                  title="Language"
                  className="nav-link"
                  data-toggle="dropdown"
                  aria-expanded="true"
                >
                  <img src={eng} alt="flag" className="mr-2" />
                  English
                  <i className="fa fa-angle-down ml-2"></i>
                </a>
                <div className="dropdown-menu">
                  <a href="#" className="dropdown-item">
                    <img src={cam} className="mr-2" alt="flag" />
                    Khmer
                  </a>
                </div>
              </div>
            </div>

            {/* Cart and Account */}
            <div className="col-lg-2 col-md-2 col-3 d-flex justify-content-end align-items-center">
              <div className="position-relative">
                <BsBag
                  className="fs-3 cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                />
                <div
                  className="position-absolute top-0 start-100 translate-middle bg-danger text-white rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "18px",
                    height: "18px",
                    fontSize: "12px",
                  }}
                >
                  {itemAmount}
                </div>
              </div>
              {/* Account section */}
              <button
                className="ml-3 d-flex align-items-center "
                onClick={() => setLogin(true)}
              >
                <i className="fa fa-user h3  text-dark" aria-hidden="true"></i>{" "}
                {/* Increase size with fs-3 */}
                <span className="padding_10 fw-bold text-dark p-b-2">
                  Sign Up
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container product-list bg-blue py-4">
        {loading ? (
          <div className="text-center">
            <p>Loading products...</p>
          </div>
        ) : (
          <div className="row">
            {products.map((product) => (
              <div
                key={product.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              >
                <div className="card border-0 shadow-sm h-100">
                  <img
                    className="card-img-top p-3"
                    src={product.image}
                    alt={product.title}
                    style={{ maxHeight: "200px", objectFit: "contain" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h6
                      className="card-title text-truncate"
                      title={product.title}
                    >
                      {product.title}
                    </h6>
                    <p className="card-text fw-bold">
                      ${product.price.toFixed(2)}
                    </p>
                    <button
                      className="btn btn-success mt-auto rounded shadow"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
