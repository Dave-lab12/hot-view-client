import * as NavBar from "@radix-ui/react-navigation-menu";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface IProps {
  link: string;
  text: string;
  linkClass?: string;
  children?: ReactNode;
}

function Link({ link, text, linkClass, children }: IProps) {
  const router = useRouter();

  return (
    <NavBar.Link
      href={link}
      className={`hover:cursor-pointer mt-1 mx-2  ${
        router.pathname === link ? "active:text-black" : "text-orange-700"
      } ${linkClass}`}
    >
      {children ? children : text}
    </NavBar.Link>
  );
}

export default Link;
