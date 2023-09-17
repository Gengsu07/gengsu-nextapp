import React from "react";
import AddToCart from "../AddToCart";

const ProductCard = () => {
  return (
    <>
      <div className="p-5 my-5 bg-blue-500 text-xl text-white hover:bg-blue-800 ">
        <AddToCart />
      </div>
    </>
  );
};

export default ProductCard;
