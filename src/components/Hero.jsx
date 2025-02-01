import React from 'react';

export default function Hero() {
  return (
    <header className='hero-section relative flex flex-col justify-center text-center font-bold font-poppins px-8 xsm:px-16 md:px-24 lg:px-36 '>
      <div className='flex flex-col py-36'>
        <span className='gradient-text text-2xl sm:text-3xl 2xl:text-4xl'>
          Hello there <span>😎</span>, I'm
        </span>
        <h1 className='text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl'>
          Tlhokomelo Direko!
        </h1>
        <span className='text-dimmed font-semibold text-xl sm:text-2xl md:text-3xl 2xl:text-4xl'>
          Software developer and Designer
        </span>

        <div className='hr-container'>
          <hr />
        </div>

        <div className='lg:max-w-3/5 self-center'>
          <p className='hero-paragraph font-normal text-center md:text-lg 2xl:text-xl'>
            Passionate Software Engineer with a focus on ASP.NET and Flutter
            Development, dedicated to crafting elegant and user-friendly web and
            mobile applications.
          </p>
        </div>
      </div>
      <img
        className='hero-floating-img hidden md:absolute md:w-28 md:top-3/5 md:right-1/20 md:-z-10 lg:right-3/20 xlg:w-36'
        src='src/assets/images/csharp.png'
        alt=''
      />
      <img
        className='hero-floating-img hidden md:absolute md:w-28 md:top-3/25 md:-z-10 md:left-2/4 xlg:w-36 '
        src='src/assets/images/git.png'
        alt=''
      />
      <img
        className='hero-floating-img hidden md:absolute md:w-28 md:bottom-3/25 md:-z-10 md:left-1/3 xlg:w-36 '
        src='src/assets/images/linux.png'
        alt=''
      />
      <img
        className='hero-floating-img hidden md:absolute md:w-28 md:-z-10 md:left-1/20 lg:left-3/25 xlg:top-1/3 xlg:w-36 '
        src='src/assets/images/python.png'
        alt=''
      />
    </header>
  );
}
