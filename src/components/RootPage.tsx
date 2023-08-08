import React, { useState, useRef, useEffect } from 'react';
import { AudioPlayer } from 'react-audio-play';
import { FiCopy } from 'react-icons/fi';
import Prism from 'prismjs';

const ExampleUsage = () => {
  useEffect(() => {
    Prism.highlightAll();
    for (const elem of document.getElementsByClassName('language-js')) {
      if (elem.tagName === 'CODE') {
        elem.classList.remove('language-js');
      }
    }
  }, []);

  const audioSrc = 'https://download.samplelib.com/mp3/sample-12s.mp3';
  const codeRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const codeElement = codeRef.current;
    if (codeElement) {
      const range = document.createRange();
      range.selectNode(codeElement);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      document.execCommand('copy');
      window.getSelection()?.removeAllRanges();

      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-gray-200 p-4 rounded-t-md shadow-lg mb-4">
        <h1 className="text-blue-500 text-4xl font-bold text-center pb-2">React Audio Play</h1>
        <p className="text-gray-600 text-center">Explore the features and usage of our versatile audio player component.</p>
      </header>

      <main className="p-8">
        <div className="bg-white p-6 rounded-md shadow-lg mb-4">
          <section>
            <h2 className="text-3xl font-bold text-gray-800">Getting Started</h2>
            <p className="text-gray-600 mt-4">Welcome to the Audio Player documentation. To get started, follow the steps below:</p>
            <ol className="list-decimal list-inside mt-4 text-gray-800">
              <li className="mb-2">
                Install the package using npm:
                <code className="bg-gray-100 p-1 mx-2">npm install react-audio-play</code>
              </li>
              <li className="mb-2">
                Alternatively, install with yarn:
                <code className="bg-gray-100 p-1 mx-2">yarn add react-audio-play</code>
              </li>
              <li className="mb-2">
                Import and use the <code className="bg-gray-100 p-1">AudioPlayer</code> component in your project.
              </li>
              <li>Customize the appearance and functionality as needed.</li>
            </ol>
          </section>

          <hr className="my-6 border-gray-300" />

          <section className="mt-8">
            <h2 className="text-2xl font-bold">Props</h2>
            <p className="mt-2">
              The <code className="bg-gray-100 p-1">AudioPlayer</code> component accepts the following props:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>
                <code className="bg-gray-100 p-1">src</code> (string, required): The URL or file path of the audio file to be played.
              </li>
              <li>
                <code className="bg-gray-100 p-1">loop</code> (boolean, optional): Set to <code className="bg-gray-100 p-1">true</code> to loop the audio playback (default:{' '}
                <code className="bg-gray-100 p-1">false</code>).
              </li>
              <li>
                <code className="bg-gray-100 p-1">volume</code> (number, optional): The initial volume level (0 to 100) of the audio (default: <code className="bg-gray-100 p-1">100</code>).
              </li>
              <li>
                <code className="bg-gray-100 p-1">onPlay</code> (function, optional): Callback function to execute when the audio starts playing.
              </li>
              <li>
                <code className="bg-gray-100 p-1">onPause</code> (function, optional): Callback function to execute when the audio is paused.
              </li>
              <li>
                <code className="bg-gray-100 p-1">onEnd</code> (function, optional): Callback function to execute when the audio playback ends.
              </li>
              <li>
                <code className="bg-gray-100 p-1">onError</code> (function, optional): Callback function to execute if there&quot;s an error loading or playing the audio.
              </li>
              <li>
                <code className="bg-gray-100 p-1">backgroundColor</code> (string, optional): Set the background color of the audio player (default: <code className="bg-gray-100 p-1">#fff</code>).
              </li>
              <li>
                <code className="bg-gray-100 p-1">color</code> (string, optional): The text and icon color of the audio player (default: <code className="bg-gray-100 p-1">#566574</code>).
              </li>
              <li>
                <code className="bg-gray-100 p-1">sliderColor</code> (string, optional): The color of the progress slider (default: <code className="bg-gray-100 p-1">#007FFF</code>).
              </li>
            </ul>
          </section>

          <hr className="my-6 border-gray-300" />

          <section className="p-4">
            <h2 className="text-2xl font-bold text-black mb-4">Example Usage</h2>
            <p className="mt-4 text-black">
              Below are examples of how you can use the <code className="bg-gray-100 p-1">AudioPlayer</code> component. Replace <code className="bg-gray-100 p-1">path/to/audio.mp3</code> with the
              actual URL or path of your audio file.
            </p>

            {/* example 1 */}
            <div className="mt-5 mb-5 ml-4">
              <h3 className=" text-xl font-bold mb-5">Example 1: Basic usage with default props</h3>
              <div className=" flex flex-wrap items-stretch">
                {/* Audio Player Preview */}
                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-2">
                  <AudioPlayer src={audioSrc} />
                </div>
                {/* Code Viewer */}
                <div className="w-full md:w-1/2 relative code-background rounded">
                  <pre className="language-js p-2">
                    <code>{`import AudioPlayer from 'react-audio-play'\n\nexport default function App() {\n  return <AudioPlayer src="path/to/audio.mp3" />\n}`}</code>
                  </pre>
                  <button className="absolute top-2 right-2 text-gray-100 bg-gray-800 hover:bg-gray-700 rounded-md px-2 py-1 text-sm transition duration-300" onClick={copyToClipboard}>
                    {copied ? <span>Copied!</span> : <FiCopy className="w-6 h-6" />}
                  </button>
                </div>
              </div>
            </div>

            {/* example 2 */}
            <div className="mt-8 ml-4">
              <h3 className=" text-xl font-bold mb-5">Example 2: Looping audio and set the volume to 50%</h3>
              <div className=" flex flex-wrap items-stretch">
                {/* Audio Player Preview */}
                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-2">
                  <AudioPlayer src={audioSrc} loop volume={50} />
                </div>
                {/* Code Viewer */}
                <div className="w-full md:w-1/2 relative code-background rounded">
                  <pre className="language-js p-2">
                    <code>{`import AudioPlayer from 'react-audio-play'\n\nexport default function App() {\n  return <AudioPlayer \n\t\t\t\t\tloop\n\t\t\t\t\tsrc="path/to/audio.mp3"\n\t\t\t\t\tvolume={50}\n\t\t\t\t/>\n}`}</code>
                  </pre>
                  <button className="absolute top-2 right-2 text-gray-100 bg-gray-800 hover:bg-gray-700 rounded-md px-2 py-1 text-sm transition duration-300" onClick={copyToClipboard}>
                    {copied ? <span>Copied!</span> : <FiCopy className="w-6 h-6" />}
                  </button>
                </div>
              </div>
            </div>

            {/* example 3 */}
            <div className="mt-8 ml-4">
              <h3 className=" text-xl font-bold mb-5">Example 3: Darkmode using basic style props</h3>
              <div className=" flex flex-wrap items-stretch">
                {/* Audio Player Preview */}
                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-2">
                  <AudioPlayer src={audioSrc} backgroundColor="#2c2828" color="#cfcfcf" sliderColor="#94b9ff" />
                </div>
                {/* Code Viewer */}
                <div className="w-full md:w-1/2 relative code-background rounded">
                  <pre className="language-js p-2">
                    <code>{`import AudioPlayer from 'react-audio-play'\n\nexport default function App() {\n  return <AudioPlayer \n\t\t\t\t\tsrc="path/to/audio.mp3"\n\t\t\t\t\tcolor="#cfcfcf" \n\t\t\t\t\tsliderColor="#94b9ff" \n\t\t\t\t\tbackgroundColor="#2c2828" \n\t\t\t\t/>\n}`}</code>
                  </pre>
                  <button className="absolute top-2 right-2 text-gray-100 bg-gray-800 hover:bg-gray-700 rounded-md px-2 py-1 text-sm transition duration-300" onClick={copyToClipboard}>
                    {copied ? <span>Copied!</span> : <FiCopy className="w-6 h-6" />}
                  </button>
                </div>
              </div>
            </div>

            {/* example 4 */}
            <div className="mt-8 ml-4">
              <h3 className=" text-xl font-bold mb-5">Example 4: Using Style Object</h3>
              <div className=" flex flex-wrap items-stretch">
                {/* Audio Player Preview */}
                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-2">
                  <AudioPlayer src={audioSrc} color="#f7b5cd" sliderColor="#ff669d" style={{ background: '#000', borderRadius: '15px', padding: '30px' }} />
                </div>
                {/* Code Viewer */}
                <div className="w-full md:w-1/2 relative code-background rounded">
                  <pre className="language-js p-2">
                    <code>{`import AudioPlayer from 'react-audio-play'\n\nexport default function App() {\n  return <AudioPlayer \n\t\t\t\t\tsrc="path/to/audio.mp3"\n\t\t\t\t\tcolor="#f7b5cd" \n\t\t\t\t\tsliderColor="#ff669d" \n\t\t\t\t\tstyle={{ background: '#000', borderRadius: '15px', padding: '30px' }} \n\t\t\t\t/>\n}`}</code>
                  </pre>
                  <button className="absolute top-2 right-2 text-gray-100 bg-gray-800 hover:bg-gray-700 rounded-md px-2 py-1 text-sm transition duration-300" onClick={copyToClipboard}>
                    {copied ? <span>Copied!</span> : <FiCopy className="w-6 h-6" />}
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 p-4 rounded-b-md shadow-lg mt-8">
        <p className="text-blue-500 text-center text-xl font-bold pb-2">
          Copyright © {new Date().getFullYear()} <a href="https://github.com/riyaddecoder">Shahidul Alam Riyad</a>. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default ExampleUsage;
