import React, { Component } from "react";

class BannerBottom extends Component {
  render() {
    return (
      <>
        <section id="sm-banner" className="section-p1">
          <div className="banner-box">
            <h4>Ưu đãi khủng</h4>
            <h2>Mua 1 tặng 1 miễn phí</h2>
            <span>đầm cổ điển tốt nhất tại kenPro</span>
            <button className="white">Xem thêm</button>
          </div>
          <div className="banner-box banner-box2">
            <h4>Mùa xuân/Mùa hè</h4>
            <h2>Một mùa lại tới gần</h2>
            <span>đầm cổ điển tốt nhất tại kenPro</span>
            <button className="white">Xem thêm</button>
          </div>
        </section>
        <section id="banner3">
          <div className="banner-box">
            <h2>ƯU ĐÃI HÈ</h2>
            <h3>Mùa đông giảm giá 50%</h3>
          </div>
          <div className="banner-box banner-box2">
            <h2>Những kiểu giày mới</h2>
            <h3>Mùa xuân/hè 2023</h3>
          </div>
          <div className="banner-box banner-box3">
            <h2>Áo thun</h2>
            <h3>Sản phẩm được ưa chuộng</h3>
          </div>
        </section>
      </>
    );
  }
}

export default BannerBottom;