import React from 'react';
import ReactDOM from 'react-dom/client';
import { AudioPlayer } from 'react-audio-play';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AudioPlayer src="https://download.samplelib.com/mp3/sample-12s.mp3" />
  </React.StrictMode>
);
