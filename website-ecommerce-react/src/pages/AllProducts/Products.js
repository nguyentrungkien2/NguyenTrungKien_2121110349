import { faArrowRight, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";

class Products extends Component{
    render(){
        return(
            <>
            <section id="page-header">
            <h2> #Tại nhà</h2>
            <p> Mua thêm cùng với ưu đãi lên tới 70%</p>
        </section>
    
        {/* <!-- -------------------------------------- --> */}
        <section id="product1" className="section-p1">
    
            <div className="pro-container">
                <div className="pro" onclick="window.location.href='sproduct.html'">
                    <img src={require("../../assets/img/products/f1.jpg")} alt=""/>
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
                   </div>                </div>
    
                <div className="pro">
                <img src={require("../../assets/img/products/f2.jpg")} alt=""/>

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
                   </div>                </div>
                <div className="pro">
                <img src={require("../../assets/img/products/f3.jpg")} alt=""/>
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
                   </div>
                </div>
                <div className="pro">
                <img src={require("../../assets/img/products/f4.jpg")} alt=""/>
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
                   </div>                </div>
                <div className="pro">
                <img src={require("../../assets/img/products/f5.jpg")} alt=""/>
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
                   </div>                </div>
                <div className="pro">
                <img src={require("../../assets/img/products/f6.jpg")} alt=""/>
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
                   </div>                </div>
                <div className="pro">
                <img src={require("../../assets/img/products/f7.jpg")} alt=""/>
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
                   </div>                </div>
                <div className="pro">
                <img src={require("../../assets/img/products/f8.jpg")} alt=""/>
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
                   </div>                </div>
                <div className="pro">
                <img src={require("../../assets/img/products/n1.jpg")} alt=""/>
                    <div className="des">
                        <span>adidas</span>
                        <h5> Áo sơ mi tay dài </h5>
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
                   </div>                </div>
    
                <div className="pro">
                <img src={require("../../assets/img/products/n2.jpg")} alt=""/>
                    <div className="des">
                        <span>adidas</span>
                        <h5> Áo sơ mi tay dài dọc</h5>
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
                   </div>                </div>
                <div className="pro">
                <img src={require("../../assets/img/products/n3.jpg")} alt=""/>
                    <div className="des">
                        <span>adidas</span>
                        <h5> Áo sơ mi tay dài trắng</h5>
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
                   </div>                </div>
                <div className="pro">
                <img src={require("../../assets/img/products/n4.jpg")} alt=""/>
                    <div className="des">
                        <span>adidas</span>
                        <h5> Áo sơ mi tay dài họa tiết</h5>
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
                   </div>                </div>
                <div className="pro">
                <img src={require("../../assets/img/products/n5.jpg")} alt=""/>
                    <div className="des">
                        <span>adidas</span>
                        <h5> Áo sơ mi tay dài jean</h5>
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
                   </div>                </div>
                <div className="pro">
                <img src={require("../../assets/img/products/n6.jpg")} alt=""/>
                    <div className="des">
                        <span>adidas</span>
                        <h5> Quần đùi kaki</h5>
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
                   </div>                </div>
                <div className="pro">
                <img src={require("../../assets/img/products/n7.jpg")} alt=""/>
                    <div className="des">
                        <span>adidas</span>
                        <h5> Áo sơ mi tay dài nâu kaki</h5>
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
                   </div>                </div>
                <div className="pro">
                <img src={require("../../assets/img/products/n8.jpg")} alt=""/>
                    <div className="des">
                        <span>adidas</span>
                        <h5> Áo sơ mi tay ngắn</h5>
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
                   </div>                </div>
            </div>
        </section>
        {/* <!-- --------------------------------------- --> */}
        <section id="pagination" className="section-p1">
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#"><FontAwesomeIcon icon={faArrowRight}/></a>
        </section>
    
        {/* <!-- --------------------------------------- --> */}
        <section id="newsletter" className="section-p1 section-m1">
            <div className="newstext">
                <h4> Đăng ký để nhận thông tin mới</h4>
                <p> nhập email để cập nhật thông tin từ chúng tôi và <span>ưu đãi đặc biệt</span> </p>
            </div>
            <div className="form">
                <input type="text" placeholder="your email address"/>
                <button className="normal">Đăng ký</button>
            </div>
        </section>
        </>
        );
    }
}
export default Products;