import { AudioTypeInterface } from './AudioTypeInterface';

export class AudioLibrary {
  private audio: any;

  constructor(props: AudioTypeInterface) {
    this.audio = new Audio(props.src);
  }

  play = () => {
    this.audio.play();
  };

  stop = () => {
    this.audio.pause();
    this.audio.currentTime = 0;
  };
}
