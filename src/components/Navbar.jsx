import React, { useState } from 'react';
import {FaBars} from "react-icons/fa";

const Navbar = () => {

    const [showNavBar, setShowNavBar] = useState(false);

    function toggleNavBar(){
        setShowNavBar(!showNavBar);
    }

    return (
        <div className='flex justify-between'>
            {/* hamburger icon */}
            <div className='sm:hidden justify-between p-4 z-10 text-center'>
                <FaBars onClick={toggleNavBar} className='hover:cursor-pointer'/>
            </div>
            {/* navbar */}
                <div className='sm:flex text-right w-full mx-10 py-4'>
                    Portfolio
                </div>
                <ul className='hidden sm:flex justify-between w-full mr-10'>
                    <li className = 'hover:text-yellow-500 hover:underline hover:cursor-pointer'>
                        <a href="#home">Home</a>
                    </li>
                    <li className = 'hover:text-yellow-500 hover:underline hover:cursor-pointer'>
                        <a href="#experience">Experience</a>
                    </li>
                    <li className = 'hover:text-yellow-500 hover:underline hover:cursor-pointer'>
                        <a href="#project">Project</a>
                    </li>
                    <li className = 'hover:text-yellow-500 hover:underline hover:cursor-pointer'>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            {/* sidebar */}
            <div className={showNavBar? 'sm:hidden ease-in duration-200 bg-gray-700 w-full absolute top-0 left-0 text-center h-screen' : 'h-screen sm:hidden ease-in duration-200 bg-gray-700 w-full absolute top-0 left-[-100%] text-center'}>
                <ul className=''>
                    <li className = 'hover:text-yellow-500 hover:underline hover:cursor-pointer'>
                        <a href="#home">Home</a>
                    </li>
                    <li className = 'hover:text-yellow-500 hover:underline hover:cursor-pointer'>
                        <a href="#experience">Experience</a>
                    </li>
                    <li className = 'hover:text-yellow-500 hover:underline hover:cursor-pointer'>
                        <a href="#project">Project</a>
                    </li>
                    <li className = 'hover:text-yellow-500 hover:underline hover:cursor-pointer'>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
