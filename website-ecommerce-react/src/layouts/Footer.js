import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons";
class Footer extends Component {
  render() {
    return (
      <footer className="section-p1">
        <div className="col">
          <img className="logo" src={require("../assets/img/logo.png")} />
          <h4>Liên hệ</h4>
          <p>
            <strong>Địa chỉ:</strong> Dương Đình Hội, Thủ Đức
          </p>
          <p>
            <strong>Phone:</strong> 0999999999
          </p>
          <p>
            <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
          </p>

          <div className="follow">
            <h4>Theo dõi chúng tôi</h4>
            <div className="icon">
           <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faPinterest} />
            </div>
          </div>
        </div>
        <div className="col">
          <h4>Thông tin</h4>
          <a href="#">Thông tin về chúng tôi</a>
          <a href="#">chính sách</a>
          <a href="#">Nhà cung cấp</a>
          <a href="#">Đội ngũ</a>
          <a href="#">Liên hệ</a>
        </div>
        <div className="col">
          <h4>Tài khoản của tôi</h4>
          <a href="#">Đăng nhập</a>
          <a href="#">Giỏ hàng</a>
          <a href="#">Danh sách yêu thích</a>
          <a href="#">Theo dõi đơn hàng</a>
          <a href="#">Trợ giúp</a>
        </div>
        <div className="col install">
          <h4>Tải App</h4>
          <p>tải App từ google play</p>
          <div className="row">
            <img src={require("../assets/img/pay/app.jpg")} alt="" />

            <img src={require("../assets/img/pay/play.jpg")} alt="" />
          </div>
          <p>Cách thanh toán khác</p>
          <img src={require("../assets/img/pay/pay.png")} alt="" />
        </div>
        <div className="copyright">
          <p>@2023, project ecommerce</p>
        </div>
      </footer>
    );
  }
}

export default Footer;