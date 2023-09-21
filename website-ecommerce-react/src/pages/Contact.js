import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapPin, faPhone,faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <>
                <section id="page-header" className="contact-header">
                    <h2>#Cùng nói chuyện</h2>
                    <p>alo là nhấc máy nhá máy là đáp liền</p>
                </section>
                {/* ----------------------------------- */}
                <section id="contact-details" className="section-p1">
                    <div className="details">
                        <span>Liên lạc với chúng tôi</span>
                        <h2>Ghé thăm vị trí nơi làm việc của chúng tôi hôm nay</h2>
                        <h3>văn phòng chính</h3>
                        <ul className="people">
                            <li>
                            <a href="#"><FontAwesomeIcon icon={faMapPin}/></a>
                                <p> dương đình hội, phước Long B, thành phố thủ đức</p>
                            </li>
                            <li>
                            <a href="#"><FontAwesomeIcon icon={faEnvelope}/></a>
                                
                                <p>vuivenhe@gmail.com</p>
                            </li>
                            <li>
                            <a href="#"><FontAwesomeIcon icon={faPhone}/></a>
                            
                                <p>84+ 9999999999</p>
                            </li>
                            <li>
                            <a href="#"><FontAwesomeIcon icon={faCalendarDays}/></a>
                     
                                <p>thứ 2 đến thứ 7, 8h tới 18h</p>
                            </li>
                        </ul>
                    </div>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.746776096385!2d106.77242407381124!3d10.830680489321383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752701a34a5d5f%3A0x30056b2fdf668565!2sHo%20Chi%20Minh%20City%20College%20of%20Industry%20and%20Trade!5e0!3m2!1sen!2s!4v1694459633986!5m2!1sen!2s"
                            width="600"
                            height="450"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </section>
                {/* ------------------------------- */}
                <section id="form-details">
                    <form action="">
                        <span>Thông báo</span>
                        <h2>chúng tôi yêu bạn</h2>
                        <input type="text" placeholder="tên của bạn" name="" id="" />
                        <input type="text" placeholder="email" name="" id="" />
                        <input type="text" placeholder="chủ đề" name="" id="" />
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="thông báo của bạn"
                        ></textarea>
                        <button className="normal">truy cập</button>
                    </form>
                    <div className="people">
                        <div>
                        <img src={require("../assets/img/people/1.png")} alt="" />
                            <p>
                                <span>Hải</span>quản lí bán hàng <br />
                                Phone: + 08888888888
                                <br />
                                Email: contact@gmail.com
                            </p>
                        </div>
                        <div>
                        <img src={require("../assets/img/people/2.png")} alt="" />
                            <p>
                                <span>Tuấn</span>quản lí bán hàng <br />
                                Phone: + 08888888888
                                <br />
                                Email: contact@gmail.com
                            </p>
                        </div>
                        <div>
                            <img src={require("../assets/img/people/3.png")} alt="" />
                            <p>
                                <span>Nhi</span>quản lí bán hàng <br />
                                Phone: + 08888888888
                                <br />
                                Email: contact@gmail.com
                            </p>
                        </div>
                    </div>
                </section>
                {/* --------------------------------------- */}
                <section id="newsletter" className="section-p1 section-m1">
                    <div className="newstext">
                        <h4>Đăng ký để nhận thông tin mới</h4>
                        <p>
                            nhập email để cập nhật thông tin từ chúng tôi và{" "}
                            <span>ưu đãi đặc biệt</span>{" "}
                        </p>
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

export default Contact;