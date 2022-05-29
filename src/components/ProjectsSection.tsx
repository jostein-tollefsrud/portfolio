import Card from '@/components/Card';
import { FC } from 'react';

import plantmanagerIMG from '../../public/images/plantmanager-small.jpg';
import bachelorIMG from '../../public/images/bachelor-small.jpg';
import portfolioIMG from '../../public/images/portfolio-small.jpg';

const ProjectsSection: FC = () => {
  return (
    <section id='projects' className='section-projects'>
      <h2 className='heading-secondary u-text-center u-margin-bottom-large'>
        Projects
      </h2>
      <div className='card-container'>
        <Card
          link='/projects/bachelor-project'
          img={bachelorIMG}
          alt='printscreens of bachelor project webpage'
          title={'Bachelor project'}
        >
          Almost before we knew it, we had left the ground. Almost before we
          knew it, we had left the ground.
        </Card>

        <Card
          link='/projects/plantmanager'
          img={plantmanagerIMG}
          alt='printscreens of ntnu plantmanager webpage'
          title={'NTNU plant manager'}
        >
          Never forget to water your plants again! Our solution remember your
          watering routine and when to fertilize them for you.
        </Card>

        <Card
          link='/projects/personal-portfolio'
          img={portfolioIMG}
          alt='printscreens of my portfolio webpage'
          title={'Personal portfolio'}
        >
          Almost before we knew it, we had left the ground. Almost before we
          knew it, we had left the ground.
        </Card>
      </div>
    </section>
  );
};

export default ProjectsSection;
