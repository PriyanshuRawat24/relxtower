"use client"

import Image from 'next/image';
import React from 'react'
import { useState } from 'react';

const newdata = [
    {
      newtitle: "TOTAL AREA",
      area: "2800 SQFT",
    },
    {
      newtitle: "FLOOR NO.",
      area: "2ND",
    },
    {
      newtitle: "CURRENT STATUS",
      area: "AVAILABLE",
    },
    {
      newtitle: "NO. OF ROOMS",
      area: "04",
    },
    {
      newtitle: "PARKING AVAILABLE",
      area: "YES",
    },
    {
      newtitle: "PRICE FROM ",
      area: "$4500",
    },
  ];
  

const plans = {
    PENTHOUSE: {
      img: "/floor-chart.jpg",
      description:
        "Interior of volumes, space, air, proportion, with certain light and mood. These interiors are meant to last forever. You need to be sure there isn't anything embarrassing hidden in the middle of text.",
    },
    STUDIO: {
      img: "/floor-chart.jpg",
      description:
        "Interior of volumes, space, air, proportion, with certain light and mood. These interiors are meant to last forever. You need to be sure there isn't anything embarrassing hidden in the middle of text.",
    },
    DUPLEX: {
      img: "/floor-chart.jpg",
      description:
        "Interior of volumes, space, air, proportion, with certain light and mood. These interiors are meant to last forever. You need to be sure there isn't anything embarrassing hidden in the middle of text.",
    },
  };

const Plan = () => {

    const [activePlan, setActivePlan] = useState("STUDIO");

  return (
    <>

<div className="grid grid-cols-1 sm:grid-cols-2 py-12 sm:py-20 lg:mt-10 w-full px-4 sm:px-12 lg:px-12">
        {/* Left Side - Plan Info */}
        <div className="px-4 sm:px-10 w-full">
          <p className="font-bold text-[#C88964] pb-2">CHECKOUT THE PLAN</p>
          <h1 className="text-2xl sm:text-4xl font-bold text-black">
            APARTMENT PLANS
          </h1>

          {/* Plan Selection Buttons */}
          <div className="flex flex-wrap gap-4 py-10">
            {Object.keys(plans).map((plan) => (
              <button
                key={plan}
                onClick={() => setActivePlan(plan)}
                className={`w-[140px] sm:w-[160px] px-6 py-3 text-sm font-semibold rounded-md transition-all duration-300 ${activePlan === plan
                  ? "bg-[#CD8C66] text-white"
                  : "bg-gray-300 text-black hover:bg-gray-400"
                  }`}
              >
                {plan}
              </button>
            ))}
          </div>

          {/* Plan Details List */}
          <div className="flex flex-col sm:flex-row sm:space-x-6 py-10">
            <div className="w-full sm:w-[440px]">
              {newdata.map((data, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between p-4 px-6 rounded-md ${idx % 2 === 0 ? "bg-[#F6F4F1]" : "bg-white"
                    } border border-gray-300`}
                >
                  <span>{data.newtitle}</span>
                  <span>{data.area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Image & Description */}
        <div className="w-full mt-10 sm:mt-0">
          <p className="text-start text-gray-600 pl-0 sm:pl-8">
            {plans[activePlan].description}
          </p>
          <div className="flex justify-center sm:justify-start mt-6 sm:mt-24">
            <Image
              className="border-2 p-4 rounded-lg h-[420px] w-[500px]"
              width={500}
              height={700}
              src={`${plans[activePlan].img}`}
              alt={activePlan}
            />
          </div>
        </div>
      </div>

    </>
  )
}

export default Plan
