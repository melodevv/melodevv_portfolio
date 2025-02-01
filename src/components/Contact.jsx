import React from 'react';

export default function Contact() {
  return (
    <section
      id='contact'
      className='project-section flex flex-col content-center justify-center text-center pt-36 pb-10 px-5 md:px-7 lg:px-36'>
      <h2 className='project-title font-extrabold text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl'>
        Contact
      </h2>
      <p className='project-subtitle font-medium gradient-text pb-16 md:text-lg 2xl:text-xl'>
        EXPLORE NOW
      </p>
      <form action='#' method='POST'>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-dimmed font-medium mb-2'>
            Full Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Your Full Name'
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            required
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='email' className='block text-dimmed font-medium mb-2'>
            Email Address
          </label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Your Email'
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            required
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='message'
            className='block text-dimmed font-medium mb-2'>
            Your Message
          </label>
          <textarea
            id='message'
            name='message'
            placeholder='Your Message'
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            rows='4'
            required></textarea>
        </div>

        <div className='flex justify-center'>
          <button
            type='submit'
            className='w-full py-3 px-4 gradient-background text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
