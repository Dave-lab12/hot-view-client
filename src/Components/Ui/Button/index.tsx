import { MouseEventHandler } from "react";

interface IProps {
  buttonType: "button" | "submit" | "reset";
  text?: string;
  buttonClass?: string;
  link?: string;
  click?: unknown;
  iconLink?: string;
  disable?: boolean;
}

export const Button = ({
  buttonType,
  text,
  buttonClass,
  click,
  iconLink,
  disable,
}: IProps) => {
  return (
    <button
      type={buttonType}
      className={`bg-blue-black w-full text-white transition duration-150 hover:bg-blue-800 h-9 rounded-lg ${buttonClass}`}
      onClick={click as MouseEventHandler}
      disabled={disable}
    >
      <i className={` ${iconLink} fa-xl`}></i>
      {text}
    </button>
  );
};
