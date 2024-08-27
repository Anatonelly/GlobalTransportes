import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Button from '@/components/Button';

const data = [
  {
    name: 'Transportes em diferentes modais',
    img: '/Carrossel/DiferentesModais.jpg',
    description:
      'Explore os diversos modos de transporte para otimizar a logística da sua empresa, escolhendo o mais adequado às suas necessidades e objetivos estratégicos.',
    link: 'https://wa.me/553199351905/?text=Ol%C3%A1%2C%20gostaria%20de%20cotar%20um%20frete%20!%0AOrigem%20%3A%20%0ADestino%20%3A%20%0APeso%20%3A%20%0AVolume%20%3A%20%0AValor%20da%20NF%20%3A%20',
  },
  {
    name: 'Atendimento em todo Brasil',
    img: '/Carrossel/AtendimentoBrasil.png',
    description:
      'Oferecemos serviços de transporte abrangentes em todo o território brasileiro, garantindo eficiência e confiabilidade para suas necessidades logísticas.',
    link: 'https://wa.me/553199351905/?text=Ol%C3%A1%2C%20gostaria%20de%20cotar%20um%20frete%20!%0AOrigem%20%3A%20%0ADestino%20%3A%20%0APeso%20%3A%20%0AVolume%20%3A%20%0AValor%20da%20NF%20%3A%20',
  },
  {
    name: 'Para coleta e entrega',
    img: '/Carrossel/ColetaEntrega.jpg',
    description:
      'Serviços de coleta e entrega adaptados às suas necessidades, assegurando que suas cargas cheguem ao destino de forma segura e pontual.',
    link: 'https://wa.me/553199351905/?text=Ol%C3%A1%2C%20gostaria%20de%20cotar%20um%20frete%20!%0AOrigem%20%3A%20%0ADestino%20%3A%20%0APeso%20%3A%20%0AVolume%20%3A%20%0AValor%20da%20NF%20%3A%20',
  },
  {
    name: 'Cargas fracionadas ou dedicadas',
    img: '/Carrossel/CargasFracionadasDedicadas.jpeg',
    description:
      'Oferecemos opções de transporte tanto para cargas fracionadas quanto dedicadas, atendendo de forma personalizada às exigências de cada cliente.',
    link: 'https://wa.me/553199351905/?text=Ol%C3%A1%2C%20gostaria%20de%20cotar%20um%20frete%20!%0AOrigem%20%3A%20%0ADestino%20%3A%20%0APeso%20%3A%20%0AVolume%20%3A%20%0AValor%20da%20NF%20%3A%20',
  },
  {
    name: 'Carregamento de carga de pequeno porte até carga indivisível',
    img: '/Carrossel/CarregamentoDeCarga.jpeg',
    description:
      'Capacidade para transportar desde pequenas cargas até itens indivisíveis de grande porte, com segurança e eficiência.',
    link: 'https://wa.me/553199351905/?text=Ol%C3%A1%2C%20gostaria%20de%20cotar%20um%20frete%20!%0AOrigem%20%3A%20%0ADestino%20%3A%20%0APeso%20%3A%20%0AVolume%20%3A%20%0AValor%20da%20NF%20%3A%20',
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
          Conheça nossos serviços
        </h1>
        <h3 className='text-xl text-yellow-500 font-semibold  text-center'>
          Clique no serviço para solicitá-lo!
        </h3>
      </div>
      <div>
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.name}
              className='bg-white h-[450px] text-black rounded-xl '
            >
              <div className='h-56  bg-yellow-500 flex justify-center items-center rounded-t-xl'>
                <img src={d.img} alt='' className='h-44 w-44 rounded-full' />
              </div>

              <div className='flex flex-col items-center justify-between md:gap-4 xxs:gap-2 p-4'>
                <div className='flex flex-col items-center justify-center gap-2'>
                  <p className='xxs:text-sm  2xl:text-base  font-semibold'>{d.name}</p>
                  <p className='xxs:text-xs  2xl:text-sm  text-center'>{d.description}</p>
                </div>
                <a
                  href={d.link}
                  className='border-yellow-500 border-2 hover:border-yellow-600 text-black  md:text-sm p-2 rounded-xl'
                >
                  Nos envie uma mensagem
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default index;
