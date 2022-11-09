import { MouseEventHandler } from "react";

interface IProps {
  buttonType: "button" | "submit" | "reset";
  text?: string;
  buttonClass?: string;
  link?: string;
  click?: unknown;
  iconLink?: string;
}

function Button({
  buttonType,
  text,
  buttonClass,
  link,
  click,
  iconLink,
}: IProps) {
  return (
    <button
      type={buttonType}
      className={`bg-orange-700 w-full text-white transition duration-150 hover:bg-orange-600 h-9 rounded-lg ${buttonClass}`}
      onClick={click as MouseEventHandler}
    >
      {text}
      <i className={iconLink}></i>
    </button>
  );
}

export default Button;
