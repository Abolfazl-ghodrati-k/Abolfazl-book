import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useSelector, useDispatch } from "react-redux";
import { PICK_COLOR } from "../../../redux/actionTypes";

function ChangeColor() {
  const [Pickedcolor, setPickedcolor] = useState();
  const [Confirmed, setConfirmed] = useState(false);
  const [Applied, setApplied] = useState(false);
  // @ts-expect-error TS(2339): Property 'setting' does not exist on type 'unknown... Remove this comment to see the full error message
  const Color = useSelector((state) => state.setting.color);
  const dispatch = useDispatch();
  const applyColor = () => {
    if (Applied) {
      console.log(Color)
     // @ts-expect-error TS(2339): Property 'style' does not exist on type 'Element'.
     document.getElementsByClassName("desktop")[0].style.setProperty("background-color", Color)
    } else {
      console.log(Pickedcolor)
      setApplied((a) => (a = true));
      console.log(Pickedcolor);
      document
        .getElementsByClassName("desktop")[0]
        // @ts-expect-error TS(2339): Property 'style' does not exist on type 'Element'.
        .style.setProperty("background-color", Pickedcolor);
    }
  };

  const confirmColor = () => {
    console.log(Pickedcolor);
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
              // @ts-expect-error TS(2322): Type 'string' is not assignable to type 'undefined... Remove this comment to see the full error message
              setPickedcolor(coloR => coloR = color);
            }}
          />
        </span>
      </div>
      <div className="flex self-end">
        <button
          onClick={applyColor}
          // @ts-expect-error TS(2322): Type 'string' is not assignable to type 'boolean'.
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
