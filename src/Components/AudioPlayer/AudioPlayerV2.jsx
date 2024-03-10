import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./AudioPlayer.module.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { FaPause, FaPlay } from "react-icons/fa";
import { ClipLoader, PulseLoader } from "react-spinners";
import "./styles.css";

const AudioPlayerV2 = ({ src, title, onPlay, onPause, isPlaying }) => {
  const [loading, setLoading] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [musicIsReady, setMusicIsReady] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [error, setError] = useState(false);

  const progressBar = useRef();
  const audioPlayer = useRef();
  const animationRef = useRef();

  //   Preparing music file ------------------------------

  const loadingStarted = useCallback(() => {
    setDuration(0);
    setError(false);
    setLoading(true);
    setMusicIsReady(false);
  }, []);

  const loadingFinished = useCallback((e) => {
    setLoading(false);
  }, []);

  const readyToPlay = useCallback((e) => {
    let musicDuration = e?.currentTarget?.duration;
    progressBar.current.max = musicDuration;
    setDuration(musicDuration);
    setMusicIsReady(true);
    setLoading(false);
    setError(false);
  }, []);

  // ---------------------------------------------------

  //  Controls and runing process ---------------------

  const changePlayerCurrentTime = useCallback(() => {
    if (progressBar?.current?.style) {
      progressBar?.current.style.setProperty(
        "--seek-before-width",
        `${
          (progressBar?.current?.value / duration) * 100 > 70
            ? (progressBar?.current?.value / duration) * 100
            : (progressBar?.current?.value / duration) * 100 + 2
        }%`
      );
    }
    setCurrentTime(progressBar?.current?.value);
  }, [duration]);

  const progressBarAnimation = useCallback(() => {
    // check if music is over
    if (
      Math.floor(audioPlayer?.current?.currentTime) === Math.floor(duration)
    ) {
      // reset progress bar values and stop creating animation frame
      progressBar.current.value = 0;
      progressBar.current.style.setProperty("--seek-before-width", `${0}%`);
      audioPlayer.current.currentTime = 0;
      setCurrentTime(0);
      audioPlayer?.current.pause();
      setPlaying(false);
      cancelAnimationFrame(animationRef.current);
    } else {
      if (progressBar?.current?.value) {
        progressBar.current.value = audioPlayer?.current?.currentTime;
      }

      changePlayerCurrentTime();
      animationRef.current = requestAnimationFrame(progressBarAnimation);
    }
  }, [changePlayerCurrentTime, duration]);

  const pauseMusic = useCallback(() => {
    console.log("pause music");
    if (onPause) {
      onPause();
    }
    setPlaying(false);
    audioPlayer?.current.pause();
    cancelAnimationFrame(animationRef?.current);
  }, [onPause]);

  const playMusic = useCallback(() => {
    if (onPlay) {
      onPlay();
    }
    setPlaying(true);
    console.log("play the music");
    audioPlayer?.current.play();
    animationRef.current = requestAnimationFrame(progressBarAnimation);
  }, [onPlay, progressBarAnimation]);

  const changeRange = () => {
    setLoading(true);
    audioPlayer.current.currentTime = progressBar?.current.value;
    changePlayerCurrentTime();
  };

  const backThirty = () => {
    progressBar.current.value = Number(+progressBar.current.value - 30);
    changeRange();
  };

  const forwardThirty = () => {
    progressBar.current.value = Number(+progressBar.current.value + 30);
    changeRange();
  };

  //   ---------------------------------------------------
  // Tools -----------------------------------------------

  const calculateTime = useCallback((secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }, []);

  // effects

  useEffect(() => {
    if (musicIsReady) {
      if (isPlaying) {
        playMusic();
      } else {
        pauseMusic();
      }
    }
  }, [isPlaying, musicIsReady, pauseMusic, playMusic, playing, title]);

  // const handleBeforeUnload = useCallback(() => {
  //   console.log("unload")
  //   if(onPause) {
  //     onPause()
  //   }
  //   pauseMusic()
  // }, [onPause, pauseMusic])

  // useEffect(() => {
  //   window.addEventListener('beforeunload', handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   }
  // }, [handleBeforeUnload])

  return (
    <div className={styles.audioPlayer}>
      <audio
        src={src}
        onLoadStart={loadingStarted}
        onLoadedMetadata={loadingFinished}
        onCanPlayThrough={readyToPlay}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
        onEnded={() => {
          console.log("music finished");
        }}
        ref={audioPlayer}
        className="dropbox-embed"
        preload="metadata"
      ></audio>
      <div className={styles.cover}></div>
      <div className={styles.title}>
        <p className="text-[12px] max-w-[170px] text-black-200 font-bold relative">
          {error ? (
            <span>Failed to load the music, check your network</span>
          ) : (
            title ?? "no title provided"
          )}
        </p>
        {loading ? (
          <PulseLoader color="black" />
        ) : (
          playing && (
            <div className="now playing">
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

        {loading ? (
          <button className={styles.playPause}>
            <ClipLoader loading={loading} size={50} color="white" />
          </button>
        ) : playing && musicIsReady ? (
          <button onClick={pauseMusic} className={styles.playPause}>
            <FaPause />
          </button>
        ) : (
          <button onClick={playMusic} className={styles.playPause}>
            <FaPlay className={styles.play} />
          </button>
        )}
        <button className={styles.forwardBackward} onClick={forwardThirty}>
          30 <BsArrowRightShort />
        </button>
      </div>
      <div className={styles.playBar}>
        {/* current time */}
        <div className={styles.currentTime}>
          {calculateTime(currentTime) ?? "00:00"}
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
  );
};

export default AudioPlayerV2;
