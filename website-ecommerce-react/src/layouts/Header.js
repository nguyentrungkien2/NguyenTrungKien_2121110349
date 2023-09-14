import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
class Header extends Component {
  render() {
    return (
      <section id="header">
        <a href="#">
          <img className="logo" src={require("../assets/img/logo.png")} />
        </a>
        <div>
          <ul id="navbar">
            <li>
              <a className="active" href="index.html">
                Trang chủ
              </a>
            </li>
            <li>
              <a href="shop.html">Gian hàng</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>
              <a href="about.html">Thông tin</a>
            </li>
            <li>
              <a href="contact.html">Liên hệ</a>
            </li>
            <li id="lg-bag">
              <a href="cart.html">
                <FontAwesomeIcon icon={faShoppingCart}/>
              </a>
            </li>
            <a href="#" id="close">
              <i className="fas fa-times"></i>
            </a>
          </ul>
        </div>
        <div id="mobile">
          <a href="cart.html">
            <i className="fas fa-shopping-bag"></i>
          </a>
          <i id="bar" className="fas fa-outdent"></i>
        </div>
      </section>
    );
  }
}

export default Header;