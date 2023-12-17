import React from "react";
import { IoMdArrowRoundUp } from "react-icons/io";

const ButtonScroll = () => {
  const [visible, setVisible] = React.useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={`fixed bottom-10 right-5 p-4 rounded-full shadow-md bg-teal-100 hover:bg-teal-500 focus:bg-teal-500 animation duration-300 ease-in-out text-white z-50  ${
        visible ? "block" : "hidden"
      }`}
    >
      <IoMdArrowRoundUp size={25} />
    </button>
  );
};

export default ButtonScroll;
