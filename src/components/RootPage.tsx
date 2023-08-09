import React, { useEffect } from 'react';
import Prism from 'prismjs';
import { AudioPlayer } from 'react-audio-play';
import ExampleBlock from './ExampleBlock';
import PropsBlock from './PropsBlock';
import TitleBlock from './TitleBlock';
import './customStyle.css';

const ExampleUsage = () => {
  useEffect(() => {
    Prism.highlightAll();
    for (const elem of document.getElementsByClassName(`language-js`)) {
      if (elem.tagName === 'CODE') {
        elem.classList.remove(`language-js`);
      }
    }
  }, []);

  const audioSrc = 'https://download.samplelib.com/mp3/sample-12s.mp3';

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-gray-200 p-4 rounded-t-md shadow-lg mb-4">
        <h1 className="text-blue-500 text-4xl font-bold text-center pb-2">React Audio Play</h1>
        <p className="text-gray-600 text-center">Explore the features and usage of our versatile audio player component.</p>
      </header>

      <main className="p-8">
        <div className="bg-white p-6 rounded-md shadow-lg mb-4">
          <TitleBlock />

          <hr className="my-6 border-gray-300" />

          <PropsBlock />

          <hr className="my-6 border-gray-300" />

          <section className="p-4">
            <h2 className="text-2xl font-bold text-black mb-4">Example Usage</h2>
            <p className="mt-4 text-black">
              Below are examples of how you can use the <code className="bg-gray-100 p-1">AudioPlayer</code> component. Replace <code className="bg-gray-100 p-1">path/to/audio.mp3</code> with the
              actual URL or path of your audio file.
            </p>

            {/* example 1 */}
            <ExampleBlock
              title="Example 1: Basic usage with default props"
              code={`import { AudioPlayer } from 'react-audio-play';\n\nexport default function App() {\n  return <AudioPlayer src="path/to/audio.mp3" />;\n}`}
            >
              <AudioPlayer src={audioSrc} />
            </ExampleBlock>

            {/* example 2 */}
            <ExampleBlock
              title="Example 2: Looping audio and set the volume to 50%"
              code={`import { AudioPlayer } from 'react-audio-play';\n\nexport default function App() {\n  return (\n\t\t <AudioPlayer \n\t\t\t\tloop\n\t\t\t\tsrc="path/to/audio.mp3"\n\t\t\t\tvolume={50}\n\t\t\t/>\n\t);\n}`}
            >
              <AudioPlayer src={audioSrc} loop volume={50} />
            </ExampleBlock>

            {/* example 3 */}
            <ExampleBlock
              title="Example 3: Darkmode using basic style props"
              code={`import { AudioPlayer } from 'react-audio-play';\n\nexport default function App() {\n  return (\n\t\t <AudioPlayer \n\t\t\t\tsrc="path/to/audio.mp3"\n\t\t\t\tcolor="#cfcfcf"\n\t\t\t\tsliderColor="#94b9ff"\n\t\t\t\tbackgroundColor="#2c2828"\n\t\t\t/>\n\t);\n}`}
            >
              <AudioPlayer src={audioSrc} backgroundColor="#2c2828" color="#cfcfcf" sliderColor="#94b9ff" />
            </ExampleBlock>

            {/* example 4 */}
            <ExampleBlock
              title="Example 4: Using Style Object"
              code={`import { AudioPlayer } from 'react-audio-play';\n\nexport default function App() {\n  return (\n\t\t <AudioPlayer \n\t\t\t\tsrc="path/to/audio.mp3"\n\t\t\t\tcolor="#f7b5cd"\n\t\t\t\tsliderColor="#ff669d"\n\t\t\t\tstyle={{ background: '#000', borderRadius: '15px', padding: '30px' }}\n\t\t\t/>\n\t);\n}`}
            >
              <AudioPlayer src={audioSrc} color="#f7b5cd" sliderColor="#ff669d" style={{ background: '#000', borderRadius: '15px', padding: '30px' }} />
            </ExampleBlock>

            {/* example 5 */}
            <ExampleBlock
              className="custom-style"
              language="css"
              title="Example 5: Using Custom CSS"
              infoText="Use a wrapper class to avoid CSS override issues. Ex: .custom-style"
              code={`.custom-style .rap-container {\n\tbackground-color: #000000;\n\tbackground-image: linear-gradient(147deg, #000000 0%, #04619f 74%);\n\tcolor: aliceblue;\n}\n\n.custom-style .rap-container .rap-pp-icon:hover {\n\tbox-shadow: 0 0 9px 7px #269eff52;\n}\n\n.custom-style .rap-container .rap-pp-icon path,\n.custom-style .rap-container .rap-volume-btn path {\n\tfill: white;\n}\n\n.custom-style .rap-container .rap-slider .rap-progress {\n\tbackground-color: #daecff;\n\tborder-radius: inherit;\n\tposition: absolute;\n\tpointer-events: none;\n}\n\n.custom-style .rap-container .rap-volume .rap-volume-controls {\n\tbackground-color: #000000;\n\tbackground-image: linear-gradient(147deg, #000000 0%, #04619f 74%);\n}\n\n.custom-style .rap-container .rap-slider .rap-progress .rap-pin {\n\tbackground-color: #c3d5ff;\n\tbox-shadow: 0 0 9px 7px #269eff52;\n}`}
            >
              <AudioPlayer src={audioSrc} />
            </ExampleBlock>
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
