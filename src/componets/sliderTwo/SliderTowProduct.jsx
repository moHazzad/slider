import React from "react";
import { FaStar } from "react-icons/fa6";

const SliderTowProduct = ({ product }) => {
  const { title, image_details, current_price, previous_price } = product;
  return (
    <div className="flex">
      <div className="w-[20%]">
        <img
          className=" transition duration-300 ease-in-out group-hover:opacity-65 h-full"
          src={image_details.url}
          alt={image_details.alt_text}
        />
      </div>
      <div className="w-[80%] flex flex-col  gap-1 py-2 md:pt-5 ">
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
      </div>
    </div>
  );
};

export default SliderTowProduct;
