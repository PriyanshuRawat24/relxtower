"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaClock, FaUser, FaBars } from "react-icons/fa";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="w-full ">
        {/* Top info bar */}
        <div className="max-w-7xl hidden sm:block mx-auto py-2 px-4 text-sm">
          <div className="flex justify-between items-center">
            <p>Welcome to our Relxtower.</p>
            <div className="flex space-x-4 text-gray-700">
              <Link href="tel:+81234568997" className="flex items-center gap-1 hover:text-gray-900">
                <FaPhone size={14} /> +8 12 3456897
              </Link>
              <Link href="mailto:info@example.com" className="flex items-center gap-1 hover:text-gray-900">
                <FaEnvelope size={14} /> info@example.com
              </Link>
              <div className="flex items-center gap-1 flex-shrink-0">
                <FaClock size={14} /> Mon-Fri: 8am - 7pm
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="flex h-[90px]">
  {/* Logo Section */}
  <div className="bg-gray-900 py-4 px-4 sm:px-10 flex items-center">
    <Link href="/">
      <Image
        src="/logo.png"
        alt="Logo"
        width={100}
        height={100}
        className="lg:ml-[50px] sm:ml-[40px]"
      />
    </Link>
  </div>

  {/* Navigation Menu */}
  <div className="bg-amber-400 flex-1 relative flex justify-end md:justify-evenly items-center md:px-20 overflow-hidden">
    <div className="flex justify-end md:justify-between items-center md:px-32">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-900 mr-5"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FaBars size={24} />
      </button>

      {/* Desktop Navigation */}
      <div>
        <nav className="hidden md:flex gap-6">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:text-white hover:bg-gray-900 px-4 py-2 rounded"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>

      {/* Signup Button */}
      <Link
        href="/signup"
        className="items-center bg-gray-900 text-white px-10 py-9 md:ml-[100px] hidden md:flex sm:mr-10"
      >
        <FaUser className="mr-2" /> SIGNUP
      </Link>
    </div>

    {/* Mobile Navigation */}
    {isMenuOpen && (
      <div className="absolute top-full left-0 w-full bg-amber-400 z-50 md:hidden">
        <ul className="flex flex-col text-center">
          {[
            "Home",
            "About",
            "Services",
            "Contact",
          ].map((item) => (
            <li key={item} className="border-b">
              <Link
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="block py-3 hover:bg-amber-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
          <li className="py-3">
            <Link
              href="/signup"
              className="text-white bg-gray-900 px-4 py-2 rounded inline-block"
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
  )
}

export default Header
