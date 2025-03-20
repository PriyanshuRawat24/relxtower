'use client';

import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaBed, FaCar, FaRulerCombined, FaShower } from 'react-icons/fa';
import Image from 'next/image';
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import Link from 'next/link';

const slides = [
    { src: '/hero1.jpg', price: '2,786.80' },
    { src: '/hero2.jpg', price: '3,450.00' },
];

export default function HeroSection() {
    const [index, setIndex] = useState(0);
    const prevSlide = () => {
        setIndex(index === 0 ? slides.length - 1 : index - 1);
    };
    const nextSlide = () => {
        setIndex(index === slides.length - 1 ? 0 : index + 1);
    };

    return (
        <div className="relative w-full h-[90vh] bg-gray-900">
            <Image
                src={slides[index].src}
                alt="House Image"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 text-white px-4 sm:px-6 md:px-12">
                <div className="border-4 border-[#c28b48] p-4 sm:p-6 md:p-12 lg:p-20 max-w-3xl mx-[10%] top-10 relative">
                    <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 border-t-4 border-l-4 border-[#c28b48]"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 border-t-4 border-r-4 border-[#c28b48]"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12 border-b-4 border-l-4 border-[#c28b48]"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 border-b-4 border-r-4 border-[#c28b48]"></div>

                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                        Discover Modern Building Design.
                    </h1>
                    <div className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-8 mt-4 sm:mt-6 text-sm sm:text-md">
                        <span className="flex items-center gap-2"><FaBed /> 3 Bedrooms</span>
                        <span className="flex items-center gap-2"><FaRulerCombined /> Square Feet</span>
                        <span className="flex items-center gap-2"><FaShower /> Bathrooms</span>
                        <span className="flex items-center gap-2"><FaCar /> Car Parking</span>
                    </div>

                    <div className="flex space-x-4 justify-center sm:justify-start">
                        <Link href="/">
                            <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-[#c28b48] text-white rounded shadow-md">
                                Get a Quote
                            </button>
                        </Link>
                        <Link href="/">
                            <button className="mt-4 sm:mt-6 md:px-6 sm:px-3 md:py-4 sm:py-3 bg-[#c28b48] text-white rounded shadow-md">
                                <SiGoogledisplayandvideo360 />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-32 md:bottom-40 right-1/2 sm:right-[200px] md:right-[300px] text-center">
                <div>
                    <p className="text-white text-2xl sm:text-3xl md:text-5xl font-semibold flex items-start">
                        Price:
                    </p>
                    <span className="text-[#c28b48] text-3xl sm:text-4xl md:text-6xl font-bold flex items-end">
                        $
                        <p className="text-[#c28b48] text-2xl sm:text-3xl md:text-5xl font-bold">
                            {slides[index].price}
                        </p>
                    </span>
                </div>
            </div>

            {/* Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 z-10 rounded-full shadow-md hidden sm:block"
            >
                <FaArrowLeft />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 z-10 rounded-full shadow-md  hidden sm:block"
            >
                <FaArrowRight />
            </button>
        </div>
    );
}
