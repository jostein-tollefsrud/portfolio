import Card from '@/components/Card';
import { FC } from 'react';

import plantmanagerIMG from '../../public/images/plantmanager-small.jpg';
import bachelorIMG from '../../public/images/bachelor-small.jpg';
import portfolioIMG from '../../public/images/portfolio-small.jpg';
import { useRouter } from 'next/router';

const ProjectsSection: FC = () => {
  const { locale } = useRouter();
  return (
    <section id='projects' className='section-projects'>
      <h2 className='heading-secondary u-text-center u-margin-bottom-large'>
        {locale === 'no' ? 'Prosjekter' : 'Projects'}
      </h2>
      <div className='card-container'>
        <Card
          link='/prosjekter/bachelor-project'
          img={bachelorIMG}
          title={locale === 'no' ? 'Bachelor prosjekt' : 'Bachelor project'}
        >
          {locale === 'no'
            ? 'Ny forbedret nettside med en CMS løsning som ikke krever kunnskap om HTML til Studenthuset i Gjøvik.'
            : 'New improved website with a CMS solution that does not require knowledge of HTML for the Student House in Gjøvik.'}
        </Card>

        <Card
          link='/prosjekter/plantmanager'
          img={plantmanagerIMG}
          title={'NTNU plant manager'}
        >
          {locale === 'no'
            ? 'Dette prosjektet ble laget for å holde orden på vanning, gjødsling og plassering av planter på NTNU Gjøvik.'
            : 'This project was created to keep track on watering, fertilizing and placment of plants at NTNU Gjøvik.'}
        </Card>

        <Card
          link='/prosjekter/personal-portfolio'
          img={portfolioIMG}
          title={locale === 'no' ? 'Personlig portfolio' : 'Personal portfolio'}
        >
          {locale === 'no'
            ? 'Min personlige portfolio skal vise prosjekter jeg har laget, og samtidig vise hva jeg har lært gjennom tre år med studier.'
            : 'My portfolio will show projects I have made, and at the same time show what I have learned through three years of study.'}
        </Card>
      </div>
    </section>
  );
};

export default ProjectsSection;
