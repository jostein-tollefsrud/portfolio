import AvatarFull from '@/components/AvatarFull';
import AvatarSmall from '@/components/AvatarSmall';
import ContactForm from '@/components/ContactForm';
import FormSocialList from '@/components/FormSocialList';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';

interface Props {
  plantmanagerImg: any;
  bachelorImg: any;
  portfolioImg: any;
}

const Home: NextPage<Props> = () => {
  return (
    <div>
      <Head>
        <title>Hi there, my name is Jostein</title>
        <meta
          name='description'
          content='My name is Jostein Tollefsrud. I am 27 years, from a small place called Odnes. Just finished a three years bachelor degree in web development from the Norwegian University of Science and Technology (NTNU).'
        />
      </Head>
      <main id='maincontent'>
        <section className='section-hero'>
          <div className='section-hero--left'>
            <div>
              <h1 className='heading-primary u-margin-bottom-medium'>
                Hi there, my name is Jostein
              </h1>
              <p className='text-sub u-margin-bottom-large'>
                I am a fullstack web developer with a passion for clean code.
              </p>
              <div className='hero__button-container'>
                <Link href='#projects'>
                  <a className='btn btn--red '>My PROJECTS</a>
                </Link>
                <span className='blob'></span>
              </div>
            </div>
          </div>

          <div className='section-hero--right'>
            <div>
              <AvatarFull />
            </div>
          </div>
        </section>

        {/* #### PROJECTS #### */}
        <ProjectsSection />

        {/* #### ABOUT #### */}
        <AboutSection />

        {/* #### CONTACT #### */}
        <section id='contact' className='section-contact'>
          <h2 className='heading-secondary u-text-center u-margin-bottom-large'>
            Get in touch
          </h2>
          <div className='section-contact__container'>
            <div className='contact-flex'>
              <div className='color'></div>
              <div className='content-avatar'>
                <AvatarSmall />
              </div>
              <div className='contact-flex--left'>
                <p className='text-sub'>
                  If you want to contact me you can use the form or one of the
                  listed items
                </p>
                <FormSocialList />
              </div>

              <div className='contact-flex--right'>
                <div className='form-avatar'>
                  <AvatarSmall />
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
