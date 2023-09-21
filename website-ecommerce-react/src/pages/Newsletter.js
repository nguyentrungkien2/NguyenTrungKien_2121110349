import { Component } from "react";


class Newsletter extends Component{
    render(){
        return(
            <section id="newsletter" class="section-p1 section-m1">
            <div class="newstext">
                <h4> Đăng ký để nhận thông tin mới</h4>
                <p> nhập email để cập nhật thông tin từ chúng tôi và <span>ưu đãi đặc biệt</span> </p>
            </div>
            <div class="form">
                <input type="text" placeholder="your email address"/>
                <button class="normal">Đăng ký</button>
            </div>
        </section>
        );
    }
}
export default Newsletter;