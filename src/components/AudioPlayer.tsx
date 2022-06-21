import React from 'react';
import { useRef, useState } from 'react';
import { AudioLibrary } from './AudioLibrary';
import { AudioTypeInterface } from './AudioTypeInterface';

export const AudioPlayer = (props: AudioTypeInterface) => {
    const audio = useRef(new AudioLibrary(props));
    const [isPlaying, setIsPlaying] = useState(false);

    const playOrStop = () => {
        setIsPlaying(!isPlaying);
        if (isPlaying) {
            audio.current.stop();
        } else {
            audio.current.play();
        }
    };

    return <button onClick={playOrStop}>{isPlaying ? 'Stop' : 'Play'}</button>;
};
