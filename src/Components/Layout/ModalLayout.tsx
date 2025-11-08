import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function ModalLayout({ children, zIndex }) {
  // @ts-expect-error TS(2339): Property 'desktop' does not exist on type 'unknown... Remove this comment to see the full error message
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
