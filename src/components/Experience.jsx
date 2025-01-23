import React from 'react';

export default function Experience() {
  return (
    <section
      id='experience'
      class='experience-section flex flex-col content-center justify-center text-center pt-36 px-8 xsm:px-16 md:px-24 lg:px-36 2xl:px-96'>
      <h2 class='experience-title font-extrabold text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl'>
        Experience
      </h2>
      <p class='experience-subtitle font-medium gradient-text pb-16 md:text-lg 2xl:text-xl'>
        EXPLORE NOW
      </p>
      <div class='experience-record text-start mb-20'>
        <div class='job-heading flex relative pb-8'>
          <span class='text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl absolute -left-7'>
            1
          </span>
          <div class='md:flex w-full justify-between items-start'>
            <h3 class='job-title text-lg md:text-2xl 2xl:text-3xl'>
              <b>Central University of Technology /</b> Student Instructor
            </h3>
            <p class='job-date'>MAY 2022 - PRESENT, HYDERABAD</p>
          </div>
        </div>
        <p class='job-description pb-5 md:text-lg 2xl:text-xl'>
          Currently, I am working on WebHR Mobile Application, WebHR is a Cloud
          based Social HR Software for SMEs by Verge Systems Inc. WebHR is
          currently used in over 160 countries world wide by thousands of
          organizations to manage HR, As a React.js developer with 1.5 year of
          experience, I have a strong foundation in creating dynamic and
          responsive mobile and web applications.
          <br />
          My experience with React Native has allowed me to develop
          cross-platform mobile applications that run seamlessly on both iOS and
          Android platforms. Additionally, my proficiency in React.js has
          equipped me with the skills to create fast, scalable, and dynamic web
          pages with excellent user experiences. I have a deep understanding of
          component-based architecture and state management, and I am
          well-versed in the latest web development trends and technologies.
        </p>
        <div class='job-tools flex gap-5'>
          <p class='gradient-border px-2 py-2'>React Native</p>
          <p class='gradient-border px-2 py-2'>React Native</p>
          <p class='gradient-border px-2 py-2'>React Native</p>
        </div>
      </div>
    </section>
  );
}
