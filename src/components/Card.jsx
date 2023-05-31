import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineRightCircle, AiFillRightCircle } from "react-icons/ai";
// import { AiOutlineHeart } from "react-icons/ai"
import { BsHeartFill } from "react-icons/bs";
import { cardData } from "../data/data";

const Card = () => {
  return (
    <>
      {cardData.map((x) => {
        const { name, img, text, price, rating, id } = x;
        return (
          <div className="relative" key={id}>
            {/* Image container div */}
            <div className="h-[300px] w-[300px]y rounded-lg">
              <img
                src={img}
                className="h-full w-full object-cover rounded-xl cursor-pointer"
              />
            </div>
            {/* like Icon */}
            <BsHeartFill className="absolute top-3 right-3" />
            <AiFillRightCircle className='text-[1.8rem] absolute top-[35%] right-[5%] text-white'/>

            {/* Name and rating container */}
            <div className="flex justify-between mt-3">
              <span className="text-[0.8rem] text-base font-semibold">{name}</span>
              <span className="flex gap-x-2 items-center">
                <BsFillStarFill /> <small>{rating}</small>
              </span>
            </div>
            {/* stay with-owner name div */}
            <div>
              <span className="text-[1rem] font-[400] text-[rgba(0,0,0,0.7)]">{text}</span>
            </div>
            {/* Price */}
            <div>
              <span>
                <small className="font-bold">${price}</small> night
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;


