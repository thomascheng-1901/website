import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_95w0qu5', form.current, '6im6ZmbNP_y4McmlS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
        });
        e.target.reset();
    }

    return (
        <div id="contact" className='ml-10 mt-12 mr-10'>
            <div className='underline font-bold text-3xl mb-5'>Contact</div>
            <form ref={form} onSubmit={sendEmail}>
                <div> 
                    <input className='border w-full text-black' placeholder='Enter your email' name='email'></input>
                    <input className='mt-5 mb-5 border w-full text-black' placeholder='Enter your name' name='name'></input>
                    <textarea className='text-black w-full' cols="30" rows="10" name='message'></textarea>
                    <button type="submit" className='bg-yellow-500 w-full mt-5 mb-20'>SEND</button>
                </div>
            </form>
        </div>
    )
} 

export default Contact
