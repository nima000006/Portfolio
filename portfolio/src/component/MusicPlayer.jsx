import { useEffect } from "react";

const MusicPlayer = () => {
  useEffect(() => {
    const audio = new Audio("/05.mp3");
    audio.play();
  }, []);

  return null; // No UI is rendered
};

export default MusicPlayer;
