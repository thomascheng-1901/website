import React from 'react';
import AboutImage from '../assets/image/about.jpg';

const Home = () => {

    return (
        <div id="home" className='ml-10 sm:flex sm:justify-between h-full'>
            <div className='my-auto'>
                <h1 className='font-bold text-xl mb-5'>Hello,</h1>
                <span className='font-bold text-3xl my-5'>I am <span className='font-bold text-3xl my-5 text-yellow-500'>Thomas</span></span>
                <h1 className='font-bold text-2xl my-5'>A junior in Software Engineer</h1>
                <h2>This is a responsive website made with React and Tailwind</h2>
            </div>
            <div className='min-w-[50%] max-w-[50%] mt-5'>
                <img src={AboutImage} alt="AboutImage" className='z-10'></img>
            </div>
        </div>
    )
}

export default Home
