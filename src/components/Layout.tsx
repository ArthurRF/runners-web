import { ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavBar />
      <div className={"max-w-screen-xl mx-auto my-0"}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
