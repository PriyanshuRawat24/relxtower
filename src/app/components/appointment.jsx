"use client"

import Link from "next/link";
import React from "react";

const Appointment = () => {
    return (
        <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/cta-bg1.jpg')" }}>
                <div className="absolute inset-0 bg-[#c28b48] opacity-30"></div>
            </div>
            <div className="relative text-center text-white px-6">
                <p className="text-lg">Don{"'t"} hesitate to contact us</p>
                <h3 className="text-3xl md:text-5xl font-bold mt-2">
                    MAKE AN APPOINTMENT NOW
                </h3>
                <p className="text-3xl md:text-4xl font-semibold mt-2">666 888 0000</p>

                <Link href="/">
                    <button className="bg-gray-800 text-white px-7 py-3 mt-6 rounded-full text-lg shadow-lg hover:bg-gray-800 transition">
                        Contact Us
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Appointment;
