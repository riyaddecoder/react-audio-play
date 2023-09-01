import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 p-4 rounded-b-md shadow-lg mt-8">
      <p className="text-blue-500 text-center text-xl font-bold pb-2">
        Copyright © {new Date().getFullYear()} <a href="https://github.com/riyaddecoder">Shahidul Alam Riyad</a>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
