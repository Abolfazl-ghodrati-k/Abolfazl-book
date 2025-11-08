import React, { useState, useRef, useEffect, useCallback } from "react";
// @ts-expect-error TS(2307): Cannot find module './AudioPlayer.module.css' or i... Remove this comment to see the full error message
import styles from "./AudioPlayer.module.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import {
  CLOSE_MUSIC,
  CONTROLL_MUSIC,
  SET_PLAYING_MUSIC,
} from "../../redux/actionTypes";
import Draggable from "react-draggable";
import { ClipLoader, PulseLoader } from "react-spinners";

const AudioPlayer = () => {
  // state
  // const [isPlaying, setIsPlaying] = useState(false);

  // store
  const { isPlaying, playingSrc, playingTitle } = useSelector(
    // @ts-expect-error TS(2339): Property 'fileManager' does not exist on type 'unk... Remove this comment to see the full error message
    (state) => state.fileManager
  );
  const dispatch = useDispatch();

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [Loading, setLoading] = useState(true);
  const [MusicReady, setMusicReady] = useState(false);

  // references
  const audioPlayer = useRef(); // reference our audio component
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation
  const music = useRef(); // reference the playing animation

  useEffect(() => {
    setDuration(0);
  }, [playingSrc]);

  const changePlayerCurrentTime = useCallback(() => {
    // console.log(
    //   "changing current time",
    //   `${
    //     (progressBar?.current?.value / duration) * 100 > 70
    //       ? (progressBar?.current?.value / duration) * 100
    //       : (progressBar?.current?.value / duration) * 100 + 2
    //   }%`
    // );
    // @ts-expect-error TS(2532): Object is possibly 'undefined'.
    if (progressBar?.current?.style) {
      // @ts-expect-error TS(2339): Property 'style' does not exist on type 'never'.
      progressBar?.current.style.setProperty(
        "--seek-before-width",
        `${
          // @ts-expect-error TS(2339): Property 'value' does not exist on type 'never'.
          (progressBar?.current?.value / duration) * 100 > 70
            // @ts-expect-error TS(2339): Property 'value' does not exist on type 'never'.
            ? (progressBar?.current?.value / duration) * 100
            // @ts-expect-error TS(2339): Property 'value' does not exist on type 'never'.
            : (progressBar?.current?.value / duration) * 100 + 2
        }%`
      );
    }
    // @ts-expect-error TS(2532): Object is possibly 'undefined'.
    setCurrentTime(progressBar?.current?.value);
  }, [duration]);

  const whilePlaying = useCallback(() => {
    if (
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      Math.floor(audioPlayer?.current?.currentTime) === Math.floor(duration)
    ) {
      console.log("music finished");
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      if (progressBar?.current?.value) {
        // @ts-expect-error TS(2339): Property 'value' does not exist on type 'never'.
        progressBar.current.value = 0;
      }
      dispatch({ type: CONTROLL_MUSIC, payload: false });
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      progressBar.current.style.setProperty("--seek-before-width", `${0}%`);
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      audioPlayer.current.currentTime = 0;
      setCurrentTime(0);
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      audioPlayer?.current.pause();
      cancelAnimationFrame(animationRef.current);
    } else {
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      if (progressBar?.current?.value) {
        // @ts-expect-error TS(2339): Property 'value' does not exist on type 'never'.
        progressBar.current.value = audioPlayer?.current?.currentTime;
      }

      changePlayerCurrentTime();
      // @ts-expect-error TS(2322): Type 'number' is not assignable to type 'undefined... Remove this comment to see the full error message
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  }, [changePlayerCurrentTime, dispatch, duration]);

  useEffect(() => {
    if (isPlaying && MusicReady) {
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      audioPlayer?.current.play();
      // @ts-expect-error TS(2322): Type 'number' is not assignable to type 'undefined... Remove this comment to see the full error message
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      audioPlayer?.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }, [MusicReady, isPlaying, whilePlaying]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    dispatch({ type: CONTROLL_MUSIC, payload: !prevValue });
    if (!prevValue) {
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      audioPlayer?.current.play();
    } else {
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      audioPlayer?.current.pause();
      cancelAnimationFrame(animationRef?.current);
    }
  };

  const changeRange = () => {
    setLoading(true);
    // @ts-expect-error TS(2532): Object is possibly 'undefined'.
    audioPlayer.current.currentTime = progressBar?.current.value;
    changePlayerCurrentTime();
  };

  const backThirty = () => {
    // @ts-expect-error TS(2532): Object is possibly 'undefined'.
    progressBar.current.value = Number(+progressBar.current.value - 30);
    changeRange();
  };

  const forwardThirty = () => {
    // @ts-expect-error TS(2532): Object is possibly 'undefined'.
    progressBar.current.value = Number(+progressBar.current.value + 30);
    if (
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      +audioPlayer?.current.duration - +audioPlayer?.current.currentTime <
      30
    ) {
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      progressBar.current.value = 0;
      // setIsPlaying(false);
      dispatch({ type: CONTROLL_MUSIC, payload: false });
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      progressBar?.current.style.setProperty("--seek-before-width", `${0}%`);
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      audioPlayer.current.currentTime = 0;
      setCurrentTime((t) => (t = 0));
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      audioPlayer?.current.pause();
      cancelAnimationFrame(animationRef.current);
    } else {
      changeRange();
    }
  };

  const ClosePlayer = () => {
    // @ts-expect-error TS(2532): Object is possibly 'undefined'.
    audioPlayer?.current?.pause();
    dispatch({ type: CLOSE_MUSIC });
    dispatch({ type: CONTROLL_MUSIC, payload: false });
    dispatch({
      type: SET_PLAYING_MUSIC,
      payload: { Src: "", Title: "" },
    });
  };

  const getReadyMusic = useCallback((e) => {
    setMusicReady(true);
    setLoading(false);
    console.log("triggered");
    let eventDuration = e?.currentTarget?.duration;
    setDuration(Math.floor(eventDuration));
    // @ts-expect-error TS(2532): Object is possibly 'undefined'.
    progressBar.current.max = eventDuration;
  }, []);

  return (
    <Draggable cancel=".cancel-player">
      <div className="p-1 absolute z-[100000000]">
        <div className={styles.audioPlayer}>
          <audio
            onCanPlayThrough={getReadyMusic}
            onLoadStart={() => {
              setLoading(true);
            }}
            onLoadedMetadata={() => {
              setLoading(false);
            }}
            ref={audioPlayer}
            src={playingSrc}
            className="dropbox-embed"
            preload="metadata"
          ></audio>
          <div className="flex mb-1 justify-between p-1 w-full items-center">
            <span className="text-[14px] text-[#333] tracking-wider">
              AG player
            </span>
            <div
              onClick={ClosePlayer}
              className="bg-[#840000] hover:opacity-50 cursor-pointer w-[11px] h-[11px] rounded-[50%]"
            ></div>
          </div>
          <div className={styles.cover}></div>
          <div className={styles.title}>
            <p className="text-[12px] max-w-[170px] text-black-200 font-bold relative">
              {playingTitle}
            </p>
            {Loading ? (
              <PulseLoader color="black" />
            ) : (
              isPlaying && (
                <div className="now playing" ref={music}>
                  <span className="bar n1">A</span>
                  <span className="bar n2">B</span>
                  <span className="bar n3">c</span>
                  <span className="bar n4">D</span>
                  <span className="bar n5">E</span>
                  <span className="bar n6">F</span>
                  <span className="bar n7">G</span>
                  <span className="bar n8">H</span>
                </div>
              )
            )}
          </div>
          <div className={styles.controll}>
            <button className={styles.forwardBackward} onClick={backThirty}>
              <BsArrowLeftShort /> 30
            </button>
            <button onClick={togglePlayPause} className={styles.playPause}>
              {Loading ? (
                <ClipLoader loading={Loading} size={50} color="white" />
              ) : isPlaying && MusicReady ? (
                <FaPause />
              ) : (
                <FaPlay className={styles.play} />
              )}
            </button>
            <button className={styles.forwardBackward} onClick={forwardThirty}>
              30 <BsArrowRightShort />
            </button>
          </div>
          <div className={styles.playBar}>
            {/* current time */}
            <div className={styles.currentTime}>
              {calculateTime(currentTime)}
            </div>

            {/* progress bar */}
            <div className="cancel-player cursor-pointer">
              <input
                type="range"
                className={styles.progressBar}
                defaultValue="0"
                ref={progressBar}
                onChange={changeRange}
              />
            </div>

            {/* duration */}
            <div className={styles.duration}>
              {duration ? calculateTime(duration) : "00:00"}
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default AudioPlayer;
