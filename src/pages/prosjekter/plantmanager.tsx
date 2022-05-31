import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const PlantmanagerPage: NextPage = () => {
  const { locale } = useRouter();
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

          {locale === 'no' ? (
            <p className='text-sub'>
              Dette prosjektet ble laget for å holde orden på vanning, gjødsling
              og plassering av planter på NTNU Gjøvik.
            </p>
          ) : (
            <p className='text-sub'>
              This project was created to keep track on watering, fertilizing
              and placment of plants at NTNU Gjøvik.
            </p>
          )}

          <div className='projects__buttons u-margin-bottom-large'>
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
              {locale === 'no' ? 'Kildekode' : 'Source code'}
            </a>
          </div>

          <div className='u-margin-bottom-large'>
            <h2 className='heading-secondary u-margin-bottom-small'>
              {locale === 'no' ? 'Teknologistabel' : 'Tech stack'}
            </h2>

            <ul className='techstack'>
              <li>React.js</li>
              <li>Netlify</li>
              <li>Formik</li>
              <li>Yup</li>
              <li>Redux</li>
              <li>Bcrypt</li>
              <li>Mongodb</li>
              <li>Mongoose</li>
              <li>Passport</li>
              <li>Passport JWT</li>
              <li>Swagger</li>
            </ul>
          </div>

          <h2 className='heading-secondary u-margin-bottom-small'>Bakgrunn</h2>

          <p className='u-margin-bottom-large'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ut
            asperiores provident accusamus omnis cupiditate temporibus iusto!
            Voluptatem, natus corporis! Eos vel error nemo soluta ipsa amet
            placeat velit temporibus!
          </p>

          <h2 className='heading-secondary u-margin-bottom-small'>
            Forbedringer
          </h2>

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
