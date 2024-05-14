import React from 'react';

const KeyBindingBlock: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <h2 className="text-2xl font-bold text-black mb-4">Keyboard Shortcuts</h2>
      <p className="mt-4 text-black">
        Below are the keyboard shortcuts available when the audio player is focused. They can be turned off by setting the `<b>hasKeyBindings</b>` prop to `<b>false</b>`.
      </p>
      <table className="w-full max-w-md mt-5">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 text-left">Key binding</th>
            <th className="py-2 px-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4">Space</td>
            <td className="py-2 px-4">Play/Pause</td>
          </tr>
          <tr>
            <td className="py-2 px-4">←</td>
            <td className="py-2 px-4">Rewind</td>
          </tr>
          <tr>
            <td className="py-2 px-4">→</td>
            <td className="py-2 px-4">Forward</td>
          </tr>
          <tr>
            <td className="py-2 px-4">↑</td>
            <td className="py-2 px-4">Volume up</td>
          </tr>
          <tr>
            <td className="py-2 px-4">↓</td>
            <td className="py-2 px-4">Volume down</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default KeyBindingBlock;
