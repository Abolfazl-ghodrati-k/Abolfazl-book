import React, { useState } from "react";
import { useOutletContext } from "react-router";
import EachImage from "./Image";

const Gallery = ({ images }) => {
  const [Width, Height] = useOutletContext();
  
  return (
    <div
      className={`grid ${
        Width > 800
          ? Width > 950
            ? "grid-cols-4"
            : "grid-cols-3"
          : "grid-cols-2"
      } [&>*]:col-span-1  gap-4 px-2`}
    >
      {images.map((image) => (
        <div key={image.id} className="w-full h-full">
          <EachImage image={image} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
