"use client";
import * as React from "react";
import FoodCard from "../general/FoodCard";
import CatTitle from "../general/CatTitle";
import { CardProp } from "@/types/card.types";

interface IChefSpecialProps {
  chefsData: CardProp[];
}

const ChefSpecial: React.FunctionComponent<IChefSpecialProps> = ({
  chefsData,
}) => {
  return (
    <div className="space-y-1 relative">
      <CatTitle text="chef's special" />

      <div className="w-full flex gap-x-12 gap-y-14 overflow-x-hidden flex-nowrap relative">
        {chefsData.map((items) => (
          <div className="flex-shrink-0" key={items.id}>
            <FoodCard cardData={items} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefSpecial;
