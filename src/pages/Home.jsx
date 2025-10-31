import React, { useContext, useRef } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Banner from "../components/Banner";

const Home = () => {
  // Get products from product context
  const { products } = useContext(ProductContext);

  // console.log(products);

  const productSectionRef = useRef(null);

  const scrollToProducts = () => {
    productSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  // Filter products by category
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" ||
      item.category === "women's clothing" ||
      item.category === "jewelery" ||
      item.category === "electronics" 
    );
  });

  return (
    <div>
      <Banner scrollToProducts={scrollToProducts} />
      <section className="py-5 ">
        <div
          className="container mt-4"
          ref={productSectionRef}
          style={{
            padding: "20px",
            marginTop: "50px",
            backgroundColor: "#f8f8f8",
          }}
        >
          <h1 className="text-3xl font-semibold mb-10 text-center pt-5 text-bold" style={{paddingTop:"20px"}}>
            ALL PRODUCTS
          </h1>
          <div className="row">
            {filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
