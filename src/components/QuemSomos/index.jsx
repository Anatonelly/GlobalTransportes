import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Button from '@/components/Button';


const data = [
  {
    titulo: 'Nossa História',
    texto:
      'A Global Transportes iniciou suas atividades em junho de 2019 na cidade de Betim-MG. Foi em meio à pandemia, onde o mundo vivia em um período de incertezas, que ela se consolidou.',
  },
  {
    titulo: 'Como surgiu?',
    texto: `O insight para nossa mudança veio ao assistir o filme Robôs, onde um personagem diz: 'Viu a necessidade? Atenda!' Assim, foi criada a Global Transportes Logística Inteligente e Digital, conectando mais de 2 milhões de caminhoneiros autônomos, empresas e novos parceiros.`,
  },
  {
    titulo: 'Nossos Números',
    lista: [
      '26 estados e Distrito Federal',
      'Mais de 600 transportadoras parceiras',
      'Mais de 95 milhões em cargas transportadas',
      '18.000 clientes atendidos direta ou indiretamente',
      'Contamos com 100 mil motoristas cadastrados.',
    ],
  },

];

const index = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='flex flex-col w-3/4 gap-10'>
      <div className='flex flex-col'>
        <h1 className='lg:text-7xl md:text-6xl text-yellow-500 font-bold sm:text-5xl xs:text-4xl xxs:text-3xl text-center'>
          Quem Somos Nós?
        </h1>
        {/* <h3 className='text-xl text-yellow-500 font-semibold  text-center'>
          Clique no serviço para solicitá-lo!
        </h3> */}
      </div>
      <div>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.titulo} className={`flex items-center  w-full h-auto`}>
              <div className='flex flex-col gap-5 w-auto h-full'>
                <div className='text-white h-96  bg-global shadow-md drop-shadow-md border border-yellow-600 flex flex-col items-start justify-start gap-3 p-10 rounded-md  '>
                  <p className='text-base font-semibold'>{d.titulo}</p>
                  {d.lista ? (
                    <ul className='list-disc flex flex-col pl-5 text-sm font-light'>
                      {d.lista.map((item, index) => (
                        <li className='xxs:text-xs md:text-base font-light' key={index}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className='xxs:text-xs md:text-base font-light'>{d.texto}</p>
                  )}
                </div>
                <div className='bg-global hover:bg-globalHover cursor-pointer border border-yellow-500 shadow-lg shadow-global text-white font-semibold px-8 py-3 text-2xl text-center rounded-md transition-all '>
                  <a href='https://wa.me/553199351905/?text=Ol%C3%A1%2C%20gostaria%20de%20cotar%20um%20frete%20!%0AOrigem%20%3A%20%0ADestino%20%3A%20%0APeso%20%3A%20%0AVolume%20%3A%20%0AValor%20da%20NF%20%3A%20'>
                    <div>Nos envie uma mensagem</div>
                  </a>
                </div>
              </div>

              <div className='w-2/3 lg:flex hidden '></div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default index;
