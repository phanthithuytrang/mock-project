import React from "react";
import "./Header.css";

class Header extends React.Component {
    render(){
        return(
            <div className="Header">
                <nav className="navbar">
                    <div className="header-left">
                        <h5><i class="fas fa-shopping-cart fa-2x"><span>Home</span>Shoping</i></h5>
                    </div>
                    <div className="header-seach">
                        <form id="search-form" action="/search" />
                        <div className="search">
                            <input id="search-field" type="text" name="search" placeholder="Tìm kiếm sản phẩm"/>
                            <button type="button" className="btn-search"><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="right-menu-wrap">
                            <ul className="menu">
                                <li><a href="/"><i class="fas fa-cart-plus fa-1x"></i></a></li>
                                <li>
                                    <a href="/">Trang chủ</a>
                                </li>
                                <li className="toggle-submenu">
                                    <a href="/">Sản phẩm</a>
                                    <ul className="submenu">
                                        <li><a href="#">Option 1</a></li>
                                        <li><a href="#">Option 2</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/">Hỗ trợ</a>
                                </li>
                                <li>
                                    <a href="/">Đăng nhập</a>
                                </li>
                                <li><a href="/"><i class="fas fa-globe-asia fa-1x"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;