import React from "react";
import "./productList.css";
import Product from "../product/product";

const ProductList = () => {

  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Work</h1>
        <p className="pl-desc">
          I did an internship at a startup named <b>Deeva</b>, where I got the opportunity to develop the whole frontend of their website. Here are some samples of their website. 
        </p>
      </div>
      <div className="pl-list">
          <Product/>
      </div>
    </div>
  );
};

export default ProductList;