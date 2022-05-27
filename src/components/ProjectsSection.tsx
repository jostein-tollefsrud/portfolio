import Card from '@/components/Card';
import { FC } from 'react';

interface Props {
  plantmanagerImg: any;
  bachelorImg: any;
  portfolioImg: any;
}

const ProjectsSection: FC<Props> = ({
  plantmanagerImg,
  bachelorImg,
  portfolioImg,
}) => {
  return (
    <section id='projects' className='section-projects'>
      <h2 className='heading-secondary u-text-center u-margin-bottom-large'>
        Projects
      </h2>
      <div className='card-container'>
        <Card
          link='/projects/plantmanager'
          cloudinaryImage={plantmanagerImg}
          alt=''
          title={'NTNU plant manager'}
        >
          Almost before we knew it, we had left the ground. Almost before we
          knew it, we had left the ground.
        </Card>

        <Card
          link='/projects/bachelor-project'
          cloudinaryImage={bachelorImg}
          alt=''
          title={'Bachelor project'}
        >
          Almost before we knew it, we had left the ground. Almost before we
          knew it, we had left the ground.
        </Card>

        <Card
          link='/projects/personal-portfolio'
          cloudinaryImage={portfolioImg}
          alt=''
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
