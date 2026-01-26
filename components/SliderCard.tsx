'use client';

import { useState, useEffect, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Feature {
    icon: ReactNode;
    title: string;
}

interface Slide {
    features: Feature[];
    image: string;
    imagePosition: string;
    header: string
}

interface CarouselClientProps {
    slides: Slide[];
}

export default function SliderCard({ slides }: CarouselClientProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setIsAutoPlaying(false);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
    };

    return (
        <>
            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex} className="w-full shrink-0 px-1.5">

                            <div className={`flex items-center gap-10 mb-12 md:mb-16 ${slide.imagePosition === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
                                <h2 className="text-4xl md:text-7xl font-extrabold tracking-[-2px] text-black whitespace-nowrap">
                                    {slide.header} View
                                </h2>
                                <div className="grow h-0.5 bg-black mt-2"></div>
                            </div>

                            <div className={`flex flex-col ${slide.imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>

                                <div className="w-full md:w-2/3 relative">
                                    <div
                                        className="overflow-hidden"
                                        style={{
                                            borderRadius: slide.imagePosition === 'right'
                                                ? '150px 40px 40px 40px'
                                                : '40px 150px 40px 40px'
                                        }}
                                    >
                                        <img
                                            src={slide.image}
                                            alt="Interior"
                                            className="w-full h-125 object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="w-full md:w-1/3 flex md:flex-col gap-6 md:gap-12 items-center justify-center">
                                    {slide.features.map((item, index) => (
                                        <div key={index} className="flex flex-col items-center justify-center gap-4 group">
                                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 group-hover:bg-gray-200 transition-colors">
                                                {item.icon}
                                            </div>
                                            <h3 className="font-bold text-sm md:text-xl text-black text-center">
                                                {item.title}
                                            </h3>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-12">
                <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} />
                </button>

                <div className="flex gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all cursor-pointer ${currentSlide === index
                                ? 'bg-black w-8'
                                : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer"
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </>
    );
}