import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useOutletContext } from "react-router";
import { CHANGE_IMAGE } from "../../../redux/actionTypes";

function EachImage({ image }) {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [ImageApplied, setImageApplied] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    const img = new Image();
    img.src = image.urls.regular;
    img.onload = () => setLoading(false);
  }, [image]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  function ApplyImage() {
    setImageApplied(true)
    document.getElementsByClassName(
      "desktop"
    )[0].style.backgroundImage = `url('${selectedImage?.urls.regular}')`;
  }

  function SetImage() {
    document.getElementsByClassName(
        "desktop"
      )[0].style.backgroundImage = `url('${selectedImage?.urls.regular}')`;
    dispatch({type: CHANGE_IMAGE, payload: selectedImage?.urls.regular})
  }
  return (
    <div className="relative w-full h-full">
      {loading ? (
        <div className="skeleton absolute top-0 left-0 w-full h-full"></div>
      ) : (
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          onClick={() => handleImageClick(image)}
          className="w-full h-full object-cover"
        />
      )}
      {modalOpen && selectedImage.urls.regular === image.urls.regular && (
        <div className="absolute z-[1000000] min-w-[100%] p-2 bg-[gray] flex flex-col items-center justify-start top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  bg-opacity-50">
          <div className="">
            <div className="flex  mt-1  flex-col items-center justify-star">
              <button
                className="px-5 py-2 bg-[gray] text-white rounded-md mb-1 hover:scale-110 transition-all"
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
              <button
                className="px-4 py-2 bg-[#a33434] text-white rounded-md mb-1 hover:scale-110 transition-all"
                onClick={ApplyImage}
              >
                Apply
              </button>
              <button
                className="px-4 py-2 bg-[#73a334] text-white rounded-md mb-1 hover:scale-110 transition-all"
                onClick={SetImage}
              >
                Confirm
              </button>
              {/* Add your other modal actions here */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EachImage;
