import * as React from "react";
import ImageFit from "./ImageFit";

interface ICategoryCardProps {
  color: string;
  imageUrl: string;
  cateTitle: string;
}

const CategoryCard: React.FunctionComponent<ICategoryCardProps> = ({
  color,
  imageUrl,
  cateTitle,
}) => {
  return (
    <>
      <div
        className="rounded-xl w-44 h-44 flex items-center justify-center mb-4"
        style={{ backgroundColor: color }}
      >
        <div className="w-24 h-24">
          <ImageFit imgAlt={cateTitle} imgUrl={imageUrl} />
        </div>
      </div>
      <p className=" text-secBlack text-center font-medium capitalize">
        {cateTitle}
      </p>
    </>
  );
};

export default CategoryCard;
