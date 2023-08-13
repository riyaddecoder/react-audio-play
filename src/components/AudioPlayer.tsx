import React, { useEffect, useRef, useState } from 'react';
import { iconPaths } from '../helpers/icons/icons';
import { formatTime } from '../helpers/utils/formatTime';
import { getRangeBox } from '../helpers/utils/getRangeBox';
import './audioPlay.css';

export interface AudioInterface {
  src: string;
  loop?: boolean;
  backgroundColor?: string;
  color?: string;
  style?: React.CSSProperties;
  sliderColor?: string;
  volume?: number;
  volumePlacement?: 'top' | 'bottom';
  onPlay?: () => void;
  onPause?: () => void;
  onEnd?: () => void;
  onError?: () => void;
}

export const AudioPlayer: React.FC<AudioInterface> = ({ src, loop = false, backgroundColor, color, style, sliderColor, volume = 100, volumePlacement = 'top', onPlay, onPause, onEnd, onError }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const currentlyDragged = useRef<HTMLDivElement | null>(null);
  const rewindPin = useRef<HTMLDivElement | null>(null);
  const volumePin = useRef<HTMLDivElement | null>(null);
  const [canPlay, setCanPlay] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progressBarPercent, setProgressBarPercent] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<string>('0:00');
  const [totalTime, setTotalTime] = useState<string>('0:00');
  const [volumeOpen, setVolumeOpen] = useState<boolean>(false);
  const [volumeProgress, setVolumeProgress] = useState<number>(100);
  const [speakerIcon, setSpeakerIcon] = useState<string>(getVolumePath(volume));

  useEffect(() => {
    if (!isNaN(volume)) {
      const tempVol = volume > 100 ? 100 : volume < 0 ? 0 : volume;
      setVolumeProgress(tempVol);
      if (audioRef.current) {
        audioRef.current.volume = tempVol / 100;
      }
    }
  }, [volume]);

  const handleCanPlay = () => {
    setCanPlay(true);
  };

  const handleOnError = () => {
    if (onError) {
      onError();
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      if (onEnd) {
        onEnd();
      }
    }
  };

  const handleUpdateVolume = () => {
    if (audioRef.current) {
      setVolumeProgress(audioRef.current.volume * 100);
      if (audioRef.current.volume >= 0.5) {
        setSpeakerIcon(iconPaths.fullVolume);
      } else if (audioRef.current.volume < 0.5 && audioRef.current.volume > 0.05) {
        setSpeakerIcon(iconPaths.midVolume);
      } else if (audioRef.current.volume <= 0.05) {
        setSpeakerIcon(iconPaths.lowVolume);
      }
    }
  };

  const handleUpdateProgress = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const percent = (current / audioRef.current.duration) * 100;
      setProgressBarPercent(percent);
      setCurrentTime(formatTime(current));
    }
  };

  const handleLoadedMetaData = () => {
    setTotalTime(formatTime(audioRef.current?.duration ?? 0));
  };

  function getVolumePath(volumeLevel: number) {
    const MIN_VOLUME = 0;
    const MAX_VOLUME = 100;

    volumeLevel = isNaN(volumeLevel) ? 100 : Math.max(MIN_VOLUME, Math.min(volumeLevel, MAX_VOLUME));

    if (volumeLevel >= 50) {
      return iconPaths.fullVolume;
    } else if (volumeLevel > 5) {
      return iconPaths.midVolume;
    }

    return iconPaths.lowVolume;
  }

  const togglePlay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
        if (onPlay) {
          onPlay();
        }
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
        if (onPause) {
          onPause();
        }
      }
    }
  };

  const inRange = (event: MouseEvent | React.MouseEvent<HTMLDivElement>) => {
    const rangeBox = getRangeBox(event, currentlyDragged.current);
    const rect = rangeBox.getBoundingClientRect();
    const direction = rangeBox.dataset.direction;
    let max, min;
    if (direction === 'horizontal') {
      min = rangeBox.offsetLeft;
      max = min + rangeBox.offsetWidth;
      if (event.clientX < min || event.clientX > max) return false;
    } else {
      min = rect.top;
      max = min + rangeBox.offsetHeight;
      if (event.clientY < min || event.clientY > max) return false;
    }
    return true;
  };

  function getCoefficient(event: MouseEvent | React.MouseEvent<HTMLDivElement>) {
    const slider = getRangeBox(event, currentlyDragged.current);
    const rect = slider.getBoundingClientRect();
    let K = 0;
    if (slider.dataset.direction === 'horizontal') {
      const offsetX = event.clientX - slider.offsetLeft;
      const width = slider.clientWidth;
      K = offsetX / width;
    } else if (slider.dataset.direction === 'vertical') {
      const height = slider.clientHeight;
      const offsetY = event.clientY - rect.top;
      K = 1 - offsetY / height;
    }
    return K;
  }

  const rewind = (event: MouseEvent | React.MouseEvent<HTMLDivElement>) => {
    if (inRange(event) && audioRef.current) {
      const currentTime = audioRef.current.duration * getCoefficient(event);
      audioRef.current.currentTime = currentTime;
    }
  };

  const changeVolume = (event: MouseEvent | React.MouseEvent<HTMLDivElement>) => {
    if (inRange(event) && audioRef.current) {
      audioRef.current.volume = getCoefficient(event);
    }
  };

  const handleRewindMouseDown = () => {
    currentlyDragged.current = rewindPin.current;

    window.addEventListener('mousemove', rewind, false);

    window.addEventListener(
      'mouseup',
      () => {
        currentlyDragged.current = null;
        window.removeEventListener('mousemove', rewind, false);
      },
      { once: true }
    );
  };

  const handleVolumeMouseDown = () => {
    currentlyDragged.current = volumePin.current;

    window.addEventListener('mousemove', changeVolume, false);

    window.addEventListener(
      'mouseup',
      () => {
        currentlyDragged.current = null;
        window.removeEventListener('mousemove', changeVolume, false);
      },
      false
    );
  };

  return (
    <div
      className="rap-container"
      style={{
        ...(backgroundColor ? { backgroundColor: backgroundColor } : {}),
        ...(color ? { color: color } : {}),
        ...style
      }}
    >
      {!canPlay && (
        <div className="rap-loading">
          <div className="rap-spinner"></div>
        </div>
      )}
      {canPlay && (
        <div className="rap-pp-button" onClick={() => togglePlay()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24" className="rap-pp-icon">
            <path fill={color ?? '#566574'} fillRule="evenodd" d={isPlaying ? iconPaths.pause : iconPaths.play} />
          </svg>
        </div>
      )}

      <div className="rap-controls">
        <span className="rap-current-time">{currentTime}</span>
        <div className="rap-slider" data-direction="horizontal" onMouseDown={handleRewindMouseDown} onClick={rewind}>
          <div
            className="rap-progress"
            style={{
              ...{ width: progressBarPercent + '%' },
              ...(sliderColor ? { backgroundColor: sliderColor } : {})
            }}
          >
            <div ref={rewindPin} className="rap-pin" data-method="rewind" onMouseDown={handleRewindMouseDown} style={sliderColor ? { backgroundColor: sliderColor } : {}}></div>
          </div>
        </div>
        <span className="rap-total-time">{totalTime}</span>
      </div>

      <div className="rap-volume">
        <div className={`rap-volume-btn ${volumeOpen ? 'rap-volume-open' : ''}`} onClick={() => setVolumeOpen((vol) => !vol)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill={volumeOpen ? sliderColor ?? '#007FFF' : color ?? '#566574'} fillRule="evenodd" d={speakerIcon} />
          </svg>
        </div>
        <div className={`${volumePlacement === 'bottom' ? 'rap-vol-placement-bottom' : 'rap-vol-placement-top'} ${!volumeOpen ? 'rap-hidden' : ''}`}>
          <div
            className={`rap-volume-controls`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <div className="rap-slider" data-direction="vertical" onClick={changeVolume} onMouseDown={handleVolumeMouseDown}>
              <div
                className="rap-progress"
                style={{
                  ...{ height: `${volumeProgress}%` },
                  ...(sliderColor ? { backgroundColor: sliderColor } : {})
                }}
              >
                <div ref={volumePin} className="rap-pin" data-method="changeVolume" style={sliderColor ? { backgroundColor: sliderColor } : {}} onMouseDown={handleVolumeMouseDown}></div>
              </div>
            </div>
          </div>
          <div className="rap-backdrop" onClick={() => setVolumeOpen(false)}></div>
        </div>
      </div>

      <audio
        ref={audioRef}
        loop={loop}
        onCanPlay={handleCanPlay}
        onEnded={handleEnded}
        onError={handleOnError}
        onLoadedMetadata={handleLoadedMetaData}
        onTimeUpdate={handleUpdateProgress}
        onVolumeChange={handleUpdateVolume}
      >
        <source src={src} type="audio/mpeg" />
      </audio>
    </div>
  );
};