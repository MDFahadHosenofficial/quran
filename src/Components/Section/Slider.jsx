import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { id: 1, content: "Slide 1" },
    { id: 2, content: "Slide 2" },
    { id: 3, content: "Slide 3" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className="relative mx-auto flex items-center pt-[19px] px-3 rounded-3xl pb-5 justify-center"
      style={{ height: "171px", width: "1263px", backgroundColor: "#FFC6C6" }}
    >
      {/* Slide Container */}
      <div className="overflow-hidden h-full w-full">
        <div
          className="flex transition-transform duration-300 h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-shrink-0 h-full w-full flex items-center justify-center"
            >
              <div className="text-center text-lg font-semibold">{slide.content}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 w-[51px] h-[50px] left-4 transform -translate-y-1/2 flex items-center justify-center focus:outline-none"
      >
        <div className="text-2xl">
        <IoIosArrowDropleft  />
        </div>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 w-[51px] h-[50px] transform -translate-y-1/2 flex items-center justify-center focus:outline-none"
      >
        <div className="text-2xl">
        <IoIosArrowDropright />
        </div>
      </button>
    </div>
  );
};

export default Slider;
