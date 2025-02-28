import React from "react";
import dynamic from "next/dynamic";
import Footer from "./Footer";

const Navbar = dynamic(() => import("./Header"), {
  ssr: false,
});

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
