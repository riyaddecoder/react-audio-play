export class AudioLibrary {
    constructor(props) {
        this.play = () => {
            this.audio.play();
        };
        this.stop = () => {
            this.audio.pause();
            this.audio.currentTime = 0;
        };
        this.audio = new Audio(props.src);
    }
}
//# sourceMappingURL=AudioLibrary.js.map