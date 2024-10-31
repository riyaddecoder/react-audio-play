# Getting Started

## Installation

Welcome to the Audio Player documentation. To get started, follow the steps below:

1. **Install the package using npm:**

    ```bash
    npm install react-audio-play
    ```

2. **Alternatively, install with yarn:**

    ```bash
    yarn add react-audio-play
    ```

3. **Import and use the `AudioPlayer` component in your project:**

    ```js
    import { AudioPlayer } from 'react-audio-play';

    export default function App() {
      return <AudioPlayer src="path/to/audio.mp3" />;
    }
    ```

4. **Customize the appearance and functionality as needed.**

## Props

The **AudioPlayer** component accepts the following props:

| Prop            | Type                 | Description                                                                                   |
| --------------- | -------------------- | --------------------------------------------------------------------------------------------- |
| `className`     | string, optional     | A CSS class name for styling the component.                                                   |
| `src`           | string, required     | The URL or file path of the audio file to be played.                                           |
| `autoPlay`      | boolean, optional    | Set to `true` to autoplay the audio (default: `false`).                                        |
| `preload`       | string, optional     | <ul><li>`auto` - The audio data is loaded as soon as possible.</li> <li>`metadata` - Only metadata (e.g., duration) is loaded.</li> <li>`none` - No preloading. Audio data is only loaded when requested.</li></ul> |
| `loop`          | boolean, optional    | Set to `true` to loop the audio playback (default: `false`).                                   |
| `volume`        | number, optional     | The initial volume level (0 to 100) of the audio (default: `100`).                             |
| `hasKeyBindings`| boolean, optional    | Specifies whether the `AudioPlayer` component should enable keyboard shortcuts for volume control and seeking (default: `true`). |
| `onPlay`        | function, optional   | Callback function to execute when the audio starts playing.                                    |
| `onPause`       | function, optional   | Callback function to execute when the audio is paused.                                         |
| `onEnd`         | function, optional   | Callback function to execute when the audio playback ends.                                     |
| `onError`       | function, optional   | Callback function to execute if there’s an error loading or playing the audio.                 |
| `backgroundColor`| string, optional    | Set the background color of the audio player (default: `#fff`).                                |
| `color`         | string, optional     | The text and icon color of the audio player (default: `#566574`).                              |
| `sliderColor`   | string, optional     | The color of the progress slider (default: `#007FFF`).                                         |
| `volumePlacement`| string, optional    | Control where the volume controls are located (`top | bottom`) (default: `top`).            |
| `width`         | string, optional     | The width of the audio player. For example, `"100%"`, `"300px"`, etc.                          |
| `style`         | object, optional     | An object containing additional inline styles for the component.                               |


## Advanced Usage

Starting with version `v1.0.4`, you can access certain actions of the `AudioPlayer` component programmatically using a `ref` with the following interface:

- `play`: Function to start audio playback.
- `pause`: Function to pause audio playback.
- `stop`: Function to stop the audio playback.
- `focus`: Function to focus on the audio player component.

::: info  
[Example Here](/examples.html#example-4-usage-with-ref-available-from-v1-0-4)
:::

## Keyboard Shortcuts

Below are the keyboard shortcuts available when the audio player is focused. They can be turned off by setting the `hasKeyBindings` prop to `false`.

| Key   | Action        |
| ----- | ------------- |
| Space | Play/Pause    |
| ←     | Rewind        |
| →     | Forward       |
| ↑     | Volume up     |
| ↓     | Volume down   |


