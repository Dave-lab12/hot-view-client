import * as NavBar from "@radix-ui/react-navigation-menu";
import * as Label from "@radix-ui/react-label";

function HomePage() {
  return (
    <>
      <div className="p-2 mx-4 mt-3 rounded-md bg-blue-100">
        <p className="space-x-3 text-gray-700">
          <Label.Root className="text-sm">Follow us:</Label.Root>
          <i>Facebook</i> <i>Twitter</i> <i>Instagram</i>
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
