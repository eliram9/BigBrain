import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ContactUs } from '../../media/icons';

const ContactForm = () => {
  const [formInputs, setFormInputs] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e) => {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('service_7akd5q8', 'template_jl2z84d', formInputs, 'O9q0VZ9cLLSlaWNod')
      .then((result) => {
        console.log(result.text);
        setSubmissionStatus('Email sent successfully!');
        setFormInputs({
          first_name: '',
          last_name: '',
          phone: '',
          email: '',
          message: '',
        });
        setTimeout(() => {
          setSubmissionStatus('');
        }, 5000);
      }, (error) => {
        console.log(error.text);
        setSubmissionStatus('Failed to send email. Please try again.');
        setTimeout(() => {
          setSubmissionStatus('');
        }, 5000);
      });
  };

  return (
    <div className='px-10 w-full poppins sm:px-0 lg:px-0 h-full'>
      <form onSubmit={sendEmail} className='w-full font-light'>
        <div className='w-full grid grid-cols-2 gap-10 justify-center items-start text-md lg:text-sm sm:gap-3'>
          <div className='w-full pb-10'>
            <input
              type="text"
              name="first_name"
              value={formInputs.first_name}
              onChange={handleChange}
              required
              placeholder='First Name'
              className='border-main border-2 rounded-[12px] w-full px-2 p-2 dark:border-white'
            />
          </div>
          <div className='w-full pb-10'>
            <input
              type="text"
              name="last_name"
              value={formInputs.last_name}
              onChange={handleChange}
              placeholder='Last Name'
              required
              className='border-main border-2 rounded-[12px] w-full px-2 p-2 dark:border-white'
            />
          </div>
        </div>

        <div className='w-full grid grid-cols-2 gap-10 justify-center items-start text-md lg:text-sm sm:gap-3'>
          <div className='w-full pb-10'>
            <input
              type="email"
              name="email"
              value={formInputs.email}
              onChange={handleChange}
              placeholder='Email Address'
              required
              className='border-main border-2 rounded-[12px] w-full px-2 p-2 dark:border-white'
            />
          </div>
          <div className='w-full pb-10'>
            <input
              type="number"
              name="phone"
              value={formInputs.phone}
              onChange={handleChange}
              placeholder='Phone Number'
              required
              className='border-main border-2 rounded-[12px] w-full px-2 p-2 dark:border-white'
            />
          </div>
        </div>

        <div className='w-full pb-10'>
          <label htmlFor="message" className="block mb-1 text-sm font-light text-darkGray lg:text-sm dark:text-lightGray">Message (optional)</label>
          <textarea
            name="message"
            value={formInputs.message}
            onChange={handleChange}
            rows={3}
            className='border-main border-2 rounded-[12px] w-full px-2 p-2 lg:text-sm dark:border-white'>
          </textarea>
        </div>

        <button
          type="submit"
          className='w-full flex justify-center bg-main text-white font-regular pt-3 pb-[10px] rounded-[12px] border-transparent hover:bg-[#0E3A4A] hover:text-white hover:font-normal md:text-md sm:border-white '
        >
          Send
          <ContactUs className='md:h-[22px] ml-2' />
        </button>
      </form>
      {submissionStatus && (
        <div className={`mt-4 p-2 rounded ${submissionStatus === 'Email sent successfully!' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
          {submissionStatus}
        </div>
      )}
    </div>
  );
};

export default ContactForm;