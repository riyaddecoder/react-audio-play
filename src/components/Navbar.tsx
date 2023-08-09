import React from 'react';
import { FaLinkedin, FaNpm, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="bg-gray-200 p-4 rounded-t-md shadow-lg mb-4">
      <h1 className="text-blue-500 text-4xl font-bold text-center pb-2">React Audio Play</h1>
      <p className="text-gray-600 text-center">Explore the features and usage of our versatile audio player component.</p>
      <div className="flex items-center justify-center mt-8">
        {/* <a href="https://www.twitter.com/your-username" className="hover:scale-125 text-blue-500 mx-2" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="w-6 h-6" />
        </a> */}
        {/* <a href="https://www.facebook.com/your-page" className="hover:scale-125 text-blue-600 mx-2" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="w-6 h-6" />
        </a> */}
        {/* <a href="https://www.instagram.com/your-username" className="hover:scale-125 text-pink-500 mx-2" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="w-6 h-6" />
        </a> */}
        <a href="https://www.npmjs.com/package/react-audio-play" className="hover:scale-125 text-red-600 mx-2" target="_blank" rel="noopener noreferrer">
          <FaNpm className="w-6 h-6" />
        </a>
        <a href="https://github.com/riyaddecoder/react-audio-play" className="hover:scale-125 text-gray-800 mx-2" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/sariyad/" className="hover:scale-125 text-blue-800 mx-2" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a href="https://www.buymeacoffee.com/riyaddecoder" className="hover:scale-125 text-gray-600 mx-2" target="_blank" rel="noopener noreferrer">
          <span className="flex items-center">
            <img
              src="https://img.buymeacoffee.com/button-api/?text=Buy%20me%20a%20coffee&emoji=&slug=riyaddecoder&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"
              alt="Buy Me a Coffee"
              className="h-8 ml-2"
            />
          </span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
