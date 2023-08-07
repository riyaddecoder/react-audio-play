import React from 'react';
import ReactDOM from 'react-dom/client';
import { AudioPlayer } from 'react-audio-play';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <div style={{ width: '600px', margin: '20px auto' }}>
      <h1>React Audio Play</h1>
      <h2>This is the demonstration of react-audio-play</h2>
      <AudioPlayer src="https://download.samplelib.com/mp3/sample-12s.mp3" />
    </div>
  </React.StrictMode>
);
