import React from 'react';

const index = () => {
  return (
    <div className='md:h-screen xxs:h-auto w-full flex md:flex-row xxs:flex-col  bg-global pt-10 xxs:pb-10 md:pb-0 gap-6'>
      <div
        id='Img'
        className='md:flex flex-col justify-center items-center md:w-1/3 xxs:w-auto '
      >
        <img className='object-contain -mb-1 ' src='/Atuacao/Brasil.webp' alt='' />
      </div>
      <div className='flex flex-col md:w-2/3 xxs:w-full items-center justify-center gap-5 text-white'>
        <span id='TitleLetter' className='md:text-5xl xxs:text-xl font-bold'>
          REGIÕES DE ATUAÇÃO
        </span>

        <p
          id='Paragraph'
          className='md:text-2xl xxs:text-base font-normal w-2/3 text-justify'
        >
          Atuando em todo o território brasileiro no segmento de grandes cargas,
          a Global Transportes oferece soluções logísticas personalizadas para
          otimizar seus processos e reduzir custos operacionais. Com nossa
          expertise, garantimos eficiência e segurança no transporte de suas
          mercadorias.
        </p>
      </div>
    </div>
  );
};

export default index;
