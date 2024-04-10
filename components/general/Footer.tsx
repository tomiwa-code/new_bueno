import * as React from "react";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <div className="w-full rounded-3xl bg-pureBlue min-h-[350px]">
      <p>Footer goes here</p>
    </div>
  );
};

export default Footer;
