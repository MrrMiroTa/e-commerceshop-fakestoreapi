import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 py-5">
      <div className="container">
        <div className="row text-center text-lg-start">
          {/* Logo and Description */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h2 className="h4 text-white fw-bold">Mrr. Uxita 🐒</h2>
            <p className="mt-2">
              Your trusted source for quality products and great service.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h3 className="h5 text-white fw-bold">Quick Links</h3>
            <ul className="list-unstyled mt-3">
              <li>
                <a href="/about" className="text-light text-decoration-none hover-underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="text-light text-decoration-none hover-underline">
                  Products
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none hover-underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h3 className="h5 text-white fw-bold">Contact Us</h3>
            <ul className="list-unstyled mt-3">
              <li>Phone: +855 61 784 856</li>
              <li>Email: mrrmirota@gmail.com</li>
              <li>Address: 153 Phnom Penh, Cambodia</li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h3 className="h5 text-white fw-bold">Follow Us</h3>
            <div className="d-flex justify-content-center justify-content-lg-start gap-3 mt-3">
              <a href="https://www.facebook.com/share/1DJS3izXch/" className="text-light">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://x.com/makato55?t=7ncwzKNYuCFrkQnw4qytxQ&s=09" className="text-light">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/mrr.uzita/profilecard/?igsh=YWFyZWdnb2duejFy"
                className="text-light"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://www.linkedin.com/in/doeun-sophors-9a5835285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-light"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-top border-light pt-4 mt-4 text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Mrr. Uxita 🐒. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
