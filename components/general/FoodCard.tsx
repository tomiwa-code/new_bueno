"use client";
import * as React from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import ImageFill from "./ImageFill";
import { CardProp } from "@/types/card.types";

interface IFoodCardProps {
  cardData: CardProp;
  discount?: number;
  orders?: number;
}

const FoodCard: React.FunctionComponent<IFoodCardProps> = ({
  cardData,
  discount,
  orders,
}) => {
  // USE STATES
  const [isLiked, setIsLiked] = React.useState<string[]>([]);

  // DECLARES
  const isLoggedIn = false;
  const likeId = "tempId";

  // FUNCTIONS
  const handleIsLiked = (likeId: string) => {
    if (isLiked.includes(likeId)) {
      const filterIsLiked = isLiked.filter((items) => items !== likeId);
      setIsLiked(filterIsLiked);
      return;
    }
    setIsLiked((prev) => [...prev, likeId]);
  };

  return (
    <div className="rounded-xl shadow-lg w-[255px] h-[310px] p-5 mb-4 relative">
      {orders && (
        <p className="absolute top-4 left-5 text-sm text-secBlack font-semibold">
          Orders 4
        </p>
      )}

      {/* {isLoggedIn && ( */}
      <div className="absolute right-5 z-10 text-xl">
        {isLiked.includes(likeId) ? (
          <BsHeartFill
            className="text-danger cursor-pointer"
            onClick={() => handleIsLiked(likeId)}
          />
        ) : (
          <BsHeart
            className="text-danger cursor-pointer"
            onClick={() => handleIsLiked(likeId)}
          />
        )}
      </div>
      {/* )} */}

      <div className="relative flex items-center justify-center mt-8 mb-6">
        <div className="bg-secBlue w-28 h-28 rounded-full blur-lg absolute"></div>
        <div className="w-32 h-32 rounded-full z-10 bg-danger overflow-hidden -mt-2 relative">
          <ImageFill imgAlt={cardData?.title} imgUrl={cardData?.image} />
        </div>
      </div>

      <p className="text-sm text-priBlack mt-3 font-medium capitalize">
        {cardData?.title}
      </p>

      <p className="text-priGray text-xs mt-2">{cardData?.desc}</p>

      <div className="mt-2">
        {discount && (
          <div className="flex items-center gap-x-2 text-danger">
            <span className="text-xs font-semibold line-through">
              NGN 2000.00
            </span>
            <span className="text-sm font-semibold">-20%</span>
          </div>
        )}
        <span className="text-secBlack font-bold flex">
          NGN {cardData?.price}.00
        </span>
      </div>

      <div className="absolute p-3 rounded-full shadow-3xl bottom-4 right-4 z-10">
        <FaPlus
          className={`${
            discount ? "text-danger" : "text-priGreen"
          } cursor-pointer text-lg`}
        />
      </div>
    </div>
  );
};

export default FoodCard;
