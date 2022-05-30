import { useRouter } from 'next/router';

const AboutSection = () => {
  const { locale } = useRouter();
  return (
    <section id='about' className='section-about'>
      <div className='section-about__container'>
        {locale === 'no' ? (
          <>
            <h2 className='heading-secondary u-margin-bottom-large'>Om meg</h2>
            <p>
              Jeg heter Jostein Tollefsrud. Jeg er 27 år, fra et lite sted kalt
              Odnes. Har nettopp fullført en treårig bachelorgrad i webutvikling
              fra Norges teknisk-naturvitenskapelige universitet (NTNU).
            </p>
            <p>
              Jeg har alltid lyst til å lære mer, så i nå for dagen bruker jeg
              tiden på å dykke inn i TypeScript og test drevet utvikling. Jeg
              ser på noen kurs om TypeScript, tilgjengelighet, microfrontends og
              test drevet utvikling på Udemy for å lære mer.
            </p>
          </>
        ) : (
          <>
            <h2 className='heading-secondary u-margin-bottom-large'>
              About myself
            </h2>
            <p>
              My name is Jostein Tollefsrud. I am 27 years and from a small
              place called Odnes. Just finished a three years bachelor&apos;s
              degree in web development from the Norwegian University of Science
              and Technology (NTNU).
            </p>
            <p>
              I am always wanting to learn more so these days I spend on diving
              into TypeScript and test-driven development. I am watching some
              courses about TypeScript, Accessibility, Microfrontends, and
              test-driven development on Udemy to educate myself further.
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
