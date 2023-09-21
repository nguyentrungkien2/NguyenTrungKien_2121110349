import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";


class Blog extends Component{
    render(){
        return (
            <>
                <section id="page-header" className="blog-header">
        <h2> #Đọc thêm</h2>
        <p> Đọc tất cả sản phẩm từ chúng tôi</p>
    </section>
    {/* <!-- ----------------------------------- --> */}
    <section id="blog">
        <div className="blog-box">
            <div className="blog-img">
                <img src={require("../assets/img/blog/b1.jpg")} alt=""/>
            </div>
            <div className="blog-details">
                <h4>vãi cotton co giãn 2 chiều</h4>
                <p>vãi cotton co giãn 2 chiều hoạt tiết đẹp bền bỉ đi kèm với sư thoãi mái khi mặc giúp người dùng tự
                    tin với ghệ iu</p>
                <a href="">TIẾP TỤC ĐỌC</a>
            </div>
            <h1>13/01</h1>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src={require("../assets/img/blog/b6.jpg")} alt=""/>
            </div>
            <div className="blog-details">
                <h4>vãi cotton co giãn 2 chiều</h4>
                <p>vãi cotton co giãn 2 chiều hoạt tiết đẹp bền bỉ đi kèm với sư thoãi mái khi mặc giúp người dùng tự
                    tin với ghệ iu</p>
                <a href="">TIẾP TỤC ĐỌC</a>
            </div>
            <h1>15/01</h1>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src={require("../assets/img/blog/b2.jpg")} alt=""/>
            </div>
            <div className="blog-details">
                <h4>vãi cotton co giãn 2 chiều</h4>
                <p>vãi cotton co giãn 2 chiều hoạt tiết đẹp bền bỉ đi kèm với sư thoãi mái khi mặc giúp người dùng tự
                    tin với ghệ iu</p>
                <a href="">TIẾP TỤC ĐỌC</a>
            </div>
            <h1>19/01</h1>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src={require("../assets/img/blog/b3.jpg")} alt=""/>
            </div>
            <div className="blog-details">
                <h4>vãi cotton co giãn 2 chiều</h4>
                <p>vãi cotton co giãn 2 chiều hoạt tiết đẹp bền bỉ đi kèm với sư thoãi mái khi mặc giúp người dùng tự
                    tin với ghệ iu</p>
                <a href="">TIẾP TỤC ĐỌC</a>
            </div>
            <h1>13/01</h1>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src={require("../assets/img/blog/b4.jpg")} alt=""/>
            </div>
            <div className="blog-details">
                <h4>vãi cotton co giãn 2 chiều</h4>
                <p>vãi cotton co giãn 2 chiều hoạt tiết đẹp bền bỉ đi kèm với sư thoãi mái khi mặc giúp người dùng tự
                    tin với ghệ iu</p>
                <a href="">TIẾP TỤC ĐỌC</a>
            </div>
            <h1>24/01</h1>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src={require("../assets/img/blog/b5.jpg")} alt=""/>
            </div>
            <div className="blog-details">
                <h4>vãi cotton co giãn 2 chiều</h4>
                <p>vãi cotton co giãn 2 chiều hoạt tiết đẹp bền bỉ đi kèm với sư thoãi mái khi mặc giúp người dùng tự
                    tin với ghệ iu</p>
                <a href="">TIẾP TỤC ĐỌC</a>
            </div>
            <h1>23/01</h1>
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
export default Blog;