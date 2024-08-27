/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { RiScrollToBottomLine } from 'react-icons/ri';
import { RiArrowDownDoubleLine } from 'react-icons/ri';
import Button from '@/components/Button';

const index = () => {
  return (
    <div className='pt-10 pb-20 w-full h-screen text-yellow-500 font-bold flex flex-col items-center gap-10'>
      <img
        className='xxs:w-1/2 xxs:h-1/2 md:w-2/5 md:h-2/5'
        src='./GlobalTransportes.svg'
        alt='Global Transportes Logo'
      />
        <h1 className='px-10 2xl:text-6xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl text-center'>
          Tenha controle total da localização da sua carga, com 30% a menos de
          custo do mercado
      </h1>
      
      <Button />

      <div className='animate-bounce text-center xs:hidden sm:flex flex-col items-center justify-center gap-2 absolute mt-10 bottom-0'>
        <RiScrollToBottomLine className='text-4xl' />
        <RiArrowDownDoubleLine className='text-4xl' />
      </div>
    </div>
  );
};

export default index;
