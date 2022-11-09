import { MouseEventHandler } from "react";

interface IProps {
  buttonType: "button" | "submit" | "reset";
  text: string;
  buttonClass?: string;
  link?: string;
  click?: unknown;
}

function Button({ buttonType, text, buttonClass, link, click }: IProps) {
  return (
    <button
      type={buttonType}
      className={`bg-orange-700 text-white transition duration-150 hover:bg-orange-600 w-20 h-9 rounded-lg ${buttonClass}`}
      onClick={click as MouseEventHandler}
    >
      {text}
    </button>
  );
}

export default Button;
