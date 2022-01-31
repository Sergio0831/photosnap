import React, { Suspense } from "react";
import Loading from "../components/Loading";
const Header = React.lazy(() => import("./Header"));
const Footer = React.lazy(() => import("./Footer"));

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header />
        <main>{children}</main>
        <Footer />
      </Suspense>
    </>
  );
};

export default Layout;
