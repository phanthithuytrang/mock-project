import React from "react";
import "./FormSignIn.css";

class FormSignIn extends React.Component{
    render(){
        return(
            <div className="form-signin">    
                <ul class="tab-group">
                    <li class="tab active"><a href="#login">Đăng nhập</a></li>
                    <li class="tab"><a href="#singup">Đăng ký</a></li>
                </ul>
                
                <div class="tab-content">
                    <div id="login">   
                    <h1>ĐĂNG NHẬP</h1>

                    <form action="/" method="post">                    
                        <div class="field-wrap">
                        <label>Email : </label>
                        <input className="input" type="email" required autocomplete="off"/>
                    </div>
                    
                    <div class="field-wrap">
                        <label>Mật khẩu :</label>
                        <input className="input" type="password" required autocomplete="off"/>
                    </div><br/>
                    
                    <p class="forgot"><a href="#">Quên mật khẩu?</a></p>
                    
                    <button type="submit" class="button button-block"/>Đăng nhập
                    
                    </form>

                    </div>
                        
                    <div id="signup">   
                    <h1>ĐĂNG KÝ</h1>         
                    <form action="/" method="post">                 
                        <div class="top-row">
                            <div class="field-wrap">
                            <label> Họ : </label>
                            <input className="input" type="text" required autocomplete="off" />
                            </div>
                        
                            <div class="field-wrap">
                            <label>Tên :</label>
                            <input className="input" type="text" required autocomplete="off"/>
                            </div>
                        </div>
                        <div class="field-wrap">
                            <label>Địa chỉ email :</label>
                            <input className="input" type="email" required autocomplete="off"/>
                        </div>
                        <div class="field-wrap">
                            <label> Mật khẩu :</label>
                            <input className="input" type="password" required autocomplete="off"/>
                        </div>
                        
                        <button type="submit" class="button button-block"/>Đăng ký
                    
                    </form>
                    </div>
            
                </div>        
            </div> 
        )
    }
}

export default FormSignIn;

