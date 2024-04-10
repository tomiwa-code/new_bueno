import * as React from "react";
import CatTitle from "../general/CatTitle";
import { ExploreCatProp } from "@/types/card.types";
import CategoryCard from "../general/CategoryCard";

interface IExploreCatProps {
  cateData: ExploreCatProp[];
}

const ExploreCat: React.FunctionComponent<IExploreCatProps> = ({
  cateData,
}) => {
  return (
    <div className="space-y-1 relative">
      <CatTitle text="explore categories" />

      <div className="w-full flex gap-x-12 gap-y-14 overflow-x-hidden flex-nowrap relative">
        {cateData.map((items) => (
          <div className="flex-shrink-0" key={items.id}>
            <CategoryCard {...items} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCat;
