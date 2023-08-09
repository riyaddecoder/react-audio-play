import React, { useState } from 'react';
import { FiCopy, FiInfo } from 'react-icons/fi';

interface PropsI {
  code: string;
  children: React.ReactNode;
  className?: string;
  language?: string;
  title: string;
  infoText?: string;
}

const ExampleBlock: React.FC<PropsI> = ({ title, code, className = '', language = 'js', infoText = '', children }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className={`mt-5 mb-5 ml-4 ${className}`}>
      <h3 className=" text-xl font-bold mb-5">{title}</h3>
      <div className=" flex flex-wrap items-stretch">
        {/* Audio Player Preview */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-2">{children}</div>
        {/* Code Viewer */}
        <div className="w-full md:w-1/2 relative ">
          <div className="code-background rounded p-2">
            <pre className={`language-${language} `}>
              <code>{code}</code>
            </pre>
            <button className="absolute top-2 right-2 text-gray-100 bg-gray-800 hover:bg-gray-700 rounded-md px-2 py-1 text-sm transition duration-300" onClick={copyToClipboard}>
              {copied ? <span>Copied!</span> : <FiCopy className="w-6 h-6" />}
            </button>
          </div>
          {infoText.trim() && (
            <div className="mt-1 flex items-center text-gray-600">
              <FiInfo className="w-4 h-4 mr-1" /> {/* Info icon */}
              <span>{infoText}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExampleBlock;
