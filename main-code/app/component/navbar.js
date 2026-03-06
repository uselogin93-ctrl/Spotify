import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-black text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <img src='https://open.spotifycdn.com/cdn/images/icons/Spotify_256.17e41e58.png' alt='Spotify Logo' className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">Spotify</span>
        </Link>
      </div>

      <div className="flex-grow flex justify-center">
        <nav className="flex space-x-6">
          <Link href="/" className="text-gray-400 hover:text-white transition duration-300">
            Home
          </Link>
          <Link href="/list" className="text-gray-400 hover:text-white transition duration-300">
            List
          </Link>
          <Link href="/playlist" className="text-gray-400 hover:text-white transition duration-300">
            Playlist
          </Link>
        </nav>
      </div>

      <div className="flex items-center">
        <div className="relative mr-4">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800 text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <button className="bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
          Log In
        </button>
        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full ml-4 hover:bg-green-600 transition duration-300">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
