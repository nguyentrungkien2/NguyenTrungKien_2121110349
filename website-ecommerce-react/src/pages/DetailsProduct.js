import React from "react";

class DetailsProduct extends React.Component {
  componentDidMount() {
    // Đổi ảnh phần chi tiết sản phẩm
    const smallimg = document.getElementsByClassName("small-img");

    smallimg[0].addEventListener("click", () => {
      document.getElementById("MainImg").src = smallimg[0].src;
    });
    smallimg[1].addEventListener("click", () => {
      document.getElementById("MainImg").src = smallimg[1].src;
    });
    smallimg[2].addEventListener("click", () => {
      document.getElementById("MainImg").src = smallimg[2].src;
    });
    smallimg[3].addEventListener("click", () => {
      document.getElementById("MainImg").src = smallimg[3].src;
    });
  }

  render() {
    return (
      <>
        <section id="prodetails" className="section-p1">
          <div className="single-pro-image">
            <img
              src="img/products/f1.jpg"
              width="100%"
              id="MainImg"
              alt=""
            />

            <div className="small-img-ground">
              <div className="small-img-col">
                <img
                  src="img/products/f1.jpg"
                  width="100%"
                  className="small-img"
                  alt=""
                />
              </div>
              <div className="small-img-col">
                <img
                  src="img/products/f2.jpg"
                  width="100%"
                  className="small-img"
                  alt=""
                />
              </div>
              <div className="small-img-col">
                <img
                  src="img/products/f3.jpg"
                  width="100%"
                  className="small-img"
                  alt=""
                />
              </div>
              <div className="small-img-col">
                <img
                  src="img/products/f4.jpg"
                  width="100%"
                  className="small-img"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="single-pro-details">
            <h6>Trang chủ/ T-shirt</h6>
            <h4> áo T-shirt thời trang cho nam</h4>
            <h2>150.000 vnđ</h2>
            <select>
              <option value="">Chọn kích thước</option>
              <option value="">XL</option>
              <option value="">XXL</option>
              <option value="">Nhỏ</option>
              <option value="">Lớn</option>
            </select>
            <input type="number" value="1" />
            <button className="normal">Thêm vào giỏ hàng</button>
            <h4>Chi tiết sản phẩm</h4>
            <span>
              hàng đẹp mặc thoáng mát 100% vải cotton co giãn 2 chiều mặc mùa xuân
              hè hay bất cứ mùa nào đều đem cho bạn sự thoải mái và đặc biệt vẻ
              đẹp của chiếc áo khiến cho người bên cạnh bạn cảm thấy bị choáng
              ngợp bởi sức hút của người mặc và chiếc áo còn trần chừ gì nửa mại
              zô mại zô
            </span>
          </div>
        </section>
        {/* --------------------------------------- */}
        <section id="product1" className="section-p1">
          <h2> Sản phẩm nổi bật</h2>
          <p> Các mẫu thiết kế hè mới</p>
          <div className="pro-container">
            <div className="pro">
              <img src="img/products/n1.jpg" alt="" />
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
                <h6> 1.200.000 vnđ</h6>
                <button className="normal">Thêm vào giỏ hàng</button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default DetailsProduct;