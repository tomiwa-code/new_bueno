import Image from "next/image";
import * as React from "react";
import ImageFit from "./ImageFit";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return (
    <div className="flex justify-between items-center w-full py-6">
      <div className="w-[50px] h-[50px]">
        <ImageFit
          imgUrl="https://res.cloudinary.com/dgdoymhtj/image/upload/v1712495332/logo_vwj5dj.png"
          imgAlt="bueno logo"
        />
      </div>
      <div>
        <p>Links goes here</p>
      </div>

      <div>right sidebar goes here</div>
    </div>
  );
};

export default Navbar;
