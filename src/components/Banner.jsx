import React from "react";
import back from "../image/banner-bg.png"
function Banner() {
  return (
<>
  {/* banner section start */}
  <div className="banner_section layout_padding" style={{ backgroundImage: `url(${back})`, backgroundSize: "cover", backgroundPosition: "center" }}>
    <div className="container">
      <div id="my_slider" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="banner_taital">
                  Get Start <br />
                  Your favriot shoping
                </h1>
                <div className="buynow_bt">
                  <a href="#">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="banner_taital">
                  Get Start <br />
                  Your favriot shoping
                </h1>
                <div className="buynow_bt ">
                  <a href="/product">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="banner_taital">
                  Get Start <br />
                  Your favriot shoping
                </h1>
                <div className="buynow_bt">
                  <a href="/product">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#my_slider"
          role="button"
          data-slide="prev"
        >
          <i className="fa fa-angle-left" />
        </a>
        <a
          className="carousel-control-next"
          href="#my_slider"
          role="button"
          data-slide="next"
        >
          <i className="fa fa-angle-right" />
        </a>
      </div>
    </div>
  </div>
  {/* banner section end */}
  {/* banner bg main end */}
</>

  );
}

export default Banner;
