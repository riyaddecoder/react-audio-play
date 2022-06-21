import React from 'react';
import { useRef, useState } from 'react';
import { AudioLibrary } from './AudioLibrary';
export const AudioPlayer = (props) => {
    const audio = useRef(new AudioLibrary(props));
    const [isPlaying, setIsPlaying] = useState(false);
    const playOrStop = () => {
        setIsPlaying(!isPlaying);
        if (isPlaying) {
            audio.current.stop();
        }
        else {
            audio.current.play();
        }
    };
    return React.createElement("button", { onClick: playOrStop }, isPlaying ? 'Stop' : 'Play');
};
//# sourceMappingURL=AudioPlayer.js.map