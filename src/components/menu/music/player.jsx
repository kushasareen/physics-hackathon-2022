import React, { useState, useEffect } from "react";
import './player.scss'
import URL from './PhysicsHackathon.mp3' 
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const useAudio = url => {
  const [audio] = useState(new Audio(URL));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );
    
  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = () => {
  const [playing, toggle] = useAudio({URL});

  return (
    <div >
      
      {/* <button  onClick={toggle}>{playing ? "Pause Music" : "Play Music"}</button> */}
      {playing ? <PlayCircleOutlineIcon  onClick={toggle}> </PlayCircleOutlineIcon> : <PlayCircleIcon  onClick={toggle}> </PlayCircleIcon>}
      
    </div>
  );
};

export default Player;