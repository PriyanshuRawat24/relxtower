import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { IoLogoGoogleplus } from "react-icons/io";

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-900 text-gray-300 py-16 px-6">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <div className="">
                            <Link href="/">
                                <Image
                                    src="/footer-logo.png"
                                    alt="footer-logo"
                                    width={200}
                                    height={100} />
                            </Link>
                            <p className='mt-4 text-gray-400'>
                                Pellentesque habitant morbi tristique senectus et netus et fames acturpis egestas. Vestibulum tortor quam, feugiat vitae, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. mivitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien.
                            </p>
                        </div>
                        <p className="mt-4 text-gray-400">
                        </p>
                        <div className="flex items-center space-x-10 mt-4">
                            <span className='text-white text-lg  font-semibold capitalize'>Follow Us</span>
                            <span className="text-lg"><FaInstagram /></span>
                            <span className="text-lg"><FaFacebookF /></span>
                            <span className="text-lg"><FaTwitter /></span>
                            <span className="text-lg"><IoLogoGoogleplus /></span>
                        </div>
                    </div>
                    <div className='lg:ml-24'>
                        <h3 className="text-white font-semibold mb-3">Company News</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Partners</li>
                            <li>About Us</li>
                            <li>Career</li>
                            <li>Reviews</li>
                            <li>Terms & Conditions</li>
                            <li>Help</li>
                        </ul>
                    </div>
                    <div className='lg:ml-24'>
                        <h3 className="text-white font-semibold mb-3">Useful Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Project</li>
                            <li>Our Team</li>
                            <li>Latest Blog</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-32 border-t border-gray-700 py-16 text-center items-center flex justify-center text-gray-500">
                    &copy; 2020 @ Relxtower All design Zcube.
                </div>
                {/* <button className="fixed bottom-5 right-5 bg-orange-500 text-white p-3 rounded-full shadow-lg">
                    
                </button> */}
            </footer>





        </>
    )
}

export default Footer
