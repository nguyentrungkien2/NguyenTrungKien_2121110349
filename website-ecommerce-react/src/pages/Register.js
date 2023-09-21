import React from "react";
class Register extends React.Component {
    render() {
        return (
            <section id="form-register">
                <form action="">
                    <h2>Đăng ký</h2>
                    <input type="text" placeholder="Họ và tên" name="fullName" id="fullName" />
                    <input type="email" placeholder="Email" name="email" id="email" />
                    <input type="password" placeholder="Mật khẩu" name="password" id="password" />
                    <input
                        type="password"
                        placeholder="Xác nhận mật khẩu"
                        name="confirmPassword"
                        id="confirmPassword"
                    />
                    <button type="submit" className="normal">
                        Đăng ký
                    </button>
                </form>

            </section>
        );
    }
}

export default Register;