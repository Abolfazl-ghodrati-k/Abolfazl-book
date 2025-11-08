import React, { useState } from "react";
import CustomCursorContext from "./CustomCursorContext";

const CustomCursorManager = ({ children }) => {
  const [type, setType] = useState("default");

  return (
    // @ts-expect-error TS(2322): Type 'Dispatch<SetStateAction<string>>' is not ass... Remove this comment to see the full error message
    <CustomCursorContext.Provider value={{ type, setType }}>
      {children}
    </CustomCursorContext.Provider>
  )
}

export default CustomCursorManager;