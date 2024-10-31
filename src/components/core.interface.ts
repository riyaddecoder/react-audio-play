export interface AudioInterface {
  autoPlay?: boolean;
  className?: string;
  src: string;
  loop?: boolean;
  preload?: 'auto' | 'metadata' | 'none';
  backgroundColor?: string;
  color?: string;
  width?: number | string;
  style?: React.CSSProperties;
  sliderColor?: string;
  volume?: number;
  volumePlacement?: 'top' | 'bottom';
  hasKeyBindings?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
  onEnd?: () => void;
  onError?: (event: React.SyntheticEvent<HTMLAudioElement, Event>, errorMessage: string) => void;
}

export interface AudioPlayerRef {
  play: () => void;
  pause: () => void;
  stop: () => void;
  focus: () => void;
}
