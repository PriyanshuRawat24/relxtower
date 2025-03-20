"use client"

import { useState } from "react";
import Banner from "../components/banner";
import Brand from "../components/brand";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        topic: "",
        comments: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <>

            <Banner heading={"Contact Us"} breadcrumbs={"Contact"}/>


            <div className="flex flex-col lg:flex-row max-w-5xl mx-auto my-10 gap-6">
                {/* Left Section */}
                <div className="bg-gray-900 text-white p-6 w-full h-[85vh] lg:w-1/3">
                    <div className="mb-10">
                        <h2 className="text-lg font-bold uppercase">Office Address</h2>
                        <p className="mt-8">380 St Kilda Road, Melbourne,<br /> VIC 3004, Australia</p>
                    <div className="border-b-2 mt-16"></div>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-lg font-bold">Working Hours</h2>
                        <p>Monday to Friday 09:00 to 18:30</p>
                        <p>Saturday we work until 15:30</p>
                        <div className="border-b-2 mt-16"></div>
                    </div>  
                    <div>
                        <h2 className="text-lg font-bold">Message Us</h2>
                        <p>
                            We are always with you to solve your problem. Mail us:
                            <a href="mailto:support@example.com" className="text-[#cc8b4a]"> support@example.com</a>
                        </p>
                    </div>
                </div>

                {/* Right Section - Form */}
                <div className="w-full lg:w-2/3 bg-white mt-14">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-12">
                            <input
                                type="text"
                                name="name"
                                placeholder="Write here your name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 border"
                            />
                        </div>
                        <div className="mb-12">
                            <input
                                type="email"
                                name="email"
                                placeholder="Write here your email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 border"
                            />
                        </div>
                        <div className="mb-12">
                            <input
                                type="text"
                                name="topic"
                                placeholder="I would like to discuss"
                                value={formData.topic}
                                onChange={handleChange}
                                className="w-full p-3 border"
                            />
                        </div>
                        <div className="mb-12">
                            <textarea
                                name="comments"
                                placeholder="Write comments"
                                value={formData.comments}
                                onChange={handleChange}
                                className="w-full p-3 border"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-[#cc8b4a] mb-12 text-white p-3 w-[200px] hover:bg-yellow-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            <Brand/>
        </>
    );
}
