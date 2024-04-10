"use client";
import * as React from "react";
import { BsArrowUp } from "react-icons/bs";

interface IScrollToTopProps {}

const ScrollToTop: React.FunctionComponent<IScrollToTopProps> = (props) => {
  // USE STATES
  const [show, setShow] = React.useState<boolean>(false);

  // FUNCTIONS
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // USE EFFECTS
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [show]);

  return (
    <>
      {show && (
        <div
          className="fixed bottom-10 right-20 rounded-full bg-priGreen text-center p-3 cursor-pointer"
          onClick={handleScrollToTop}
        >
          <BsArrowUp className="text-pureWhite" />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
