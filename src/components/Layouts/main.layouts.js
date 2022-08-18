import React from "react";
import Footer from "./footer.layouts";
import Navigation from "./navigation.layouts";

const MainLayouts = ({ children }) => {
  return (
    <React.Fragment>
      <div style={{ minHeight: "100vh" }} className="bg-light">
        <Navigation />
        {children}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default MainLayouts;
