import React from 'react'
import AppApk from '../assets/file/AppApk.apk'
import Carousel from './Carousel'
import AboutImage from '../assets/image/about.jpg'
import MainPage from '../assets/image/mainPage.jpg'
import ItemPage from '../assets/image/itemPage.jpg'
import ProfilePage from '../assets/image/profilePage.jpg'

const Project = () => {

    const imageSlides = [
        AboutImage,
        AboutImage,
        MainPage
    ];

    const imageDescription = [
        "sign in",
        "main page"
    ];

    const imagePathAndDescription = {
        "main page" : MainPage,
        "item page" : ItemPage,
        "profile page" : AboutImage
    }

    function getValue(key){
        return imagePathAndDescription[key];
    }

    return (
        <div id='project' className='ml-10 mt-12 mr-10 sm:flex md:mt-20'>
            <div className='sm:w-[30%] mr-10 mb-5 sm:mb-0'>
                <h1 className='underline font-bold text-3xl mb-5'>Project</h1>
                <h1 className='mt-10 mb-3'>Shopping App Demo</h1>
                <span>Tech stack: <span className='font-bold text-xl'>Flutter, Firebase</span></span>
                <div className='mt-10'><a className="hover:text-yellow-500 hover:underline" href={AppApk} download="AppApk">Click Here to Download APK file</a></div>
            </div>
            <div className="sm:mt-10 sm:w-[40%] md:w-[30%] w-[60%] items-center">
                <Carousel className='' slides={[...Object.keys(imagePathAndDescription).map(s=>getValue(s)).map((s) => (
                        <img className='' src={s} alt='projectDemo'/>
                    ))]} description={[...Object.keys(imagePathAndDescription)]}>
                </Carousel>
            </div>
        </div>
    )
}

export default Project
