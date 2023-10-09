import React from "react";

function Layout({ children, type }) {
  return (
    <div
      className={`${type == "PORTFOLIO" ? "w-full h-full" : ""}`}
      style={{ position: "absolute", zIndex: 1100 }}
    >
      {children}
    </div>
  );
}

export default Layout;
