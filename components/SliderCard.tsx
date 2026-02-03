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

                            <div className={`flex items-center gap-6 mb-8 md:mb-10 ${slide.imagePosition === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
                                <h2 className="text-[32px] md:text-7xl font-black tracking-[-2px] md:tracking-[-3px] text-[#1A2F1A] uppercase leading-[0.9] md:leading-none">
                                    {slide.header} View
                                </h2>
                                <div className="grow h-[2px] bg-black/30 mt-2"></div>
                            </div>

                            <div className={`flex flex-col ${slide.imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 md:gap-10`}>

                                <div className="w-full md:w-2/3 relative">
                                    <div
                                        className="overflow-hidden shadow-xl"
                                        style={{
                                            borderRadius: slide.imagePosition === 'right'
                                                ? '100px 30px 30px 30px'
                                                : '30px 100px 30px 30px'
                                        }}
                                    >
                                        <img
                                            src={slide.image}
                                            alt="Interior"
                                            className="w-full h-[300px] md:h-[420px] object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="w-full md:w-1/3 flex flex-row md:flex-col gap-4 md:gap-8 items-center justify-center">
                                    {slide.features.map((item, index) => (
                                        <div key={index} className="flex flex-col items-center justify-center gap-3 group">
                                            <div className="w-14 h-14 md:w-16 md:h-16 bg-green-50 rounded-full flex items-center justify-center text-gray-700 group-hover:bg-green-100 transition-colors border border-green-100/50">
                                                <div className="scale-75 md:scale-90">{item.icon}</div>
                                            </div>
                                            <h3 className="font-bold text-[10px] md:text-sm text-black text-center uppercase tracking-wider">
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

            <div className="flex items-center justify-center gap-6 mt-8">
                <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full border bg-black text-white flex items-center justify-center hover:bg-black/80 transition-all cursor-pointer"
                >
                    <ChevronLeft size={20} />
                </button>

                <div className="flex gap-1.5">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-1.5 rounded-full transition-all cursor-pointer ${currentSlide === index
                                ? 'bg-black w-6'
                                : 'bg-gray-200 w-1.5'
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full border bg-black text-white flex items-center justify-center hover:bg-black/80 transition-all cursor-pointer"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </>
    );
}