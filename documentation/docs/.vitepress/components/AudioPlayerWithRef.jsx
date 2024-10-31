import React, { useRef } from 'react';
import { AudioPlayer } from 'react-audio-play';

export default function AudioPlayerWithRef(props) {
  const playerRef = useRef(null);

  const handlePlay = () => {
    playerRef.current?.play();
  };

  const handlePause = () => {
    playerRef.current?.pause();
  };

  const handleStop = () => {
    playerRef.current?.stop();
  };

  const handleFocus = () => {
    playerRef.current?.focus();
  };

  return (
    <div className='audio-example-with-ref'>
      <AudioPlayer ref={playerRef} src={props.src} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}
