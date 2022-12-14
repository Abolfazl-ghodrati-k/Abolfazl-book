import React, { useState } from "react";
import { MdPlayArrow, MdPlayForWork } from "react-icons/md";
import { BsPauseFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  OPEN_MUSIC,
  START_MUSIC,
  PAUSE_MUSIC,
  CONTROLL_MUSIC,
  SET_PLAYING_MUSIC,
} from "../../../redux/actionTypes";

function Music({ src, title }) {
  // state
  const [ShowIcon, setShowIcon] = useState(false);
  //   const [isPlaying, setIsPlaying] = useState(false);
  // store
  const dispatch = useDispatch();
  const fileManager = useSelector((state) => state.fileManager);

  const OpenMusic = (src, title) => {
    // console.log(fileManager.isPlaying);
    if (!fileManager.isPlaying) {
      //   setIsPlaying((ispalying) => (ispalying = true));
      dispatch({
        type: SET_PLAYING_MUSIC,
        payload: { Src: src, Title: title },
      });
      dispatch({ type: OPEN_MUSIC });
      dispatch({ type: CONTROLL_MUSIC, payload: true });
    }
    if (fileManager.isPlaying) {
      dispatch({ type: CONTROLL_MUSIC, payload: false });
    }
  };

  const DownloadMusic = (src, title) => {
    const ankerTag = document.createElement("a");
    ankerTag.href = src;
    ankerTag.setAttribute("download", title+'.mp3');
    document.body.appendChild(ankerTag);
    ankerTag.click();
    ankerTag.parentNode.removeChild(ankerTag);
  };
  return (
    <div
      className="relative flex justify-between items-center rounded bg-gray-200 p-2 "
      onMouseEnter={() => {
        setShowIcon((ShowIcon) => (ShowIcon = true));
      }}
      onMouseLeave={() => {
        setShowIcon((ShowIcon) => (ShowIcon = false));
      }}
    >
      <div className="flex justify-start items-center">
        <span
          onClick={() => OpenMusic(src, title)}
          className="hover:bg-gray-100 rounded"
          style={{
            opacity: !ShowIcon ? "0" : "1",
            transition: "all .4s",
            visibility: !ShowIcon ? "hidden" : "visible",
            transitionTimingFunction: "ease-in",
          }}
        >
          {fileManager.isPlaying ? (
            <BsPauseFill size={25} />
          ) : (
            <MdPlayArrow size={25} />
          )}
        </span>
        <span
          className="text-[0.9rem] ml-3"
          style={{
            position: "absolute",
            top: 9,
            bottom: 0,
            left: !ShowIcon ? 0 : 30,
            transition: "all .5s",
          }}
        >
          {title}
        </span>
      </div>
      <span
        className="hover:bg-gray-100 rounded"
        onClick={() => DownloadMusic(src, title)}
      >
        {ShowIcon && <MdPlayForWork size={21} />}
      </span>
    </div>
  );
}

export default Music;
