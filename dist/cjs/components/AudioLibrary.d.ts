import { AudioTypeInterface } from "./AudioTypeInterface";
export declare class AudioLibrary {
    private audio;
    constructor(props: AudioTypeInterface);
    play: () => void;
    stop: () => void;
}
