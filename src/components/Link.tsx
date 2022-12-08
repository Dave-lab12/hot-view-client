import * as NavBar from "@radix-ui/react-navigation-menu";
import { ReactNode } from "react";

interface IProps {
  link: string;
  text: string;
  linkClass?: string;
  children?: ReactNode;
}

function Link({ link, text, linkClass, children }: IProps) {
  return (
    <NavBar.Link
      href={link}
      className={`hover:cursor-pointer mt-1 mx-2 ${linkClass}`}
    >
      {children ? children : text}
    </NavBar.Link>
  );
}

export default Link;
