/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

const index = ({ icon, title, text, href }) => {
  return (
    <a
      href={href}
      className='flex md:w-1/3 xxs:w-full md:h-96 xxs:h-auto flex-col gap-3 items-center justify-center bg-yellow-600 rounded-md shadow-lg shadow-black hover:bg-yellow-700 hover:scale-105 transition-all duration-300 p-4'
    >
      <div className='flex flex-col items-center justify-center'>
        {icon}
        <span className='font-bold text-lg lg:text-xl text-white'>{title}</span>
      </div>
      <span className='text-center lg:text-lg md:text-base text-white'>
        {text}
      </span>
    </a>
  );
};

export default index;
