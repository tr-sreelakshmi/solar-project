import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import feature from '../../Assets/feature.jpg'
import product2 from '../../Assets/product2.jpg'
import product3 from '../../Assets/product3.jpg'
import product5 from '../../Assets/product4.jpg'
import product4 from '../../Assets/product5.jpg'
import product6 from '../../Assets/product6.jpg'
import battery1 from '../../Assets/battery1.png'
import battery2 from '../../Assets/battery2.png'
import battery3 from '../../Assets/battery3.png'
import invet1 from '../../Assets/invet1.png'
import invet2 from '../../Assets/invet2.png'
import invet3 from '../../Assets/invet3.jpg'


 
function Product() {
  return (
    <div className="product-page">
      <div className="container">
        <div className="heading">
          <h1>PRODUCTS</h1>
          <p>Home / Pages / Products</p>
        </div>
        {/* solarpanels */}
        <div className="product-view">
          <div className="product-card">
            <div className="products-box">
                <img src={feature}  width='340px' height='280px' alt="" />
              <p>We Are pioneers of solar & renewable energy industry</p>
              <button className="butn">Solar Panels</button>
            </div>
            <div className="products-box">
              <img src={product2} alt=""  width='340px' height='280px' />
              <p>We Are pioneers of solar & renewable energy industry</p>
              <button className="butn">Wind Turbines </button>
            </div>
            <div className="products-box">
                <img src={product3} alt=""  width='340px' height='280px'/>
                <p>We Are pioneers of solar & renewable energy industry</p>
                <button className="butn">Hyrdopower Plants </button>
                
            </div>
          </div>
          <div className="product-card">
            <div className="products-box">
              <img src={product4} alt=""  width='340px' height='280px'/>
              <p>We Are pioneers of solar & renewable energy industry</p>
              <button className="butn">Solar Panels</button>
            </div>
            <div className="products-box">
              <img src={product5} alt=""  width='340px' height='280px'/>
              <p>We Are pioneers of solar & renewable energy industry</p>
              <button className="butn">Wind Turbines</button>
            </div>
            <div className="products-box">
              <img src={product6} alt=""  width='340px' height='280px'/>
              <p>We Are pioneers of solar & renewable energy industry</p>
              <button className="butn">Hydropower plants</button>
            </div>
          </div>
        </div>

 
        {/* battery and inverter */}
        <div className="product-view">
          <div className="product-card">
            <div className="products-box">
                <img src={battery1}  width='340px' height='280px' alt="" />
              <p>We Are pioneers of solar & renewable energy industry</p>
              <button className="butn">Battery</button>
            </div>
            <div className="products-box">
              <img src={battery2} alt="" width='340px' height='280px' />
              <p>We Are pioneers of solar & renewable energy industry</p>
              <button className="butn">Battery</button>
            </div>
            <div className="products-box">
                <img src={battery3} alt=""  width='340px' height='280px'/>
                <p>We Are pioneers of solar & renewable energy industry</p>
                <button className="butn">Battery </button>
                
            </div>
          </div>
          <div className="product-card">
            <div className="products-box">
              <img src={invet1} alt="" width='340px' height='280px'/>
              <p>We Are pioneers of solar & renewable energy industry</p>
              <button className="butn">Inverter</button>
            </div>
            <div className="products-box">
              <img src={invet2} alt="" width='340px' height='280px'/>
              <p>We Are pioneers of solar & renewable energy industry</p>
              <button className="butn">Inverter</button>
            </div>
            <div className="products-box">
              <img src={invet3} alt="" width='340px' height='280px'/>
              <p>We Are pioneers of solar & renewable energy industry</p>
              <button className="butn">Inverter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
