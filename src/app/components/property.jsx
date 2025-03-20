"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { fetchProperties } from "@/utils/Api";

export default function Property() {
    const [properties, setProperties] = useState([]);

    useEffect(()=>{
        const fetchData = async ()=> {
            const data = await fetchProperties()
            setProperties(data)
        }

        fetchData()
    },[])

    return (
        <div className="container mx-auto px-4 py-16 mt-16 p-5 ">
            <div className="text-center mb-12">
                <p className="text-[#c28b48] uppercase tracking-wide font-semibold">Best Work</p>
                <h2 className="text-4xl md:text-5xl font-bold mt-2">Interior Views</h2>
                <div className="w-16 h-[3px] bg-[#c28b48] mx-auto mt-3"></div>
            </div>

            {/* Carousel Section */}
            <Carousel>
                <CarouselContent>
                    {properties.map((property, index) => (
                        <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3 mt-10">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                                <div className="relative w-full sm:h-72 md:h-[500px] flex items-center justify-center">
                                    <Image
                                        src={property.image}
                                        alt={property.title}
                                        objectFit="cover"
                                        className="w-full h-[500px] object-center object-cover"
                                        width={400}
                                        height={400}
                                    />
                                </div>

                                <div className="p-6 text-center ">
                                    <p className="text-gray-600 uppercase tracking-wide">Explore Now</p>
                                    <h2 className="text-2xl font-bold mt-2">{property.title}</h2>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}
