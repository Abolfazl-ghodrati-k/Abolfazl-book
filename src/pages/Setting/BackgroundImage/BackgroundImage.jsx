import React, { useState, useEffect } from "react";
import axios from "axios";
import Gallery from "./Gallery";
import ClipLoader from "react-spinners/ClipLoader";

const BackgroundImage = () => {
  const [images, setImages] = useState([]);
  const [loading, setloading] = useState(true);

  const fetchImages = async () => {
    const response = await axios.get(
      "https://api.unsplash.com/photos/random?query=desktop&orientation=landscape&featured=true&collections=1065976&count=100",
      {
        params: { client_id: "wRvhU88EYpzPlVfjcELQcuSM1jI08bps5hETfNLMC2w" },
      }
    );
    setImages(response.data);
  };
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8 flex items-center gap-2">
        Gallery{" "}
        {loading ? (
          <ClipLoader
            loading={loading}
            size={50}
          />
        ) : (
          ""
        )}
      </h1>
      <div className="scrollbar max-h-full">
        <Gallery images={images} />
      </div>
    </div>
  );
};

export default BackgroundImage;
