"use client"

import Link from "next/link";
import React from "react";
import { FaBuilding, FaSearchLocation } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { IoMdHome } from "react-icons/io";
import { BiSolidCarGarage } from "react-icons/bi";
import { PiChats } from "react-icons/pi";

const services = [
    {
        icon: <HiSpeakerphone/>,
        title: "Dedicated Production & Planning Teams",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
        bg: "hover:bg-orange-100 text-[#c28b48]",
    },
    {
        icon: <FaBuilding />,
        title: "We're Here To Make You Successful",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
        bg: "hover:bg-orange-100 text-[#c28b48]",
    },
    {
        icon: <IoMdHome />,
        title: "Premium, Fresh Cuisine Made Onsite",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
        bg: "hover:bg-orange-100 text-[#c28b48]",
    },
    {
        icon: <FaSearchLocation />,
        title: "Flexible, Contemporary & Included Spaces",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
        bg: "hover:bg-orange-100 text-[#c28b48]",
    },
    {
        icon: <BiSolidCarGarage />,
        title: "Human-Centered Design Friendly Spaces",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
        bg: "hover:bg-orange-100 text-[#c28b48]",
    },
    {
        icon: <PiChats />,
        title: "Broker Cutting-Edge And Technology",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
        bg: "hover:bg-orange-100 text-[#c28b48]",
    },
];

const Services = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center mb-10">
                <p className="text-[#c28b48] uppercase tracking-wide">Our Services</p>
                <h2 className="text-5xl font-bold mt-2">What We Do</h2>
                <div className="w-16 h-[3px] bg-[#c28b48] mx-auto mt-3"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-lg border-2 border-gray-100 transition duration-300 ${service.bg}`}
                    >
                        <div className="text-5xl">{service.icon}</div>
                        <h3 className="text-lg font-semibold mt-4">{service.title}</h3>
                        <p className="text-gray-600 mt-2">{service.description}</p>
                        <Link href="/" className="text-[#c28b48] font-semibold mt-4 block">
                            Read More
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
