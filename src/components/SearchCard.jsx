import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineRightCircle, AiFillRightCircle } from "react-icons/ai";
import { BsHeartFill } from "react-icons/bs";


const SearchCard = (props) => {
  const card = props.result[0].info;
  
  return (
    <>
      <div className="min-h-[30vh] rounded-lg w-full ">
        <div className="w-[50%] h-[40vh] mx-auto">
          <img src={card.images.data[0]} className="w-screen h-full rounded-lg object-cover" />
        </div>
        <BsHeartFill className="absolute text-[1.6rem] text-white bottom-[46%] left-[44%]" />
        <span className="border-[1px] bg-white py-1 text-[0.8rem] px-1 rounded-[5px] absolute bottom-[46%] left-[18%]">
          Superhost
        </span>
        <AiFillRightCircle className="text-[1.8rem] absolute bottom-[30%] left-[44%] text-white" />

        <div className="w-[50%] mx-auto">
        <div className="flex justify-between mt-3 w-[60%]y mx-autoy">
          <span className="text-[0.8rem] text-base font-semibold">{`${card.title} in ${card.location.city}`}</span>
          <span className="flex gap-x-2 items-center">
            <BsFillStarFill /> <small>{card.ratings.value}</small>
            <small>({card.visibleReviewCount})</small>
          </span>
        </div>
        {/* stay with-owner name div */}
        <div>
          <span className="text-[1rem] font-[400] text-[rgba(0,0,0,0.7)]">
            {card.description.slice(0,50)}
          </span>
        </div>
        {/* no of bedrooms */}
        <div>
          <span className="text-[1rem] font-[400] text-[rgba(0,0,0,0.7)]">
            {`${card.details.data[2].value} ${card.details.data[2].type}`}
          </span>
        </div>
        {/* no of nights */}
        <div>
          <span className="text-[1rem] font-[400] text-[rgba(0,0,0,0.7)]">
            5 night June 1 - 6
          </span>
        </div>
        {/* Price */}
        <div>
          <span className="underline">
            <small className="font-bold">${card.price}</small> total before taxes
          </span>
        </div>

        </div>

      </div>
      
    </>
  );
};

export default SearchCard;
