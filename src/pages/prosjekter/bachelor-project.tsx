import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const BachelorProjectPage: NextPage = () => {
  const { locale } = useRouter();
  return (
    <div>
      <Head>
        <title>Bachelor Project</title>
        <meta name='description' content='Description here...' />
      </Head>
      <div
        aria-hidden='true'
        className='projects-hero projects-hero--bachelor'
      ></div>
      <main id='main-content' className='bg-white'>
        <div className='projects'>
          {locale === 'no' ? (
            <>
              <h1 className='heading-primary u-margin-bottom-medium'>
                Bachelor Prosjekt
              </h1>
              <p className='text-sub'>
                Ny forbedret nettside med en CMS løsning som ikke krever
                kunnskap om HTML til Studenthuset i Gjøvik.
              </p>
            </>
          ) : (
            <>
              <h1 className='heading-primary u-margin-bottom-medium'>
                Bachelor Project
              </h1>
              <p className='text-sub'>
                New improved website with a CMS solution that does not require
                knowledge of HTML for the Student House in Gjøvik.
              </p>
            </>
          )}

          <div className='projects__buttons u-margin-bottom-large'>
            <a
              href='https://husetgjovik-beta.herokuapp.com/'
              className='btn btn--red'
              target='_blank'
              rel='noopener noreferrer'
            >
              Live demo
            </a>
            {/* <a
              href='#'
              className='btn btn--red'
              target='_blank'
              rel='noopener noreferrer'
            >
              Source code
            </a> */}
          </div>

          <div className='u-margin-bottom-large'>
            <h2 className='heading-secondary u-margin-bottom-small'>
              {locale === 'no' ? 'Teknologistabel' : 'Tech stack'}
            </h2>

            <ul className='techstack'>
              <li>Next.js</li>
              <li>React.js</li>
              <li>Heroku</li>
              <li>Formik</li>
              <li>Yup</li>
              <li>Material UI</li>
              <li>Sass</li>
              <li>Panelbear</li>
              <li>Sentry</li>
              <li>SendGrid</li>
              <li>Axios</li>
              <li>DayJS</li>
            </ul>
          </div>

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

export default BachelorProjectPage;
