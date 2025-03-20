"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";
import Autoplay from 'embla-carousel-autoplay'

const Testimonial = () => {
  return (
    <div
    className="relative w-full h-[700px] bg-cover bg-center flex flex-col items-center justify-center px-4"
    style={{
      backgroundImage: "url('/test-bg.jpg')",
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative z-10 text-center text-white max-w-3xl px-4">
      <p className="text-[#c28b48] uppercase tracking-wide font-medium">
        Experience with me
      </p>
      <h2 className="text-4xl font-bold mt-2">Testimonials</h2>
      <div className="w-16 h-1 bg-[#c28b48] mx-auto mt-2 mb-6"></div>

      {/* Testimonial Carousel */}
      <Carousel 
       plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
        <CarouselContent>
          {/* Testimonial 1 */}
          <CarouselItem>
            <div className="text-lg italic leading-relaxed">
              <p>
                “Nam liber tempor cum soluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestie.”
              </p>
            </div>
            <div className="flex flex-col items-center mt-6">
              <Image
                src="/testi_avatar.png"
                alt="User"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full"
              />
              <p className="mt-2 font-semibold text-lg">Margie R. Robinson</p>
              <p className="text-sm text-gray-300">Web Developer</p>
            </div>
          </CarouselItem>

          {/* Testimonial 2 */}
          <CarouselItem>
            <div className="text-lg italic leading-relaxed">
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula nisi at massa pellentesque.”
              </p>
            </div>
            <div className="flex flex-col items-center mt-6">
              <Image
                src="/testi_avatar.png"
                alt="User"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full border-4 border-white"
              />
              <p className="mt-2 font-semibold text-lg">John Doe</p>
              <p className="text-sm text-gray-300">Marketing Expert</p>
            </div>
          </CarouselItem>

          {/* Testimonial 3 */}
          <CarouselItem>
            <div className="text-lg italic leading-relaxed">
              <p>
                “Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa, convallis a pellentesque nec.”
              </p>
            </div>
            <div className="flex flex-col items-center mt-6">
              <Image
                src="/testi_avatar.png"
                alt="User"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full border-4 border-white"
              />
              <p className="mt-2 font-semibold text-lg">Emily Watson</p>
              <p className="text-sm text-gray-300">UI/UX Designer</p>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  </div>
  );
};

export default Testimonial;

