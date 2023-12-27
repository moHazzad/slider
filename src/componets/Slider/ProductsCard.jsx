import React from "react";
import { FaHeart } from "react-icons/fa6";
import { FaRotate } from "react-icons/fa6";
import { FaMagnifyingGlass, FaStar } from "react-icons/fa6";

const ProductsCard = ({ product }) => {
  console.log(product);
  const {
    title,
    image_details,
    current_price,
    previous_price,
    discount_percentage,
    details,
  } = product;
  return (
    <div className=" flex flex-col md:flex-row h-1/2 group  bg-white py-1 px-2 gap-3">
      <div className=" md:w-[45%] relative  group cursor-pointer">
        <div className="overflow-hidden relative group-hover:bg-gray-300">
          <img
            className=" transition duration-300 ease-in-out group-hover:opacity-65 h-full"
            src={image_details.url}
            alt={image_details.alt_text}
          />
          <div className="absolute top-2 left-5 bg-orange-500 w-10 h-10 rounded-full text-white flex items-center justify-center ">
            <p className="text-xs">{`-${discount_percentage}%`}</p>
          </div>
          <div className="hidden group-hover:flex gap-3 absolute transition duration-300 ease-in-out top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2">
            <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
              <FaHeart className="hover:text-[#F97316] transition-colors" />
            </div>
            <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
              <FaRotate className="hover:text-[#F97316] transition-colors" />
            </div>
            <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
              <FaMagnifyingGlass className="hover:text-[#F97316] transition-colors" />
            </div>
          </div>
        </div>
        {/* <button className="hidden group-hover:flex absolute bottom-2 left-2 bg-green-500 text-white py-1 px-3 rounded-md text-xs">
      Add
  </button> */}
      </div>
      <div className="md:w-[55%] flex flex-col  gap-1 py-2 md:pt-5 ">
        <div className="flex gap-1 text-xs text-gray-400">
          <p>
            <FaStar />
          </p>
          <p>
            <FaStar />
          </p>
          <p>
            <FaStar />
          </p>
          <p>
            <FaStar />
          </p>
          <p>
            <FaStar />
          </p>
        </div>
        <p className="text-[10px] md:text-xl font-semibold">{title}</p>
        <div className="flex items-center gap-2 tex-x">
          <p className="text-md text-red-700 font-bold">
            {" "}
            {`$${current_price}`}
          </p>
          <p className="text-xs">
            {" "}
            <s> {previous_price}</s>
          </p>
        </div>
        <p className="text-xs font-semibold text-gray-500">{details}</p>
        <button className="hidden group-hover:block bg-gray-400 text-white py-1 md:py-2 px-3 rounded-md  md:text-md md:font-semibold mt-2 md:w-1/2">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
