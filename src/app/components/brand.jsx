"use client"

import Image from "next/image";

const brands = [
  { name: "goldline", src: "/brand1.png" },
  { name: "UTOSIA", src: "/brand2.png" },
  { name: "LightAI", src: "/brand3.png" },
  { name: "treva", src: "/brand4.png" },
  { name: "hexa", src: "/brand5.png" },
  { name: "circle", src: "/brand6.png" },
];

const Brand = () => {
  return (
    <div className="bg-[#cc8b4a] py-6 md:py-10">
      <div className="container mx-auto flex justify-center items-center gap-16 flex-wrap">
        {brands.map((brand, index) => (
          <div key={index} className="w-32 md:w-40 flex justify-center">
            <Image
              src={brand.src}
              alt={brand.name}
              width={120}
              height={50}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
