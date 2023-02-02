import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

function Slider() {
  const slides = [
    {
      url: 'https://cdn.glitch.global/5d58ac32-8d71-430a-8ecf-b40ca31e9c83/Slider2.svg?v=1675324276565',
    },
    {
      url: 'https://cdn.glitch.global/5d58ac32-8d71-430a-8ecf-b40ca31e9c83/Slider1.svg?v=1675324277127',
    }
    ,
    {
      url: 'https://cdn.glitch.global/5d58ac32-8d71-430a-8ecf-b40ca31e9c83/Slider3.svg?v=1675324279754',
    },
    {
        url: 'https://cdn.glitch.global/5d58ac32-8d71-430a-8ecf-b40ca31e9c83/Slider4.svg?v=1675324284057',
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-full hidden md:flex h-[500px] w-full mx-auto relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full  bg-center   duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;