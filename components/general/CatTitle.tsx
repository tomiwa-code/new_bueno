import * as React from "react";

interface ICatTitleProps {
  text: string;
}

const CatTitle: React.FunctionComponent<ICatTitleProps> = ({ text }) => {
  return (
    <p className="text-priGreen capitalize font-medium text-md mb-5">
      {text}
    </p>
  );
};

export default CatTitle;
