import { MouseEventHandler, FontAwesomeIcon } from "react";

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
      className={`bg-orange-700 w-full text-white transition duration-150 hover:bg-orange-600 h-9 rounded-lg ${buttonClass}`}
      onClick={click as MouseEventHandler}
    >
      {text}
      <FontAwesomeIcon icon="fa-brands fa-google" />
    </button>
  );
}

export default Button;
