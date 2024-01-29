import React from 'react'

const Experience = () => {
    return (
        <div id='experience' className=''>
            <div className='underline font-bold text-3xl ml-10 mt-12 mb-5'>Experience</div>
                <div className='ml-6'>
                    <table className='table-fixed ml-4 mr-10'>
                        <tbody>
                            <tr className='w-full flex justify-between'>
                                <td className=''>Software Engineer</td>
                                <td className=''>Seekr</td>
                                <td className=''>2022 Dec – 2023 Jan</td>
                            </tr>
                            <div className='break-words text-gray-300 mt-5'>
                                <span><span className='font-bold italic text-white'>Job description:</span> Responsible for maintaining the frontend and backend of a mobile app using Flutter and Firebase for visually impaired people</span>
                            </div>
                        </tbody>
                        <tbody>
                            <tr className='w-full flex justify-between mt-5'>
                                <td>Software Engineer</td>
                                <td>Century Lab Innovation Limited</td>
                                <td>2022 Jun – 2022 Jul</td>
                            </tr>
                            <div className='break-words text-gray-300 mt-5'>
                                <span><span className='font-bold italic text-white'>Job description:</span> Responsible for building the frontend of a communication app using Flutter and help in developing its backend using Firebase</span>
                            </div>
                        </tbody>
                        <tbody>
                            <tr className='w-full flex justify-between mt-5'>
                                <td>Software Engineer</td>
                                <td>Intelligent Design Technology Limited</td>
                                <td>2021 Dec – 2022 Jan</td>
                            </tr>
                            <div className='break-words text-gray-300 mt-5'>
                                <span><span className='font-bold italic text-white'>Job description:</span> Assist with the development and improvement of the existing software and the examination of its integrity</span>
                            </div>
                        </tbody>
                    </table>
                </div>
        </div>
    )
}   

export default Experience
