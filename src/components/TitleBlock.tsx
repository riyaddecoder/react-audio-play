import React from 'react';
import CommandLineCode from './CommandLineCode';

const TitleBlock = () => (
  <section>
    <h2 className="text-3xl font-bold text-gray-800">Getting Started</h2>
    <p className="text-gray-600 mt-4">Welcome to the Audio Player documentation. To get started, follow the steps below:</p>
    <ol className="list-decimal list-inside mt-4 text-gray-800">
      <li className="mb-2">
        Install the package using npm:
        <CommandLineCode code="npm install react-audio-play" />
      </li>
      <li className="mb-2">
        Alternatively, install with yarn:
        <CommandLineCode code="yarn add react-audio-play" />
      </li>
      <li className="mb-2">
        Import and use the <code className="bg-gray-100 p-1">AudioPlayer</code> component in your project.
      </li>
      <li>Customize the appearance and functionality as needed.</li>
    </ol>
  </section>
);

export default TitleBlock;
