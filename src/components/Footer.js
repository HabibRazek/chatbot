import React from 'react';
import { FaFacebookF ,FaInstagram ,FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto ">
        <div className="text-center">
          <div>
            <a className="flex-none text-xl font-semibold text-black dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/" aria-label="Brand">
              <img className="h-20 w-40 mx-auto" src="/logo.png" alt="logo" />
            </a>
          </div>

          <div className="mt-3">
            <p className="text-gray-500">© Zakia Hajouni & Chaima Guiras.All rights reserved.</p>
          </div>

          <div className="mt-3 space-x-2">
          <a className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-800 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-offset-white transition  dark:hover:text-gray-200 dark:hover:bg-orange-600" href="https://www.facebook.com/groups/589647918297754?locale=fr_FR" target="_blank">
          <FaFacebookF />
        </a>



            <a className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-800 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2  focus:ring-offset-2  focus:ring-offset-white transition dark:hover:text-gray-200 dark:hover:bg-orange-600" href="/">
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
