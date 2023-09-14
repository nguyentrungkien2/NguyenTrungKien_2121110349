import React, { Component } from "react";

class Feature extends Component
{
    render(){
        return(
            <section id="feature" class="section-p1">
            <div class="fe-box">   <img src={require("../assets/img/features/f1.png")} />
                <h6> Miễn phí giao hàng</h6>
    
            </div>
            <div class="fe-box"><img src={require("../assets/img/features/f2.png")} />
                <h6> Đặt hàng Online</h6>
    
            </div>
            <div class="fe-box"><img src={require("../assets/img/features/f3.png")} alt=""/> 
                <h6> Tiết kiệm tiền</h6>
    
            </div>
            <div class="fe-box"><img src={require("../assets/img/features/f4.png")} alt=""/> 
                <h6> Khuyến mãi</h6>
    
            </div>
            <div class="fe-box"><img src={require("../assets/img/features/f5.png")} alt=""/> 
                <h6> Niềm vui bán hàng</h6>
    
            </div>
            <div class="fe-box"><img src={require("../assets/img/features/f6.png")} alt=""/> 
                <h6> Hỗ trợ 24/7</h6>
    
            </div>
        </section>
        );
    }
}

export default Feature
