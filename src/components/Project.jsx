import React from 'react'
import AppApk from '../assets/file/AppApk.apk'
import Carousel from './Carousel'
import AboutImage from '../assets/image/about.jpg'

const Project = () => {

    const imageSlides = [
        AboutImage,
        AboutImage,
    ];

    const imageDescription = [
        "sign in",
        "main page"
    ];

    return (
        <div id='project' className='ml-10 mt-10 mr-10 sm:flex'>
            <div className='sm:w-[30%] mr-10 mb-5 sm:mb-0'>
                <h1 className='underline font-bold text-3xl mb-5'>Project</h1>
                <h1 className='mt-10 mb-3'>Shopping App Demo</h1>
                <span>Tech stack: <span className='font-bold text-xl'>Flutter, Firebase</span></span>
                <div className='mt-10'><a className="hover:text-yellow-500 hover:underline" href={AppApk} download="AppApk">Click Here to Download APK file</a></div>
            </div>
            <div className="w-full mr-5 sm:w-[50%] sm:mt-10">
                <Carousel slides={[...imageSlides.map((s) => (
                        <img src={s} alt='projectDemo'/>
                    ))]} description={imageDescription}>
                </Carousel>
            </div>
        </div>
    )
}

export default Project
