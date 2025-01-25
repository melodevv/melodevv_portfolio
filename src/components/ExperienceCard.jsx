export default function ExperienceCard(props) {
  return (
    <article className='experience-record text-start mb-20'>
      <div className='job-heading flex relative pb-8'>
        <span className='text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl absolute -left-7'>
          {props.count}
        </span>
        <div className='md:flex w-full justify-between items-start'>
          <h3 className='job-title text-lg md:text-2xl 2xl:text-3xl'>
            <b>{props.jobTitle.place} /</b> {props.jobTitle.position}
          </h3>
          <p className='job-date'>{props.jobDates}</p>
        </div>
      </div>
      <p className='job-description pb-5 md:text-lg 2xl:text-xl'>
        {props.jobDescription}
      </p>
      <div className='job-tools flex gap-5'>
        {props.jobTools.map((tool, index) => (
          <p key={index} className='gradient-border px-2 py-2'>
            {tool}
          </p>
        ))}
      </div>
    </article>
  );
}
