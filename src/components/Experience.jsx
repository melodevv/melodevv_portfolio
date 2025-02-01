import ExperienceCard from './ExperienceCard';
import data from '../data.json';

export default function Experience() {
  var count = 0;
  var experienceElements = data.experience.map((experience) => {
    // console.log(experience);
    return (
      <ExperienceCard
        key={experience.id}
        {...experience}
        count={(count += 1)}
      />
    );
  });
  return (
    <section
      id='experience'
      className='experience-section flex flex-col content-center justify-center text-center pt-36 px-8 xsm:px-16 md:px-24 lg:px-36 '>
      <h2 className='experience-title font-extrabold text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl'>
        Experience
      </h2>
      <p className='experience-subtitle font-medium gradient-text pb-16 md:text-lg 2xl:text-xl'>
        EXPLORE NOW
      </p>
      {experienceElements}
    </section>
  );
}
