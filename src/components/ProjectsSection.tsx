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
          Almost before we knew it, we had left the ground. Almost before we
          knew it, we had left the ground.
        </Card>

        <Card
          link='/prosjekter/plantmanager'
          img={plantmanagerIMG}
          title={'NTNU plant manager'}
        >
          Never forget to water your plants again! Our solution remember your
          watering routine and when to fertilize them for you.
        </Card>

        <Card
          link='/prosjekter/personal-portfolio'
          img={portfolioIMG}
          title={locale === 'no' ? 'Personlig portfolio' : 'Personal portfolio'}
        >
          Almost before we knew it, we had left the ground. Almost before we
          knew it, we had left the ground.
        </Card>
      </div>
    </section>
  );
};

export default ProjectsSection;
