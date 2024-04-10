import * as React from "react";
import ExploreCat from "../ExloreCat";
import { exploreCatArr } from "@/utils/tempData";

interface IExploreCatFetchProps {}

const ExploreCatFetch: React.FunctionComponent<IExploreCatFetchProps> = (
  props
) => {
  return (
    <>
      <ExploreCat cateData={exploreCatArr} />
    </>
  );
};

export default ExploreCatFetch;
