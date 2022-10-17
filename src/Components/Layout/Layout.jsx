import React from "react";

function Layout({ children, type }) {

  

  return (
    <div
      className={`${type == "PORTFOLIO" ? "w-full h-full" : ""}`}
      onMouseMove={(e) => {
        if (e.clientY > 540) {
          console.log("show");
        } else {
          console.log("hide");
        }
      }}
    >
      {children}
    </div>
  );
}

export default Layout;
