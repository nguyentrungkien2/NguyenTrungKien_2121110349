import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

class NewProducts extends Component {
    render() {
        return (<section id="product1" class="section-p1">
            <h2> Sản phẩm mới</h2>
            <p> Các mẫu thiết kế hè mới</p>
            <div class="pro-container">
                <div class="pro">
                    <img src={require("../assets/img/products/n1.jpg")} alt="" />
                    <div class="des">
                        <span>adidas</span>
                        <h5> Áo sơ mi tay dài </h5>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>

                        </div>
                        <h4>200.000 vnđ</h4>
                    </div>
                    <div className="cart">
                   <a href="#"><FontAwesomeIcon icon={faCartPlus} className="cart-icon"/></a>
                   </div>                </div>

                <div class="pro">
                    <img src={require("../assets/img/products/n2.jpg")} alt="" />
                    <div class="des">
                        <span>adidas</span>
                        <h5> Áo sơ mi tay dài dọc</h5>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>

                        </div>
                        <h4>200.000 vnđ</h4>
                    </div>
                    <div className="cart">
                   <a href="#"><FontAwesomeIcon icon={faCartPlus} className="cart-icon"/></a>
                   </div>                </div>
                <div class="pro">
                    <img src={require("../assets/img/products/n3.jpg")} alt="" />
                    <div class="des">
                        <span>adidas</span>
                        <h5> Áo sơ mi tay dài trắng</h5>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>

                        </div>
                        <h4>200.000 vnđ</h4>
                    </div>
                    <div className="cart">
                   <a href="#"><FontAwesomeIcon icon={faCartPlus} className="cart-icon"/></a>
                   </div>                </div>
                <div class="pro">
                    <img src={require("../assets/img/products/n4.jpg")} alt="" />
                    <div class="des">
                        <span>adidas</span>
                        <h5> Áo sơ mi tay dài họa tiết</h5>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>

                        </div>
                        <h4>200.000 vnđ</h4>
                    </div>
                    <div className="cart">
                   <a href="#"><FontAwesomeIcon icon={faCartPlus} className="cart-icon"/></a>
                   </div>                </div>
                <div class="pro">
                    <img src={require("../assets/img/products/n5.jpg")} alt="" />
                    <div class="des">
                        <span>adidas</span>
                        <h5> Áo sơ mi tay dài jean</h5>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>

                        </div>
                        <h4>200.000 vnđ</h4>
                    </div>
                    <div className="cart">
                   <a href="#"><FontAwesomeIcon icon={faCartPlus} className="cart-icon"/></a>
                   </div>                </div>
                <div class="pro">
                    <img src={require("../assets/img/products/n6.jpg")} alt="" />
                    <div class="des">
                        <span>adidas</span>
                        <h5> Quần đùi kaki</h5>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>

                        </div>
                        <h4>200.000 vnđ</h4>
                    </div>
                    <div className="cart">
                   <a href="#"><FontAwesomeIcon icon={faCartPlus} className="cart-icon"/></a>
                   </div>                </div>
                <div class="pro">
                    <img src={require("../assets/img/products/n7.jpg")} alt="" />
                    <div class="des">
                        <span>adidas</span>
                        <h5> Áo sơ mi tay dài nâu kaki</h5>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>

                        </div>
                        <h4>200.000 vnđ</h4>
                    </div>
                    <div className="cart">
                   <a href="#"><FontAwesomeIcon icon={faCartPlus} className="cart-icon"/></a>
                   </div>                </div>
                <div class="pro">
                    <img src={require("../assets/img/products/n8.jpg")} alt="" />
                    <div class="des">
                        <span>adidas</span>
                        <h5> Áo sơ mi tay ngắn</h5>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>

                        </div>
                        <h4>200.000 vnđ</h4>
                    </div>
                    <div className="cart">
                   <a href="#"><FontAwesomeIcon icon={faCartPlus} className="cart-icon"/></a>
                   </div>                </div>
            </div>
        </section>);
    }
}

export default NewProducts;