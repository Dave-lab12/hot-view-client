import * as NavBar from "@radix-ui/react-navigation-menu";
import { Fragment } from "react";

function HomePage() {
  return (
    <>
      <div>
        <p className="space-x-3">
          Follow us: <i>Facebook</i> <i>Twitter</i> <i>Instagram</i>
          <i>YouTube</i>
        </p>
      </div>
      <NavBar.Root className="grid grid-flow-col place-content-start p-5 mx-4 border-solid border-b items-center ">
        <NavBar.List>
          <NavBar.Link href="/" className="text-2xl text-slate-800 mr-3 ">
            News Reporting
          </NavBar.Link>
        </NavBar.List>
        <NavBar.List className="mx-4 text-gray-700 text-lg">
          <NavBar.Link href="/signup">Stories</NavBar.Link>
        </NavBar.List>
        <NavBar.List className="mx-4 text-gray-700 text-lg">
          <NavBar.Link href="/signup">Forum</NavBar.Link>
        </NavBar.List>
        <NavBar.List className="mx-4 text-gray-700 text-lg">
          <NavBar.Link href="/signup">Store</NavBar.Link>
        </NavBar.List>
        <NavBar.List className="mx-4 text-gray-700 text-lg">
          <NavBar.Link href="/signup">Contact</NavBar.Link>
        </NavBar.List>
      </NavBar.Root>
    </>
  );
}

export default HomePage;
