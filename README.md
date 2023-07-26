[![NPM](https://img.shields.io/npm/v/react-select.svg)](https://www.npmjs.com/package/react-audio-play)
<a href="https://github.com/riyaddecoder/react-audio-play/issues">
  <img src="https://img.shields.io/github/issues/riyaddecoder/react-audio-play"/>
</a>
<a href="https://github.com/riyaddecoder/react-audio-play/blob/master/LICENSE">
  <img src="https://img.shields.io/github/license/riyaddecoder/react-audio-play"/>
</a>
<a href="https://www.buymeacoffee.com/riyaddecoder">
  <img src="https://img.shields.io/badge/sponsor-buy%20me%20a%20coffee-yellow?logo=buymeacoffee"/>
</a>


## react-audio-play

`react-audio-play` is a simple and customizable audio player npm package for React applications. It provides an easy-to-use interface to play audio files in your React components with minimal setup.

![react-audio-play](https://example.com/react-audio-play-demo.gif)

## Features

- Play audio files in your React application with a single component.
- Control playback with play, pause, stop, and volume adjustment functionality.
- Display track progress with a customizable progress bar.
- Trigger custom actions on audio events like onPlay, onPause, onStop, onEnd, etc.
- Fully customizable appearance to match your application's design.

## Installation

You can install `react-audio-play` using npm or yarn:

```bash
npm install react-audio-play
```
or
```bash
yarn add react-audio-play
```

## Usage

To use `react-audio-play`, import the `AudioPlayer` component and provide the necessary props:

```js
import React from 'react';
import AudioPlayer from 'react-audio-play';

const App = () => {
  return (
    <div>
      <h1>My Audio Player</h1>
      <AudioPlayer src="path/to/audio.mp3" />
    </div>
  );
};

export default App;
```
## Props
`react-audio-play` accepts the following props:

- `src` (string, required): The URL or file path of the audio file to be played.
- `loop` (boolean, optional): Set to true to loop the audio playback (default: false).
- `volume` (number, optional): The initial volume level (0 to 100) of the audio (default: `100`).
- `onPlay` (function, optional): Callback function to execute when the audio starts playing.
- `onPause` (function, optional): Callback function to execute when the audio is paused.
- `onEnd` (function, optional): Callback function to execute when the audio playback ends.
- `onError` (function, optional): Callback function to execute if there's an error loading or playing the audio.
- `backgroundColor` (string, optional): Set the background color of the audio player (default: `#fff`).
- `color` (string, optional): The text and icon color of the audio player. (default: `#000`).
- `sliderColor` (string, optional): The color of the progress slider. (default: `#44bfa3`)

## Example with Custom Event Handling
```js
import React from 'react';
import AudioPlayer from 'react-audio-play';

const App = () => {
  const handlePlay = () => {
    console.log('Audio started playing');
  };

  const handlePause = () => {
    console.log('Audio paused');
  };

  return (
    <div>
      <h1>My Audio Player</h1>
      <AudioPlayer
        src="path/to/audio.mp3"
        autoPlay
        controls
        onPlay={handlePlay}
        onPause={handlePause}
      />
    </div>
  );
};

export default App;
```
## Custom Styling
You can easily customize the appearance of the audio player by applying your CSS styles to the AudioPlayer component or by overriding the default styles in your project's CSS.

## License
This package is open-source and distributed under the MIT License. See the [LICENSE](https://github.com/riyaddecoder/react-audio-play/blob/master/LICENSE) file for details.

## Contribution
Contributions are welcome! If you find any issues or have suggestions, feel free to create an issue or submit a pull request on the [GitHub repository](https://github.com/riyaddecoder/react-audio-play/). Let's build this package together!

![react-audio-play](https://example.com/react-audio-play-demo.gif)

Enjoy using react-audio-play in your React applications, and we hope it enhances your audio experience with ease and flexibility. If you have any questions or need further assistance, don't hesitate to reach out to us! Happy coding! 🎶
