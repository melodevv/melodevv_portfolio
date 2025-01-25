import React from 'react';

export default function Hero() {
  return (
    <header className='hero-section flex flex-col justify-center text-center font-bold font-poppins px-8 xsm:px-16 md:px-24 lg:px-36 2xl:px-96'>
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

      <p className='hero-paragraph font-normal text-center md:text-lg 2xl:text-xl'>
        Passionate Software Engineer with a focus on ASP.NET and Flutter
        Development, dedicated to crafting elegant and user-friendly web and
        mobile applications.
      </p>
    </header>
  );
}
