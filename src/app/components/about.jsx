'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
    return (
        <div className="mx-auto px-6 md:px-12 py-12 flex flex-col lg:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="p-2 lg:ml-[100px] w-full max-w-[700px]">
            <Image
              src="/about.png"
              alt="Building"
              width={900}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute bottom-[5%] right-[5%] lg:bottom-[20%] lg:right-[10%] bg-[#c28b48] text-white py-5 px-7 text-sm sm:text-lg italic shadow-lg">
            35 years of experience
          </div>
        </div>
  
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:p-10">
          <h4 className="text-[#c28b48] text-base sm:text-lg font-semibold uppercase tracking-wider">
            About Us
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mt-6">
            Welcome To Our Relxtower
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-6 sm:mt-8 max-w-lg mx-auto lg:mx-0">
            We provide an essential service for you
          </p>
          <p className="text-gray-500 mt-5 sm:mt-7 leading-relaxed text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          </p>
          {/* CTA Button */}
          <div>
            <Link href="/">
              <button className="mt-8 sm:mt-10 bg-[#c28b48] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#a4733e] transition-all">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
}
