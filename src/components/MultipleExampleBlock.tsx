import React, { useState } from 'react';
import { FiCopy, FiInfo } from 'react-icons/fi';
import TabComponent from './TabComponent';

interface PropsI {
  jsCode: string;
  cssCode: string;
  children: React.ReactNode;
  className?: string;
  title: string;
  infoText?: string;
}

const MultipleExampleBlock: React.FC<PropsI> = ({ title, jsCode, cssCode, className = '', infoText = '', children }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (language: string) => {
    const textarea = document.createElement('textarea');
    textarea.value = language === 'js' ? jsCode : cssCode;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className={`mt-5 mb-5 sm:ml-4 ml-1 max-lg:text-xs ${className}`}>
      <h3 className=" text-xl font-bold mb-5">{title}</h3>
      <div className=" flex flex-wrap items-stretch">
        {/* Audio Player Preview */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-2">{children}</div>
        {/* Code Viewer */}
        <TabComponent
          className="w-full md:w-1/2"
          tabs={['CSS', 'JS']}
          contents={[
            <div key={0} className="relative">
              <div className="code-background rounded p-2">
                <pre className={`language-css`}>
                  <code className="font-bold drop-shadow-none">{cssCode}</code>
                </pre>
                <button className="absolute top-2 right-2 text-gray-100 bg-gray-800 hover:bg-gray-700 rounded-md px-2 py-1 text-sm transition duration-300" onClick={() => copyToClipboard('css')}>
                  {copied ? <span>Copied!</span> : <FiCopy className="w-6 h-6" />}
                </button>
              </div>
              {infoText.trim() && (
                <div className="mt-1 flex items-center text-gray-600">
                  <FiInfo className="w-4 h-4 mr-1" />
                  <span>{infoText}</span>
                </div>
              )}
            </div>,
            <div key={1} className="relative">
              <div className="code-background rounded p-2">
                <pre className={`language-js`}>
                  <code className="font-bold drop-shadow-none">{jsCode}</code>
                </pre>
                <button className="absolute top-2 right-2 text-gray-100 bg-gray-800 hover:bg-gray-700 rounded-md px-2 py-1 text-sm transition duration-300" onClick={() => copyToClipboard('js')}>
                  {copied ? <span>Copied!</span> : <FiCopy className="w-6 h-6" />}
                </button>
              </div>
              {infoText.trim() && (
                <div className="mt-1 flex items-center text-gray-600">
                  <FiInfo className="w-4 h-4 mr-1" />
                  <span>{infoText}</span>
                </div>
              )}
            </div>
          ]}
        />
      </div>
    </div>
  );
};

export default MultipleExampleBlock;
