import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-24 bg-white flex justify-between items-center px-10 shadow-md shadow-blur-xl shadow-violet-500 sticky top-0 z-10">
      <div className="flex justify-between items-center max-w-7xl w-full mx-auto">
        <div className="logo">
          <a href="/">
            <img
              src="logo.png"
              alt="company logo"
              className="h-[35px] w-[139px] cursor-pointer"
            />
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="/"
            className="text-black-500 text-base font-semibold hover:text-violet-600"
          >
            Services
          </a>
          <a
            href=""
            className="text-black-500 text-base font-semibold hover:text-violet-600"
          >
            Industries
          </a>
          <a
            href=""
            className="text-black-500 text-base font-semibold hover:text-violet-600"
          >
            About Us
          </a>
          <a 
            href=""
            className="text-black-500 text-base font-semibold hover:text-violet-600 py-2"
          >
            Team Lunar
          </a>
          <a
            href=""
            className="text-black-500 text-base font-semibold hover:text-violet-600 flex"
          >
            Blog
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="25"
              viewBox="0 0 24 24"
              className="ml-1"
            >
              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
            </svg>
          </a>
          <a
            href=""
            className="font-semibold text-violet-600 bg-white border-2 rounded-full border-violet-600 p-2 px-4 hover:bg-violet-600 hover:text-white"
          >
            Contact Us
          </a>
        </div>
        <button
          className="md:hidden block focus:outline-none"
          onClick={toggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-white shadow-lg shadow-violet-600 z-10">
          <div className="flex flex-col items-center py-4 space-y-4">
          <a
          href="/"
          className="text-black-500 text-base font-semibold hover:text-violet-600 py-2"
        >
          Services
        </a>
        <a
          href=""
          className="text-black-500 text-base font-semibold hover:text-violet-600 py-2"
        >
          Industries
        </a>
        <a
          href=""
          className="text-black-500 text-base font-semibold hover:text-violet-600 py-2"
        >
          About Us
        </a>
        <a 
          href=""
          className="text-black-500 text-base font-semibold hover:text-violet-600 py-2"
        >
          Team Lunar
        </a>
        <a
          href=""
          className="text-black-500 text-base font-semibold hover:text-violet-600 py-2 flex"
        >
          Blog
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="25"
            viewBox="0 0 24 24"
            className="ml-1"
          >
            <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
          </svg>
        </a>
        <a
          href=""
          className="font-semibold text-violet-600 bg-white border-2 rounded-full border-violet-600 p-2 px-4 hover:bg-violet-600 hover:text-white"
        >
          Contact Us
        </a>
      </div>
    </div>
  )}
</div>
);
};

export default NavBar;

