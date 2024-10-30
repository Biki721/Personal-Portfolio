import React from "react";
import { TiArrowUpThick } from "react-icons/ti";

const Arrow = () => {
  //   const handleClick = () => {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   };

  const handleClick = () => {
    const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 20);
      }
    };
    scrollToTop();
  };

  return (
    <div className="fixed bottom-4 right-4">
      <TiArrowUpThick
        className="text-5xl cursor-pointer"
        onClick={handleClick}
      />
    </div>
  );
};

export default Arrow;
