import React, { useState } from 'react';
import { FiCopy } from 'react-icons/fi';

interface PropsI {
  code: string;
  className?: string;
  language?: string;
}

const CommandLineCode: React.FC<PropsI> = ({ code, className = '', language = 'css' }) => {
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
      <div className="md:w-1/2 relative ">
        <div className="code-background rounded p-2">
          <pre className={`language-${language} `}>
            <code className="font-bold drop-shadow-none">{code}</code>
          </pre>
          <button className="absolute top-2 right-2 text-gray-100 bg-gray-800 hover:bg-gray-700 rounded-md px-2 py-1 text-sm transition duration-300" onClick={copyToClipboard}>
            {copied ? <span>Copied!</span> : <FiCopy className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommandLineCode;
