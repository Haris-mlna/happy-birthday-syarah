import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Questioner from "./pages/Questioner";
import Result from "./pages/Result";
import music from "./assets/audio/Romantic Happy Birthday (Arranged by Miranda Wong) Piano Cover.m4a";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";

import "./styles/button.scss";
import "./styles/global.scss";

function App() {
  const [isAudioPlay, setIsAudioPlay] = useState(false);
  const [audioRef, setIsAudioref] = useState(null);

  const playAudio = () => {
    if (isAudioPlay) {
      audioRef.pause();
    } else {
      audioRef.play();
    }
  };
  return (
    <>
      <button
        onClick={() => {
          setIsAudioPlay((prev) => !prev);
          playAudio();
        }}
        className="audio-btn"
      >
        {isAudioPlay ? (
          <BsFillPauseFill className="icons-audio" />
        ) : (
          <BsFillPlayFill className="icons-audio" />
        )}
      </button>
      <audio src={music} loop autoPlay ref={(ref) => setIsAudioref(ref)} />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/questioner" element={<Questioner />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
