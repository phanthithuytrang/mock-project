import React from "react";
import "./Footer.css";

class Footer extends React.Component {
    render(){
      return (
        <footer id="wn__footer" className="footer-home">
            <div className="footer-menu">
                <div className="ft-logo">
                    <a href="#">
                        <img src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG17.png" />
                    </a>
                </div>
                <div className="footer-content">
                    <p>Lorem Ipsum available, but the majority have suffered duskam alteration variations of passages</p>
                    <ul className="mainmenu">
                        <li><a href="#"><i className="fab fa-facebook fa-3x" /></a></li>
                        <li><a href="#"><i className="fab fa-google-plus-g fa-3x" /></a></li>
                        <li><a href="#"><i className="fab fa-twitter fa-3x" /></a></li>
                        <li><a href="#"><i className="fab fa-instagram fa-3x" /></a></li>
                        <li><a href="#"><i className="fab fa-youtube fa-3x" /></a></li>
                    </ul>
                    <ul className="mainmenu">
                        <li><a href="app.js">Trending</a></li>
                        <li><a href="app.js">Best Seller</a></li>
                        <li><a href="app.js">All Product</a></li>
                        <li><a href="app.js" >Wishlist</a></li>
                        <li><a href="app.js">Blog</a></li>
                        <li><a href="app.js" >Contact</a></li>
                    </ul>
                </div>
            </div>
    
            <div className="copyright__wrapper">
                <div className="pay-block">
                <h4>Hình thức thanh toán</h4>
                    <img src='bankcard.jpg' alt="x" />
                </div>
            </div>
        </footer>
      );
  
    }
  
  }
  export default Footer;

