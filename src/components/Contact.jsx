import React from 'react'

const Contact = () => {
    return (
        <div id="contact" className='ml-10 mt-12 mr-10'>
            <div className='underline font-bold text-3xl mb-5'>Contact</div>
            <div>
                <input className='border w-full text-black' placeholder='Enter your email'></input>
                <textarea className='mt-5 text-black w-full' cols="30" rows="10"></textarea>
            </div>
            <button className='bg-yellow-500 w-full mt-5 mb-20'>SENT</button>
        </div>
    )
} 

export default Contact
