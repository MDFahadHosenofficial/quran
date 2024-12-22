import React from "react";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row  ">
                    {/* Logo and Social Media Icons */}
                    <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">

                        {/* Social Media Icons */}
                        <div className="flex gap-4 pl-8 pt-8 text-xl">
                            <a href="#" className="hover:text-gray-400">
                                <AiOutlineTwitter />
                            </a>
                            <a href="#" className="hover:text-gray-400">
                                <FaInstagram />
                            </a>
                            <a href="#" className="hover:text-gray-400">
                                <FaYoutube />
                            </a>
                            <a href="#" className="hover:text-gray-400">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    {/* Links Section */}
                    {/* Policy and Conditions */}
                    <section className="font-semibold gap-4" id="policy">
                        <div className="pl-4 w-[310px] height-[32px]">
                            <h3 className="font-semibold text-lg mb-3">Policy and Conditions</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-gray-400">
                                        Community
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-400">
                                        Contributions
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>
                    {/* Explore */}
                    <section id="explore">

                        <div className="pl-4">
                            <h3 className="font-semibold text-lg mb-3">Explore</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-gray-400">
                                        Quran
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-400">
                                        Prototyping
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>
                    {/* Resources */}
                    <section id="resourse">
                        <div className="pl-52">
                            <h3 className="font-semibold text-lg mb-3">Resources</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-gray-400">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-400">
                                        Best Practices
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
