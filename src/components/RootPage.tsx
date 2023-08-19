import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import { AudioPlayer } from 'react-audio-play';
import ExampleBlock from './ExampleBlock';
import PropsBlock from './PropsBlock';
import TitleBlock from './TitleBlock';
import Navbar from './Navbar';
import './customStyle1.css';
import './customStyle2.css';

const RootPage = () => {
  const [isTabVisible, setIsTabVisible] = useState(!document.hidden);

  useEffect(() => {
    //Prism setup
    Prism.highlightAll();

    const handleVisibilityChange = () => {
      setIsTabVisible(true);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (!document.hidden && isTabVisible) {
      setTimeout(() => {
        if (window.location.hash) {
          const content = document.getElementById(window.location.hash.replace('#', ''));
          content?.scrollIntoView({ behavior: 'smooth' });
        }

        ['js', 'css'].forEach((eachLanguage) => {
          for (const elem of document.getElementsByClassName(`language-${eachLanguage}`)) {
            if (elem.tagName === 'CODE') {
              elem.classList.remove(`language-${eachLanguage}`);
            }
          }
        });
      }, 500);
    }
  }, [isTabVisible]);

  const audioSrc = 'https://download.samplelib.com/mp3/sample-12s.mp3';

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <main className="p-8">
        <div className="bg-white p-6 rounded-md shadow-lg mb-4">
          <TitleBlock />

          <hr className="my-6 border-gray-300" />

          <PropsBlock />

          <hr className="my-6 border-gray-300" />

          <section className="p-4" id="example-usage">
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
              title="Example 2: Looping audio, set the volume to 50% and volume control placement bottom"
              code={`import { AudioPlayer } from 'react-audio-play';\n\nexport default function App() {\n  return (\n\t\t <AudioPlayer \n\t\t\t\tloop\n\t\t\t\tsrc="path/to/audio.mp3"\n\t\t\t\tvolume={50}\n\t\t\t\tvolumePlacement="bottom"\n\t\t\t/>\n\t);\n}`}
            >
              <AudioPlayer src={audioSrc} loop volume={50} volumePlacement="bottom" />
            </ExampleBlock>

            {/* example 3 */}
            <ExampleBlock
              title="Example 3: Using audio callbacks"
              code={`import { AudioPlayer } from 'react-audio-play';\n\nexport default function App() {\n\tconst handlePlay = () => {\n\t\tconsole.log('Audio started playing');\n\t};\n\n\tconst handlePause = () => {\n\t\tconsole.log('Audio paused');\n\t};\n\n\tconst handleEnd = () => {\n\t\tconsole.log('Audio ended');\n\t};\n\n\tconst handleError = (event, errorMessage) => {\n\t\tconsole.log(errorMessage);\n\t};\n\n\treturn (\n\t\t<AudioPlayer\n\t\t\tsrc="path/to/audio.mp3"\n\t\t\tonPlay={handlePlay}\n\t\t\tonPause={handlePause}\n\t\t\tonEnd={handleEnd}\n\t\t\tonError={handleError}\n\t\t/>\n\t);\n}`}
            >
              <AudioPlayer
                src={audioSrc}
                onPlay={() => console.log('Audio started playing')}
                onEnd={() => console.log('Audio ended')}
                onError={(event, errorMessage) => console.log(errorMessage)}
                onPause={() => console.log('Audio paused')}
              />
            </ExampleBlock>

            {/* example 4 */}
            <div id="styled-examples"></div>
            <ExampleBlock
              title="Example 4: Darkmode using basic style props"
              code={`import { AudioPlayer } from 'react-audio-play';\n\nexport default function App() {\n  return (\n\t\t <AudioPlayer \n\t\t\t\tsrc="path/to/audio.mp3"\n\t\t\t\tcolor="#cfcfcf"\n\t\t\t\tsliderColor="#94b9ff"\n\t\t\t\tbackgroundColor="#2c2828"\n\t\t\t/>\n\t);\n}`}
            >
              <AudioPlayer src={audioSrc} backgroundColor="#2c2828" color="#cfcfcf" sliderColor="#94b9ff" />
            </ExampleBlock>

            {/* example 5 */}
            <ExampleBlock
              title="Example 5: Using Style Object"
              code={`import { AudioPlayer } from 'react-audio-play';\n\nexport default function App() {\n  return (\n\t\t <AudioPlayer \n\t\t\t\tsrc="path/to/audio.mp3"\n\t\t\t\tcolor="#f7b5cd"\n\t\t\t\tsliderColor="#ff669d"\n\t\t\t\tstyle={{ background: '#000', borderRadius: '15px', padding: '30px' }}\n\t\t\t/>\n\t);\n}`}
            >
              <AudioPlayer src={audioSrc} color="#f7b5cd" sliderColor="#ff669d" style={{ background: '#000', borderRadius: '15px', padding: '30px' }} />
            </ExampleBlock>

            {/* example 6 */}
            <ExampleBlock
              className="custom-style"
              language="css"
              title="Example 6: Using Custom CSS"
              infoText="Use a wrapper class to avoid CSS override issues. Ex: .custom-style"
              code={`.custom-style .rap-container {\n\tbackground-color: #000000;\n\tbackground-image: linear-gradient(147deg, #000000 0%, #04619f 74%);\n\tcolor: aliceblue;\n}\n\n.custom-style .rap-container .rap-pp-icon path,\n.custom-style .rap-container .rap-volume-btn path {\n\tfill: white;\n}\n\n.custom-style .rap-container .rap-slider .rap-progress {\n\tbackground-color: #daecff;\n}\n\n.custom-style .rap-container .rap-volume .rap-volume-controls {\n\tbackground-color: #000000;\n\tbackground-image: linear-gradient(147deg, #000000 0%, #04619f 74%);\n}\n\n.custom-style .rap-container .rap-slider .rap-progress .rap-pin {\n\tbackground-color: #c3d5ff;\n\tbox-shadow: 0 0 9px 7px #269eff52;\n}\n\n.custom-style .rap-container svg.rap-pp-icon:hover,\n.custom-style .rap-container .rap-volume-btn svg:hover {\n\tfilter: drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.9));\n}`}
            >
              <AudioPlayer src={audioSrc} />
            </ExampleBlock>

            {/* example 7 */}
            <ExampleBlock
              className="custom-style2"
              language="css"
              title="Example 7: More Playing With CSS"
              infoText="Use a wrapper class to avoid CSS override issues. Ex: .custom-style"
              code={`.custom-style .rap-container {\n\tbackground-color: #e4e4e4;\n\tcolor: #566574;\n\tborder-radius: 20px;\n}\n\n.custom-style .rap-container .rap-slider .rap-progress {\n\tbackground-color: #959595;\n}\n\n.custom-style .rap-container .rap-slider .rap-progress .rap-pin {\n\tbackground-color: #566574;\n\theight: 18px;\n\twidth: 18px;\n\tborder-radius: 10px;\n}\n\n.custom-style .rap-container .rap-controls .rap-slider .rap-progress .rap-pin {\n\ttop: -5px;\n}\n\n.custom-style .rap-container .rap-controls .rap-slider {\n\theight: 8px;\n\tborder-radius: 4px;\n}\n\n.custom-style .rap-container .rap-volume .rap-volume-btn.rap-volume-open path {\n\tfill: #000;\n}\n\n.custom-style .rap-container .rap-volume .rap-volume-controls {\n\tbackground-color: #e4e4e4;\n}\n\n.custom-style .rap-container .rap-volume .rap-volume-controls .rap-slider,\n.custom-style .rap-container .rap-volume .rap-volume-controls .rap-slider .rap-progress {\n\twidth: 8px;\n}`}
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

export default RootPage;
