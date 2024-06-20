import React from 'react';
import './Top_bar.css'

import { Link } from 'react-router-dom';


function Top_bar() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="top-0 w-full bg-white border-b-2 z-10 sticky">
            <div className="flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                <div className="inline-flex items-center space-x-2">
                    <span className="font-bold">Urbanique</span>
                </div>
                <div className="lg:block">
                    <ul className="inline-flex space-x-8">
                        <li>
                            <button onClick={() => scrollToSection("home")} className="text-sm font-semibold text-red-800 hover:text-red-900"> Home</button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection("men")} className="text-sm font-semibold text-red-800 hover:text-red-900"> Men</button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection("women")} className="text-sm font-semibold text-red-800 hover:text-red-900"> Women</button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection("kids")} className="text-sm font-semibold text-red-800 hover:text-red-900"> Kids</button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection("about")} className="text-sm font-semibold text-red-800 hover:text-red-900"> About</button>
                        </li>

                    </ul>
                </div>

                <div className="ml-2 mt-2  lg:block">
                    <span className="relative inline-block">

                        <button className="h-10 w-10 rounded-full border border-gray-300">
                            <Link to="/login">
                            <img
                                className="h-full w-full rounded-full"
                                src="src\Images\profile-user.png"
                                alt="Dan_Abromov"
                            />
                            </Link>
                        </button>
                        
                    </span>
                </div>

            </div>
        </div>
    );
}

export default Top_bar;
