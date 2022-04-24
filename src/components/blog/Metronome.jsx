import { useState, useEffect } from "react";

const useMetronome = () => {
  const [bpm, setBpm] = useState(120);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer;
    const click = new Audio("/audio/click.wav");
    if (isPlaying) {
      timer = setInterval(() => click.play(), (60 / bpm) * 1000);
    }
    return () => clearInterval(timer);
  }, [bpm, isPlaying]);

  return { bpm, setBpm, isPlaying, setIsPlaying };
};

const Metronome = () => {
  const { bpm, setBpm, isPlaying, setIsPlaying } = useMetronome();

  return (
    <div>
      <div>
        <div>{bpm} BPM</div>
        <input type="range" min="60" max="240" value={bpm} onChange={event => setBpm(event.target.value)} />
      </div>
      <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? "Stop" : "Start"}</button>
    </div>
  );
};

export default Metronome;
