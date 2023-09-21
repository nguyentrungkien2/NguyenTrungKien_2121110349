import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOutdent, faShoppingCart, faTimes, faTimesCircle, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const LoginForm = ({ onConfirm }) => {
  const handleConfirm = () => {
    // Xử lý logic xác nhận form đăng nhập ở đây

    // Gọi hàm onConfirm để thông báo xác nhận thành công
    onConfirm();
  };

  return (
    <section id="form-alert-login">
      <form>
        <span>Bạn có muốn đăng nhập không?</span>
        <button className="normal" onClick={handleConfirm} style={{ marginRight: '5px' }}>
          <a href="/login">Xác nhận</a>
        </button>
        <button className="normal">
          <Link to="/"><FontAwesomeIcon icon={faTimesCircle}/></Link>
        </button>
      </form>
    </section>
  );
};

const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [hasDisplayedLoginForm, setHasDisplayedLoginForm] = useState(false);

  const handleBarClick = () => {
    setIsNavActive(true);
  };

  const handleCloseClick = () => {
    setIsNavActive(false);
  };

  const handleLoginFormClick = () => {
    if (!hasDisplayedLoginForm) {
      setShowLoginForm(true);
      setHasDisplayedLoginForm(true);
    }
  };

  const handleConfirm = () => {
    setShowLoginForm(false);
    // Xử lý logic xác nhận thành công ở đây
  };

  return (
    <section id="header">
      <img className="logo" src={require('../assets/img/logo.jpg')} alt="Logo" />
      <div>
        <ul id="navbar" className={isNavActive ? 'active' : ''}>
          <li>
            <a className="active" href="/">
              Trang chủ
            </a>
          </li>
          <li>
            <a href="/all-products">Gian hàng</a>
          </li>
          <li>
            <a href="blog">Blog</a>
          </li>
          <li>
            <a href="about">Thông tin</a>
          </li>
          <li>
            <a href="contact">Liên hệ</a>
          </li>
          <li id="lg-bag">
            <a href="cart">
              giỏ hàng
              <FontAwesomeIcon icon={faShoppingCart} style={{ marginLeft: '2px' }} />
            </a>
          </li>
          <li>
            {!showLoginForm && !hasDisplayedLoginForm && (
              <a href="#" onClick={handleLoginFormClick}>
                Đăng nhập <FontAwesomeIcon icon={faUserLarge} style={{ marginLeft: '2px' }} />
              </a>
            )}
          </li>
          <a href="#" id="close" onClick={handleCloseClick}>
            <FontAwesomeIcon icon={faTimes} />
          </a>
        </ul>
      </div>
      <div id="mobile">
        <a href="cart" style={{ margin: '15px' }}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </a>

        <FontAwesomeIcon
          icon={faOutdent}
          id="bar"
          onClick={handleBarClick}
          className={isNavActive ? 'active' : ''}
        />
      </div>
      {showLoginForm && <LoginForm onConfirm={handleConfirm} />}
    </section>
  );
};

export default Header;