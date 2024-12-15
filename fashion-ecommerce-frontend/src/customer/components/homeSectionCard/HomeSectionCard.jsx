
import React from "react";

const HomeSectionCard = ({product}) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-4">
      <div className="h-[13rem] w-[10rem] ">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl}
          alt="mens kurta"
        />
      </div>
      <div className="p-4">
        <h3 className="text-md font-bold text-center text-gray-900">
          {product.brand}
        </h3>
        <p className="mt-2 text-sm text-gray-800">{product.title}</p>
        <p className=" text-center text-sm text-gray-800 font-bold">{product.price}</p>
        <p className=" text-center text-sm text-gray-800 font-bold">Discount on this product upto {product.discountPersent}%</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
