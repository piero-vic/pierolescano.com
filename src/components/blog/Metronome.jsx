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
    <div className="not-prose my-8 mx-auto max-w-md rounded-xl border border-green bg-[#292d3e] p-4">
      <div>
        <div className="font-bold text-green">{bpm} BPM</div>
        <input
          className="w-full"
          type="range"
          min="60"
          max="240"
          value={bpm}
          onChange={event => setBpm(event.target.value)}
        />
      </div>
      <button
        className={`w-1/4 rounded-xl border px-2 font-bold text-black ${
          isPlaying ? "border-red bg-red" : "border-green bg-green"
        }`}
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default Metronome;
