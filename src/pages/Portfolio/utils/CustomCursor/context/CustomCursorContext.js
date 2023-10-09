import { createContext } from "react";

// export type CursorLookType =
//   | "slider-hover"
//   | "slider-drag"
//   | "text"
//   | "link"
//   | "hamburger"
//   | "default";
// export type CustomCursorType = {
//   type: CursorLookType;
//   setType: (type: CursorLookType) => void;
// };

const CustomCursorContext = createContext({
  type: "default",
  setType: () => {},
});

export default CustomCursorContext;