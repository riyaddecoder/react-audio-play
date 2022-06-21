"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioPlayer = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const AudioLibrary_1 = require("./AudioLibrary");
const AudioPlayer = (props) => {
    const audio = (0, react_2.useRef)(new AudioLibrary_1.AudioLibrary(props));
    const [isPlaying, setIsPlaying] = (0, react_2.useState)(false);
    const playOrStop = () => {
        setIsPlaying(!isPlaying);
        if (isPlaying) {
            audio.current.stop();
        }
        else {
            audio.current.play();
        }
    };
    return react_1.default.createElement("button", { onClick: playOrStop }, isPlaying ? 'Stop' : 'Play');
};
exports.AudioPlayer = AudioPlayer;
//# sourceMappingURL=AudioPlayer.js.map