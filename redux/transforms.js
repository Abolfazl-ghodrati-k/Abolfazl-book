import createTransform from "redux-persist/es/createTransform";

export const setTransform = createTransform(
  (inboundState) => {
    if (inboundState) {
      return { ...inboundState };
    }
  },
  (outboundState) => {
    // convert mySet back to a Set.
    if (outboundState) {
      return { ...outboundState };
    }
  }
);
