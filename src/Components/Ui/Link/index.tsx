import { ReactNode } from "react";

interface IProps {
  link: string;
  text: string;
  linkClass?: string;
  children?: ReactNode;
}

export const Link = ({ link, text, linkClass, children }: IProps) => {
  return (
    <a href={link} className={linkClass}>
      {children ? children : text}
    </a>
  );
};
