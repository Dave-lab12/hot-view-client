import { MouseEventHandler } from "react";

interface IProps {
  buttonType: "button" | "submit" | "reset";
  text?: string;
  buttonClass?: string;
  link?: string;
  click?: unknown;
  iconLink?: string;
}

function Button({ buttonType, text, buttonClass, click, iconLink }: IProps) {
  return (
    <button
      type={buttonType}
      className={`bg-orange-700 w-full text-white transition duration-150 hover:bg-orange-600 h-9 rounded-lg ${buttonClass}`}
      onClick={click as MouseEventHandler}
    >
      <i className={` ${iconLink} fa-xl`}></i>
      {text}
    </button>
  );
}

export default Button;
