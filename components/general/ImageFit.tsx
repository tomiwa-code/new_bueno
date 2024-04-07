import Image from "next/image";
import * as React from "react";

interface IImageFitProps {
  imgUrl: string;
  imgAlt: string;
}

const ImageFit: React.FunctionComponent<IImageFitProps> = ({
  imgUrl,
  imgAlt,
}) => {
  return (
    <>
      <Image src={imgUrl} alt={imgAlt} width={1000} height={1000} priority />
    </>
  );
};

export default ImageFit;
