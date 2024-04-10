import * as React from "react";
import ChefSpecial from "../ChefSpecial";
import { chefArr } from "@/utils/tempData";

interface IChefSpecialFetchProps {}

const ChefSpecialFetch: React.FunctionComponent<IChefSpecialFetchProps> = (
  props
) => {
  return (
    <>
      <ChefSpecial chefsData={chefArr} />
    </>
  );
};

export default ChefSpecialFetch;
