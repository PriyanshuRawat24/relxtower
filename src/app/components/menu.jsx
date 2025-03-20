'use client';

import { Wrench, Bath, Bed, Car } from 'lucide-react';
import Image from 'next/image';

export default function Menu({ className }) {
    const details = [
        { icon: <Wrench size={40} />, value: '2543', label: 'Square Feet' },
        { icon: <Bath size={40} />, value: '4', label: 'Bathrooms' },
        { icon: <Bed size={40} />, value: '6', label: 'Bedrooms' },
        { icon: <Car size={40} />, value: '4', label: 'Car Parking' },
    ];

    return (
        <div className="relative w-full h-[400px] flex items-center justify-center ">
            <div className="absolute inset-0 bg-white bg-opacity-100">
                <Image
                    src="/count-bg.jpg"
                    alt="Building"
                    width={900}
                    height={600}
                    className={`w-full h-full bg-cover bg-center ${className} `}
                />
            </div>
            <div className="relative z-10 container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {details.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="bg-[#c28b48] text-white rounded-full p-4 shadow-lg">{item.icon}</div>
                        <h3 className="text-3xl font-semibold mt-4">{item.value}</h3>
                        <p className="text-gray-600">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
