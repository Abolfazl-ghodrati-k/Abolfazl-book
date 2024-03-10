import React, { useCallback } from "react";
import AudioPlayerV2 from "./AudioPlayerV2";
import { useDispatch, useSelector } from "react-redux";
import {
  CLOSE_MUSIC,
  CONTROLL_MUSIC,
  SET_PLAYING_MUSIC,
} from "../../redux/actionTypes";
import Draggable from "react-draggable";

const AudioPlayerWrapper = () => {
  const { isPlaying, playingSrc, playingTitle } = useSelector(
    (state) => state.fileManager
  );
  const dispatch = useDispatch();

  const pauseMusic = useCallback(() => {
    dispatch({ type: CONTROLL_MUSIC, payload: false });
  }, [dispatch]);

  const playMusic = useCallback(() => {
    dispatch({ type: CONTROLL_MUSIC, payload: true });
  }, [dispatch]);

  const closePlayer = useCallback(() => {
    dispatch({ type: CLOSE_MUSIC });
    pauseMusic();
    dispatch({
      type: SET_PLAYING_MUSIC,
      payload: { Src: "", Title: "" },
    });
  }, [dispatch, pauseMusic]);

  return (
    <Draggable cancel=".cancel-player">
      <div className=" absolute z-[100000000] bg-[white] rounded-[10px] p-1 ">
        <div className="flex mb-1 justify-between  w-full items-center px-[10px] py-1">
          <span className="text-[14px] text-[#333] tracking-wider">
            AG player
          </span>
          <div
            onClick={closePlayer}
            className="bg-[#840000] hover:opacity-50 cursor-pointer w-[11px] h-[11px] rounded-[50%]"
          ></div>
        </div>
        <AudioPlayerV2
          isPlaying={isPlaying}
          src={playingSrc}
          title={playingTitle}
          onPause={pauseMusic}
          onPlay={playMusic}
        />
      </div>
    </Draggable>
  );
};

export default AudioPlayerWrapper;
