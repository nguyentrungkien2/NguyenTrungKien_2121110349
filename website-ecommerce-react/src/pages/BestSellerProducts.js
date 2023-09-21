import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

class BestSellerProducts extends Component {
    render() {
        return (
            <section id="product1" class="section-p1" >
                <h2> Các loại sản phẩm</h2>
                <p> Các mẫu thiết kế hè mới</p>
                <div className="pro-container">
                    <div className="pro">
                        <img src={require("../assets/img/products/f1.jpg")}/>
                        <div className="des">
                            <span>adidas</span>
                            <h5> Áo thun tay ngắn hoạt hình</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>

                            </div>
                            <h4>200.000 vnđ</h4>
                        </div>
                        <div className="cart">
                   <a href="#"><FontAwesomeIcon icon={faCartPlus} className="cart-icon"/></a>
                   </div>                    </div>

                    <div className="pro">
                        <img src={require("../assets/img/products/f2.jpg")} />
                        <div className="des">
                            <span>adidas</span>
                            <h5> Áo thun tay ngắn hoạt họa</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>

                            </div>
                            <h4>200.000 vnđ</h4>
                        </div>
                        <div className="cart">
                   <a href="#"><FontAwesomeIcon icon={faCartPlus} className="cart-icon"/></a>
                   </div>                    </div>
                    <div className="pro">
                        <img src={require("../assets/img/products/f3.jpg")}/>
                        <div className="des">
                            <span>adidas</span>
                            <h5> Áo thun tay ngắn hoạt họa</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>

                            </div>
                            <h4>200.000 vnđ</h4>
                        </div>
                        <div className="cart">
                   <a href="#"><FontAwesomeIcon icon={faCartPlus} className="cart-icon"/></a>
                   </div>                    </div>
                    <div className="pro">
                        <img src={require("../assets/img/products/f4.jpg")} />
                        <div className="des">
                            <span>adidas</span>
                            <h5> Áo thun tay ngắn hoa đào</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>

                            </div>
                            <h4>200.000 vnđ</h4>
                        </div>
                        <div className="cart">
                   <a href="#"><FontAwesomeIcon icon={faCartPlus} className="cart-icon"/></a>
                   </div>                    </div>
                    <div className="pro">
                        <img src={require("../assets/img/products/f5.jpg")} />
                        <div className="des">
                            <span>adidas</span>
                            <h5> Áo thun tay ngắn hoạt họa</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>

                            </div>
                            <h4>200.000 vnđ</h4>
                        </div>
                        <div className="cart">
                   <a href="#"><FontAwesomeIcon icon={faCartPlus} className="cart-icon"/></a>
                   </div>                    </div>
                    <div className="pro">
                        <img src={require("../assets/img/products/f6.jpg")}/>
                        <div className="des">
                            <span>adidas</span>
                            <h5> Áo tay dài basic</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>

                            </div>
                            <h4>200.000 vnđ</h4>
                        </div>
                        <div className="cart">
                   <a href="#"><FontAwesomeIcon icon={faCartPlus} className="cart-icon"/></a>
                   </div>                    </div>
                    <div className="pro">
                        <img src={require("../assets/img/products/f7.jpg")}/>
                        <div className="des">
                            <span>adidas</span>
                            <h5> quần thun dài hoạt họa</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>

                            </div>
                            <h4>200.000 vnđ</h4>
                        </div>
                        <div className="cart">
                   <a href="#"><FontAwesomeIcon icon={faCartPlus} className="cart-icon"/></a>
                   </div>                    </div>
                    <div className="pro">
                        <img src={require("../assets/img/products/f8.jpg")}/>
                        <div className="des">
                            <span>adidas</span>
                            <h5> quần thun rộng cổ hoạt họa</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>

                            </div>
                            <h4>200.000 vnđ</h4>
                        </div>
                        <div className="cart">
                   <a href="#"><FontAwesomeIcon icon={faCartPlus} className="cart-icon"/></a>
                   </div>                    </div>
                </div>
            </section>);
    }
}

export default BestSellerProducts;