import React from 'react';

interface PropsI {
  title: string;
  url: string;
}

const SourceLink: React.FC<PropsI> = ({ title, url }) => {
  return (
    <div className="mt-2 text-gray-500 text-xs">
      Music Source:{' '}
      <a target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-500 hover:underline" href={url}>
        {title}
      </a>
    </div>
  );
};

export default SourceLink;
