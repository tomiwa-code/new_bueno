import * as React from "react";

interface IScrollToTopProps {}

const ScrollToTop: React.FunctionComponent<IScrollToTopProps> = (props) => {
  return (
    <div className="fixed bottom-10 right-20">
      <p>ScrollToTop goes here</p>
    </div>
  );
};

export default ScrollToTop;
