import React from "react";
class About extends React.Component {
    render() {
        return (
            <>
                <section id="page-header" className="about-header">
                    <h2> #Biết thêm về chúng tôi</h2>
                    <p> Hiểu chúng tôi như hiểu người thương của bạn</p>
                </section>
                {/* <!-- ----------------------------------- --> */}
                <section id="about-head" className="section-p1">
                    <img src={require("../assets/img/about/a6.jpg")} alt="" />
                    <div>
                        <h2> Bạn là ai?</h2>
                        <p> Đây là câu trả lời đòi hỏi phải có chuẩn bị trước. Bạn có thể vẽ trước ở nhà, đem theo một cuốn sổ tay
                            mà bạn cảm thấy bản thân mình được bộc lộ rõ ràng trong đó. Ai có thể quên một câu trả lời ấn tượng như
                            vậy chứ?</p>
                        <abbr title="">Bạn có thể vẽ trước ở nhà, đem theo một cuốn sổ tay mà bạn cảm thấy bản thân mình được bộc lộ
                            rõ ràng trong đó. Ai có thể quên một câu trả lời ấn tượng như vậy</abbr>
                        <br /><br />
                        <marquee bgcolor="gray" loop="-1" scrollamount="5" width="100%">Bạn có thể vẽ trước ở nhà, đem theo một cuốn
                            sổ tay mà bạn cảm thấy bản thân mình được bộc lộ rõ ràng trong đó. Ai có thể quên một câu trả lời ấn
                            tượng như vậy</marquee>
                    </div>
                </section>

                {/* <!-- ---------------------- --> */}
                <section id="about-app" className="section-p1">
                    <h1>tải xuống <a href="#"> App</a></h1>
                    <div className="video">
                        <video autoPlay muted loop src={require("../assets/img/about/1.mp4")}></video>
                    </div>
                </section>
                {/* <!-- -------------------------------------- --> */}
                <section id="feature" className="section-p1">
                    <div className="fe-box"><img src={require("../assets/img/features/f1.png")} alt="" />
                        <h6> Miễn phí giao hàng</h6>
                    </div>
                    <div className="fe-box"><img src={require("../assets/img/features/f2.png")} alt="" />
                        <h6> Đặt hàng Online</h6>
                    </div>
                    <div className="fe-box"><img src={require("../assets/img/features/f3.png")} alt="" />
                        <h6> Tiết kiệm tiền</h6>
                    </div>
                    <div className="fe-box"><img src={require("../assets/img/features/f4.png")} alt="" />
                        <h6> Khuyến mãi</h6>
                    </div>
                    <div className="fe-box"><img src={require("../assets/img/features/f5.png")} alt="" />
                        <h6> Niềm vui bán hàng</h6>
                    </div>
                    <div className="fe-box"><img src={require("../assets/img/features/f6.png")} alt="" />
                        <h6> Hỗ trợ 24/7</h6>
                    </div>
                </section>
                {/* <!-- --------------------------------------- --> */}
                <section id="newsletter" className="section-p1 section-m1">
                    <div className="newstext">
                        <h4> Đăng ký để nhận thông tin mới</h4>
                        <p> Nhập email để cập nhật thông tin từ chúng tôi và <span>ưu đãi đặc biệt</span> </p>
                    </div>
                    <div className="form">
                        <input type="text" placeholder="your email address" />
                        <button className="normal">Đăng ký</button>
                    </div>
                </section>
            </>
        );
    }
}

export default About;