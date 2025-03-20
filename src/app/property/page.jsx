"use client"

import React from 'react'
import Banner from '../components/banner'
import Image from 'next/image'
import { fetchProperties } from '@/utils/Api';
import { useEffect, useState } from 'react'
import Link from 'next/link';

const Page = () => {

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProperties()
      setProperties(data)
    }

    fetchData()
  }, [])

  return (
    <>

      <Banner heading={"Property"} breadcrumbs={"Property"} />


      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 mb-20">
        {properties.map((Property, index) => (
          <Link href={`/property/${index}`} key={index} className="basis-full sm:basis-1/2 lg:basis-1/3">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="relative w-full sm:h-72 md:h-[500px] flex items-center justify-center">
                <Image
                  src={Property.image}
                  alt=""
                  width={600}
                  height={600}
                />
              </div>

              <div className="p-6 text-center">
                <p className="text-gray-600 uppercase tracking-wide">Explore Now</p>
                <h2 className="text-2xl font-bold mt-2">{Property.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Page
