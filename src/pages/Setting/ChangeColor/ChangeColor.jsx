import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useSelector, useDispatch } from "react-redux";
import { PICK_COLOR } from "../../../redux/actionTypes";

function ChangeColor() {
  const [Pickedcolor, setPickedcolor] = useState();
  const [Confirmed, setConfirmed] = useState(false);
  const [Applied, setApplied] = useState(false);
  const { Color } = useSelector((state) => state.setting);
  const dispatch = useDispatch();
  const applyColor = () => {
    setApplied((a) => (a = true));
    document
      .getElementsByClassName("desktop")[0]
      .style.setProperty("background-color", Pickedcolor);
  };

  const confirmColor = () => {
    setApplied((a) => (a = false));
    setConfirmed((Confirmed) => (Confirmed = true));
    dispatch({ type: PICK_COLOR, payload: Pickedcolor });
  };
  return (
    <div className="flex my-5 mx-5 h-full flex-col">
      <div className="flex justify-between mb-2">
        <span>Pick a color for background {"→"}</span>
        <span className="cancel">
          <HexColorPicker
            color={Color}
            onChange={(color) => {
              setApplied((a) => (a = false));
              setConfirmed(false);
              setPickedcolor(color);
            }}
          />
        </span>
      </div>
      <div className="flex self-end">
        <button
          onClick={applyColor}
          disabled={`${Confirmed ? "true" : ""}`}
          className={`p-1 mr-3  text-center px-3 rounded ${
            Confirmed
              ? "bg-transparent line-through"
              : "bg-gray-100 no-underline"
          }`}
        >
          {Applied ? (Confirmed ? "apply" : "revert") : "apply"}
        </button>
        <button onClick={confirmColor}>confirm</button>
      </div>
    </div>
  );
}

export default ChangeColor;
