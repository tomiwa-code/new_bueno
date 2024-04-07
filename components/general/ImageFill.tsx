import Image from "next/image";
import * as React from "react";

interface IImageFillProps {
  imgUrl: string;
  imgAlt: string;
}

const ImageFill: React.FunctionComponent<IImageFillProps> = ({
  imgUrl,
  imgAlt,
}) => {
  return (
    <>
      <Image src={imgUrl} alt={imgAlt} sizes="(max-width: 768px) 100vw, 33vw" fill priority />
    </>
  );
};

export default ImageFill;
