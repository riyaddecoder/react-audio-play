# Example Usage

Below are examples of how you can use the `AudioPlayer` component. Replace `path/to/audio.mp3` with the actual URL or path of your audio file.

## Example 1: Basic usage with default props

```js
import { AudioPlayer } from "react-audio-play";

export default function App() {
  return <AudioPlayer src="path/to/audio.mp3" />;
}
```

Preview

<AudioPlayerWrapper :src="music.nextMusic().url" />

<small>Music Source: <a :href="music.getCurrentMusic().sourceLink" target="_blank">{{music.getCurrentMusic().title}}</a></small>

## Example 2: Looping audio, set the volume to 50% and volume control placement bottom

```js
import { AudioPlayer } from "react-audio-play";

export default function App() {
  return (
    <AudioPlayer
      loop
      src="path/to/audio.mp3"
      volume={50}
      volumePlacement="bottom"
    />
  );
}
```

Preview

<AudioPlayerWrapper :src="music.nextMusic().url" :loop="true" :volume="50" volumePlacement="bottom"/>

<small>Music Source: <a :href="music.getCurrentMusic().sourceLink" target="_blank">{{music.getCurrentMusic().title}}</a></small>

## Example 3: Using audio callbacks

```js
import { AudioPlayer } from "react-audio-play";

export default function App() {
  const handlePlay = () => {
    console.log("Audio started playing");
  };

  const handlePause = () => {
    console.log("Audio paused");
  };

  const handleEnd = () => {
    console.log("Audio ended");
  };

  const handleError = (event, errorMessage) => {
    console.log(errorMessage);
  };

  return (
    <AudioPlayer
      src="path/to/audio.mp3"
      onPlay={handlePlay}
      onPause={handlePause}
      onEnd={handleEnd}
      onError={handleError}
    />
  );
}
```

Preview

<AudioPlayerWrapper :src="music.nextMusic().url" :onPlay="() => {console.log('Audio started playing')}" :onPause="() => {console.log('Audio paused')}" :onEnd="() => {console.log('Audio ended')}"/>

<small>Music Source: <a :href="music.getCurrentMusic().sourceLink" target="_blank">{{music.getCurrentMusic().title}}</a></small>

## Example 4: Usage with ref (available from v1.0.4)

```tsx
import { useRef } from 'react';
import { AudioPlayer, AudioPlayerRef } from 'react-audio-play';

function App() {
  const playerRef = useRef<AudioPlayerRef>(null);

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
    <div>
      <AudioPlayer ref={playerRef} src="path/to/audio.mp3" autoPlay />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}

```

Preview

<AudioPlayerRefExample :src="music.nextMusic().url"/>

<small>Music Source: <a :href="music.getCurrentMusic().sourceLink" target="_blank">{{music.getCurrentMusic().title}}</a></small>

## Example 5: Darkmode using basic style props

```js
import { AudioPlayer } from "react-audio-play";

export default function App() {
  return (
    <AudioPlayer
      src="path/to/audio.mp3"
      color="#cfcfcf"
      sliderColor="#94b9ff"
      backgroundColor="#2c2828"
    />
  );
}
```

Preview

<AudioPlayerWrapper :src="music.nextMusic().url" color="#cfcfcf" sliderColor="#94b9ff" backgroundColor="#2c2828"/>

<small>Music Source: <a :href="music.getCurrentMusic().sourceLink" target="_blank">{{music.getCurrentMusic().title}}</a></small>

## Example 6: Using Style Object

```js
import { AudioPlayer } from "react-audio-play";

export default function App() {
  return (
    <AudioPlayer
      src="path/to/audio.mp3"
      color="#f7b5cd"
      sliderColor="#ff669d"
      style={{ background: "#000", borderRadius: "15px", padding: "30px" }}
    />
  );
}
```

Preview

<AudioPlayerWrapper :src="music.nextMusic().url" color="#f7b5cd" sliderColor="#ff669d" :style='{ background: "#000", borderRadius: "15px", padding: "30px" }'/>

<small>Music Source: <a :href="music.getCurrentMusic().sourceLink" target="_blank">{{music.getCurrentMusic().title}}</a></small>

## Example 7: Using Custom CSS

::: code-group

```css [CSS]
.custom-style.rap-container {
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);
  color: aliceblue;
}

.custom-style.rap-container .rap-pp-icon path,
.custom-style.rap-container .rap-volume-btn path {
  fill: white;
}

.custom-style.rap-container .rap-slider .rap-progress {
  background-color: #daecff;
}

.custom-style.rap-container .rap-volume .rap-volume-controls {
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);
}

.custom-style.rap-container .rap-slider .rap-progress .rap-pin {
  background-color: #c3d5ff;
  box-shadow: 0 0 9px 7px #269eff52;
}

.custom-style.rap-container svg.rap-pp-icon:hover,
.custom-style.rap-container .rap-volume-btn svg:hover {
  filter: drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.9));
}
```

```js [TSX]
import { AudioPlayer } from "react-audio-play";

export default function App() {
  return <AudioPlayer className="custom-style" src="path/to/audio.mp3" />;
}
```

:::

::: warning
Use a wrapper class to avoid CSS override issues. Ex: `.custom-style`
:::

Preview

<AudioPlayerWrapper :src="music.nextMusic().url" className="custom-style1"/>

<small>Music Source: <a :href="music.getCurrentMusic().sourceLink" target="_blank">{{music.getCurrentMusic().title}}</a></small>

## Example 8: More Playing With CSS

::: code-group

```css [CSS]
.custom-style.rap-container {
  background-color: #e4e4e4;
  color: #566574;
  border-radius: 20px;
}

.custom-style.rap-container .rap-slider .rap-progress {
  background-color: #959595;
}

.custom-style.rap-container .rap-slider .rap-progress .rap-pin {
  background-color: #566574;
  height: 18px;
  width: 18px;
  border-radius: 10px;
}

.custom-style.rap-container .rap-controls .rap-slider .rap-progress .rap-pin {
  top: -5px;
}

.custom-style.rap-container .rap-controls .rap-slider {
  height: 8px;
  border-radius: 4px;
}

.custom-style.rap-container .rap-volume .rap-volume-btn.rap-volume-open path {
  fill: #000;
}

.custom-style.rap-container .rap-volume .rap-volume-controls {
  background-color: #e4e4e4;
}

.custom-style.rap-container .rap-volume .rap-volume-controls .rap-slider,
.custom-style.rap-container
  .rap-volume
  .rap-volume-controls
  .rap-slider
  .rap-progress {
  width: 8px;
}
```

```js [TSX]
import { AudioPlayer } from "react-audio-play";

export default function App() {
  return <AudioPlayer className="custom-style" src="path/to/audio.mp3" />;
}
```

:::

::: warning
Use a wrapper class to avoid CSS override issues. Ex: `.custom-style`
:::

Preview

<AudioPlayerWrapper :src="music.nextMusic().url" className="custom-style2"/>

<small>Music Source: <a :href="music.getCurrentMusic().sourceLink" target="_blank">{{music.getCurrentMusic().title}}</a></small>

<script setup>
import { Music } from './.vitepress/lib/Music.ts';
import AudioPlayerWrapper from './.vitepress/components/AudioPlayerWrapper.vue'; 
import AudioPlayerRefExample from './.vitepress/components/AudioPlayerRefExample.vue'; 

const music = new Music();
</script>
