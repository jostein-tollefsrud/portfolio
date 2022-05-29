import { NextPage } from 'next';
import Head from 'next/head';

const PlantmanagerPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NTNU plant manager</title>
        <meta name='description' content='Description here...' />
      </Head>
      <div
        aria-hidden='true'
        className='projects-hero projects-hero--plantmanager'
      ></div>
      <main id='main-content' className='bg-white'>
        <div className='projects'>
          <h1 className='heading-primary u-margin-bottom-medium'>
            NTNU plant manager
          </h1>

          <p className='text-sub'>
            Never forget to water your plants again! Our solution remember your
            watering routine and when to fertilize them for you.
          </p>

          <div className='projects__buttons'>
            <a
              href='https://ntnu-plantmanager.netlify.app/'
              className='btn btn--red'
              target='_blank'
              rel='noopener noreferrer'
            >
              Live demo
            </a>
            <a
              href='https://github.com/jostein-tollefsrud/NTNU-plantmanager-frontend'
              className='btn btn--red'
              target='_blank'
              rel='noopener noreferrer'
            >
              Source code
            </a>
          </div>

          <h2 className='heading-secondary u-margin-bottom-small'>
            Background
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ut
            asperiores provident accusamus omnis cupiditate temporibus iusto!
            Voluptatem, natus corporis! Eos vel error nemo soluta ipsa amet
            placeat velit temporibus!
          </p>

          <h2 className='heading-secondary u-margin-bottom-small'>
            Improvements
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ut
            asperiores provident accusamus omnis cupiditate temporibus iusto!
            Voluptatem, natus corporis! Eos vel error nemo soluta ipsa amet
            placeat velit temporibus!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ut
            asperiores provident accusamus omnis cupiditate temporibus iusto!
            Voluptatem, natus corporis! Eos vel error nemo soluta ipsa amet
            placeat velit temporibus!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ut
            asperiores provident accusamus omnis cupiditate temporibus iusto!
            Voluptatem, natus corporis! Eos vel error nemo soluta ipsa amet
            placeat velit temporibus!
          </p>
        </div>
      </main>
    </div>
  );
};

export default PlantmanagerPage;
