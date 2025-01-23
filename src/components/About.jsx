import React from 'react';

export default function About() {
  return (
    <section
      id='about-me'
      class='about-section flex flex-col content-center justify-center text-center px-8 xsm:px-16 md:px-24 lg:px-36 2xl:px-96'>
      <h2 class='about-title font-extrabold text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl'>
        ABOUT ME
      </h2>
      <p class='about-subtitle font-medium gradient-text pb-16 md:text-lg 2xl:text-xl'>
        EXPLORE NOW
      </p>
      <p class='about-description md:text-lg 2xl:text-xl'>
        As a passionate software engineer, I thrive on the intricate dance
        between logic and creativity. Currently immersed in the dynamic world of
        WebHR, my expertise centers around React Native, where I seamlessly
        blend technology with innovation.
        <br />
        With a fervor for crafting elegant solutions, I navigate the
        ever-evolving landscape of software development. My journey involves
        translating concepts into code, creating seamless user experiences, and
        constantly pushing the boundaries of what's possible
      </p>
    </section>
  );
}
