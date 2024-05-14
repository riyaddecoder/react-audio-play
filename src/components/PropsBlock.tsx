import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import * as Tooltip from '@radix-ui/react-tooltip';

const PropsBlock = () => {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold">Props</h2>
      <p className="mt-2">
        The <code className="bg-gray-100 p-1">AudioPlayer</code> component accepts the following props:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li className="mt-2">
          <code className="bg-gray-100 p-1">className</code> (string, optional): A CSS class name for styling the component.
        </li>
        <li className="mt-2">
          <code className="bg-gray-100 p-1">src</code> (string, required): The URL or file path of the audio file to be played.
        </li>
        <li className="mt-2">
          <div className="inline-flex items-center">
            <code className="bg-gray-100 p-1">autoPlay</code> (boolean, optional): Set to <code className="bg-gray-100 p-1">true</code> to autoplay the audio (default:{' '}
            <code className="bg-gray-100 p-1">false</code>).
            <Tooltip.Provider>
              <Tooltip.Root delayDuration={0}>
                <Tooltip.Trigger asChild>
                  <div>
                    <FaExclamationTriangle className="cursor-pointer text-red-500 ml-2" />
                  </div>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content sideOffset={5} className="bg-slate-800 p-2 rounded text-sm">
                    <span className="text-white">Autoplay may be blocked by the browser if there is no interaction.</span>
                    <br />
                    <span className="text-white">
                      Please check the{' '}
                      <a className="text-blue-200" target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide#autoplay_availability" rel="noreferrer">
                        Autoplay availability guide
                      </a>
                    </span>
                    <Tooltip.Arrow />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
        </li>
        <li className="mt-2">
          <code className="bg-gray-100 p-1">preload</code> (string, optional): Specifies the preload behavior for the audio file. Possible values are.
          <ul className="list-disc list-inside mt-2">
            <li className="ml-4 mt-1">
              <code className="bg-gray-100 p-1">auto</code> The audio data is loaded as soon as possible.
            </li>
            <li className="ml-4 mt-1">
              <code className="bg-gray-100 p-1">metadata</code> Only metadata (e.g., duration) is loaded.
            </li>
            <li className="ml-4 mt-1">
              <code className="bg-gray-100 p-1">none</code> No preloading. Audio data is only loaded when requested.
            </li>
          </ul>
        </li>
        <li className="mt-2">
          <code className="bg-gray-100 p-1">loop</code> (boolean, optional): Set to <code className="bg-gray-100 p-1">true</code> to loop the audio playback (default:{' '}
          <code className="bg-gray-100 p-1">false</code>).
        </li>
        <li className="mt-2">
          <code className="bg-gray-100 p-1">volume</code> (number, optional): The initial volume level (0 to 100) of the audio (default: <code className="bg-gray-100 p-1">100</code>).
        </li>
        <li className="mt-2">
          <code className="bg-gray-100 p-1">hasKeyBindings</code> (boolean, optional): Specifies whether the <code className="bg-gray-100 p-1">AudioPlayer</code> component should enable keyboard
          shortcuts for volume control and seeking. Default is <code className="bg-gray-100 p-1">true</code>.
        </li>
        <li className="mt-2">
          <code className="bg-gray-100 p-1">onPlay</code> (function, optional): Callback function to execute when the audio starts playing.
        </li>
        <li className="mt-2">
          <code className="bg-gray-100 p-1">onPause</code> (function, optional): Callback function to execute when the audio is paused.
        </li>
        <li className="mt-2">
          <code className="bg-gray-100 p-1">onEnd</code> (function, optional): Callback function to execute when the audio playback ends.
        </li>
        <li className="mt-2">
          <code className="bg-gray-100 p-1">onError</code> (function, optional): Callback function to execute if there&quot;s an error loading or playing the audio.
        </li>
        <li className="mt-2">
          <code className="bg-gray-100 p-1">backgroundColor</code> (string, optional): Set the background color of the audio player (default: <code className="bg-gray-100 p-1">#fff</code>).
        </li>
        <li className="mt-2">
          <code className="bg-gray-100 p-1">color</code> (string, optional): The text and icon color of the audio player (default: <code className="bg-gray-100 p-1">#566574</code>).
        </li>
        <li className="mt-2">
          <code className="bg-gray-100 p-1">sliderColor</code> (string, optional): The color of the progress slider (default: <code className="bg-gray-100 p-1">#007FFF</code>).
          <li className="mt-2">
            <code className="bg-gray-100 p-1">volumePlacement</code> (string, optional): Control where the volume controls are located (<code className="bg-gray-100 p-1">top | bottom</code>) (default:{' '}
            <code className="bg-gray-100 p-1">bottom</code>).
          </li>
        </li>
        <li className="mt-2">
          <code className="bg-gray-100 p-1">width</code> (string, optional): The width of the audio player. Use this prop to set the width of the player. For example,{' '}
          <code className="bg-gray-100 p-1">&quot;100%&quot;</code>, <code className="bg-gray-100 p-1">&quot;300px&quot;</code>, etc.
        </li>
        <li className="mt-2">
          <code className="bg-gray-100 p-1">style</code> (string, optional): An object containing additional inline styles for the component.
        </li>
      </ul>
    </section>
  );
};

export default PropsBlock;
