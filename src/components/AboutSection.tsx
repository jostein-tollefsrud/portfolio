const AboutSection = () => {
  return (
    <section id='about' className='section-about'>
      <div className='section-about__container'>
        <h2 className='heading-secondary u-margin-bottom-large'>
          About myself
        </h2>
        <p>
          My name is Jostein Tollefsrud. I am 27 years, from a small place
          called Odnes. Just finished a three years bachelor degree in web
          development from the Norwegian University of Science and Technology
          (NTNU).
        </p>
        <p>
          {' '}
          I am always wanting to learn more so these days I spend on diving into
          TypeScript and test driven development. I am watching some courses
          about TypeScript, Accessibility, Microfrontends and test driven
          development on Udemy to educate myself further.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
