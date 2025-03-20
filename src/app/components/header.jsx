"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaClock, FaUser, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Properties", href: "/property" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full">
        {/* Top */}
        <div className="max-w-7xl hidden sm:block mx-auto py-2  px-4 text-sm">
          <div className="flex flex-wrap justify-between items-center">
            <p className="text-sm md:text-base">Welcome to our Relxtower.</p>
            <div className="flex flex-wrap gap-4 text-gray-700">
              <Link href="tel:+81234568997" className="flex items-center gap-1 hover:text-gray-900 text-sm">
                <FaPhone size={14} /> +8 12 3456897
              </Link>
              <Link href="mailto:info@example.com" className="flex items-center gap-1 hover:text-gray-900 text-sm">
                <FaEnvelope size={14} /> info@example.com
              </Link>
              <div className="flex items-center gap-1 text-sm">
                <FaClock size={14} /> Mon-Fri: 8am - 7pm
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[300px] lg:w-[400px] h-20  md:h-auto bg-gray-900 py-4 px-4 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="ml-2 md:ml-[40px] lg:ml-[50px]"
              />
            </Link>
            <button
              className="md:hidden text-white mr-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {!isMenuOpen ? <FaBars size={24} /> : <IoMdClose size={24} />}
            </button>
          </div>
          <div className="bg-[#c28b48] flex-1">
            <div className="container mx-auto px-4">
              <div className="hidden md:flex justify-between items-center h-full lg:pl-32">
                <nav className="flex gap-6 ">
                  {navigation.map((item, i) => (
                    <Link
                      key={`desktop-nav-${i}`}
                      href={item.href}
                      className="hover:text-white text-gray-950 font-bold px-4 py-2 rounded transition duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <Link
                  href="/signup"
                  className="items-center bg-gray-900 text-white px-6 lg:px-10 py-[35px] flex hover:bg-gray-800 transition duration-300"
                >
                  <FaUser className="mr-2" /> SIGNUP
                </Link>
              </div>
            </div>

            {/* Mobile */}
            {isMenuOpen && (
              <div className="absolute top-[80px] left-0 w-full bg-[#c28b48] z-50 md:hidden shadow-lg">
                <ul className="flex flex-col py-4">
                  {navigation.map((item, i) => (
                    <li key={`mobile-nav-${i}`} className="border-b border-[#c28b48] last:border-none">
                      <Link
                        href={item.href}
                        className="block py-3 px-6 hover:bg-amber-500 transition duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li className="py-4 px-6">
                    <Link
                      href="/signup"
                      className="flex items-center justify-center bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FaUser className="mr-2" /> SIGNUP
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;