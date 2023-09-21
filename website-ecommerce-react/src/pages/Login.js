import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

class Login extends React.Component {
  render() {
    return (
      <>
     <section className='login-page'>
     <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <div className="card mx-auto" style={{ maxWidth: '380px' }}>
          <div className="card-body">
            <h4 className="card-title mb-4">Đăng nhập</h4>
            <form>
              <a href="#" className="btn btn-facebook btn-block mb-2" style={{ marginBottom: '2px', color: 'white' }}>
                <FontAwesomeIcon icon={faFacebook} /> &nbsp; Đăng nhập bằng Facebook
              </a>
              <a href="#" className="btn btn-google btn-block mb-4" style={{ marginBottom: '2px', color: 'white' }}>
                <FontAwesomeIcon icon={faGoogle} /> &nbsp; Đăng nhập bằng Google
              </a>
              <div className="form-group">
                <input name="" className="form-control" placeholder="Username" type="text" />
              </div>
              <div className="form-group">
                <input name="" className="form-control" placeholder="Password" type="password" />
              </div>

              <div className="form-group">
                <a href="#" className="float-right">
                  Quên mật khẩu?
                </a>
                <label className="float-left custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" defaultChecked={true} />  
                                <div className="custom-control-label"> Ghi nhớ </div>
                </label>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Đăng nhập
                </button>
              </div>
            </form>
          </div>
        </div>
        <p className="text-center mt-4">
          Không có một tài khoản? <a className="button-register" href='/register'>Đăng ký</a>
        </p>
      </div>
     </section>
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
            </>    );
  }
}

export default Login;