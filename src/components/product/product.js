import React  from "react";
import "./product.css";
import Img1 from '../../icons/productImg1.png'
import Img2 from '../../icons/productImg2.png'
import Img3 from '../../icons/productImg3.png'

const Product = ({img,link}) => {
  return (
    <>
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={Img1} alt="" className="p-img" />
      </a>
    </div>
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={Img2} alt="" className="p-img" />
      </a>
    </div>
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={Img3} alt="" className="p-img" />
      </a>
    </div>
    </>
  );
};

export default Product;