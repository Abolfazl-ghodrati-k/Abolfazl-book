import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function ModalLayout({ children, zIndex }) {
  const Modalcount = useSelector((state) => state.desktop.Modals);
  const [ZIndex, setZIndex] = useState(0);

  useEffect(() => {
    if (Modalcount) {
      setZIndex((Index) => (Index = Modalcount * 1000000));
    }
  }, [Modalcount]);
  
  return (
    <div
      style={{
        position: "absolute",
        zIndex: ZIndex,
        left: "25%",
        right: "25%",
        bottom:"13%"
      }}
      className="bg-transparent  mx-auto"
    >
      <div className="flex w-full h-full items-end justify-center">{children}</div>
    </div>
  );
}

export default ModalLayout;
