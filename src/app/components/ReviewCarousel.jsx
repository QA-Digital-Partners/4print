'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Importa los estilos básicos de Swiper
import 'swiper/css/navigation'; // Estilos para la navegación
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useEffect, useRef } from 'react';
import SwiperCore from 'swiper';
import ReviewIndividual from './ReviewIndividual';
import { Review, ReviewImages } from '../data/data';

SwiperCore.use([Navigation]);

const ReviewCarousel = ({ heightMod }) => {

  const customClass = 'max-w-[50px] lg:max-w-[80px] max-h-[50px] lg:max-h-[80px] mx-16 lg:mx-8'
  const swiperRef = useRef(null);
  const prev = useRef(null); // Crear refs para los botones
  const next = useRef(null);
  const pagination = useRef(null);

  

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.params.navigation.prevEl = prev.current;
      swiper.params.navigation.nextEl = next.current;
      swiper.params.pagination.el = pagination.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [next, prev]);


  return (
    <div className='lg:max-w-[401px] w-full'>
      <Swiper
        ref={swiperRef}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        speed={1500}
        modules={[Autoplay, Pagination]} // Habilita los módulos necesarios
        className="swiper-container"
        pagination={{
          el: ".pagination-circles",
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} ${customClass}" style="background-image: url('${ReviewImages[index]}');"></span>`;
          },
        }}
        breakpoints={{
          // Pantallas pequeñas (sm)
          640: {
            slidesPerView: 1, // Muestra 1 slide
            spaceBetween: 25,
          },
          // Pantallas medianas (md)
          768: {
            slidesPerView: 1, // Muestra 2 slides
            spaceBetween: 25,
          },
        }}
      >
        {Review.map((slide, index) => (
          <SwiperSlide key={index} id={index} className="me-[0px]">
            <ReviewIndividual slide={slide} heightMod={heightMod} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-between mt-4">
        <button ref={prev}>
          <Image 
              src={"/images/review-arrow-left.svg"}
              alt="review icon left"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/review-arrow-left.svg 768w, /images/review-arrow-left.svg 1024w"
              width={33}
              height={34} 
              className="" />
        </button>
        <div ref={pagination} className="pagination-circles content-center w-auto text-center"></div>
        <button ref={next}>
        <Image 
              src={"/images/review-arrow-right.svg"}
              alt="review icon left"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/review-arrow-right.svg 768w, /images/review-arrow-right.svg 1024w"
              width={33}
              height={34} 
              className="" />
        </button>
      </div>
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 80px;
          height: 80px;
          background-size: cover;
          background-position: center;
          border-radius: 50%;
          margin: 0 5px;
          opacity: 0.5;
          transition: opacity 0.3s, border-color 0.3s;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          border-color: #007bff;
        }
        .pagination-wrapper {
          display: flex;
          align-items: center;
          gap: 25px;
        }
      `}</style>
      
    </div>
  );
};

export default ReviewCarousel;
