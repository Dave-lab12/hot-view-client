import { Header, Footer, NavigationBar } from "@/components/Ui";

type Props = {
  title: string;
  children?: React.ReactNode;
};

export const Layout = ({ title, children }: Props) => {
  return (
    <>
      <Header title={title} />
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
};
