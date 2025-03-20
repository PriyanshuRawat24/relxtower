import Image from "next/image";
import HeroSection from "./components/hero";
import AboutSection from "./components/about";
import Menu from "./components/menu";
import Property from "./components/property";
import Services from "./components/service";
import Appointment from "./components/appointment";
import Plan from "./components/plan";
import Link from "next/link";
import Testimonial from "./components/testimonial";
import Brand from "./components/brand";

const properties = [
  { residence: "RESIDENT TOWER", bedBath: "3/1", sqft: 700, salePrice: "$66800", rentPrice: "$700/M" },
  { residence: "UNIQ VILLA", bedBath: "4/2", sqft: 1200, salePrice: "$56800", rentPrice: "-" },
  { residence: "LOCAL TOWER", bedBath: "4/1", sqft: 120, salePrice: "$9000", rentPrice: "-" },
  { residence: "RED CITY", bedBath: "6/2", sqft: 8500, salePrice: "$909800", rentPrice: "-" }
];

export default function Home() {
  return (
    <>

      <HeroSection />

      <AboutSection />

      <Menu />

      {/* section-4 */}

      <Property />

      {/* section-5 */}

      <div className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-12 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <div className="w-full">
              <Image
                src="/sell-property.png"
                width={500}
                height={400}
                alt="Modern House"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>

            {/* Text Content */}
            <div>
              <p className="text-[#c28b48] uppercase tracking-wide font-medium">
                Best Place
              </p>
              <h2 className="text-4xl font-semibold mt-2">For Sell Properties</h2>
              <div className="w-20 h-1 bg-[#c28b48] mt-3"></div>
              <p className="text-gray-600 mt-10">
                Pellentesque habitant morbi tristique senectus et netus et fames
                ac turpis egestas. Vestibulum tortor quam, feugiat vitae, tempor
                sit amet, ante. Donec eu libero sit amet quam egestas semper.
              </p>

              {/* Property Details */}
              <div className="grid grid-cols-2 gap-7 mt-10 text-gray-700">
                <p className="flex items-center">
                  🛏️ <span className="ml-2">3 Bedrooms</span>
                </p>
                <p className="flex items-center">
                  📏 <span className="ml-2">Square Feet</span>
                </p>
                <p className="flex items-center">
                  🛏️ <span className="ml-2">Bedrooms</span>
                </p>
                <p className="flex items-center">
                  🚗 <span className="ml-2">Car Parking</span>
                </p>
              </div>

              {/* Price & Button */}
              <p className="text-xl font-bold mt-8">Price:</p>
              <p className="text-3xl font-bold text-gray-800 mt-5">$1,786.80</p>
              <Link href={"/contact"}>
              <button className="bg-[#c28b48] text-white px-6 py-3 mt-6 rounded-lg shadow-md">
                Contact Us
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* section-6 */}
      <Services />

      {/* section-7 */}

      <Appointment />

      {/* section-8 */}

      <Plan />

      {/* section-9 */}

      <div className="py-12 px-4 lg:px-16 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <p className="text-[#c28b48] uppercase tracking-wide font-medium">Our Plans</p>
          <h2 className="text-5xl font-bold mt-2">Select Availability</h2>
          <div className="w-16 h-1 bg-[#c28b48] mx-auto mt-3"></div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-16">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#c28b48] text-white text-left">
                <th className="px-6 py-4">RESIDENCE</th>
                <th className="px-6 py-4">BED/BATH</th>
                <th className="px-6 py-4">SQ.FT</th>
                <th className="px-6 py-4">SALE PRICE</th>
                <th className="px-6 py-4">RENT PRICE</th>
                <th className="px-6 py-4">FLOOR PLAN</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((property, index) => (
                <tr key={index} className="border-b">
                  <td className="px-6 py-4">{property.residence}</td>
                  <td className="px-6 py-4">{property.bedBath}</td>
                  <td className="px-6 py-4">{property.sqft}</td>
                  <td className="px-6 py-4">{property.salePrice}</td>
                  <td className="px-6 py-4">{property.rentPrice}</td>
                  <td className="px-6 py-4">
                    <Link href="/">
                      <button className="bg-[#c28b48] text-white px-6 py-2 rounded-full shadow-lg hover:bg-orange-600 transition">
                        View Now
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* section-10 */}

      <Testimonial/>

      {/* section-11 */}

      <Brand/>










    </>
  );
}
