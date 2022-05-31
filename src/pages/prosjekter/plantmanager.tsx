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

          {locale === 'no' ? (
            <>
              <h2 className='heading-secondary u-margin-bottom-small'>
                Bakgrunn
              </h2>

              <p className='u-margin-bottom-large'>
                På NTNUs lokale på Mustad har de mange planter å holde
                oversikten over. Hvem har vannet, når ble de vannet sist og hvor
                står de? Avdelingen for design trenger et administrativt verktøy
                for å overvåke plantenes tilstand og helse. Dette prosjektet tar
                seg av både backend API og frontend. Prosjektet er gruppearbeid
                hvor vi var tre stykker som arbeidet på samme prosjekt.
              </p>

              <h2 className='heading-secondary u-margin-bottom-small'>
                Teknologier
              </h2>

              <p>
                Dette prosjektet er bygget på MERN stacken. Noe som vil si at vi
                bruker Mongodb til database, Express til å bygge backend,
                React.js til å bygge frontend og Node.js som er en plattform til
                å lage JavaScript applikasjoner.
              </p>

              <p className='u-margin-bottom-large'>
                For å kunne autentisere har vi brukt Passport med Json Web
                Tokens for å verifisere om brukeren er logget inn eller ikke.
                Dataene blir lagret i en database hos Mongodb. Alle passord blir
                kryptert med bcrypt før de lagres.
              </p>

              <h2 className='heading-secondary u-margin-bottom-small'>
                Forbedringer
              </h2>

              <p>
                Skulle jeg gjort om igjen dette prosjektet burde jeg ha laget en
                sikrere innlogging. Det bør gå over http secure og ha refresh
                tokens i stedet for å bare bruke den samme så lenge brukeren er
                logget inn slik som det fungerer i dag.
              </p>

              <p>
                Prosjektet er bygget i React.js, men for enklere ruting og bedre
                SEO ville jeg ha brukt Next.js neste gang. Det gjør det mulig
                for å skalere lettere og bruke en blanding av Static Side
                Generated og Server Side Rendered for raskest mulig rendring av
                siden.
              </p>
            </>
          ) : (
            <>
              <h2 className='heading-secondary u-margin-bottom-small'>
                Background
              </h2>

              <p className='u-margin-bottom-large'>
                At NTNU&apos;s locations at Mustad, they have many plants to
                keep track of. Who watered, when were they last watered, and the
                locations? The design department needs an administrative tool to
                monitor the condition and health of the plants. This project
                makes both the backend API and the frontend. The project is a
                group work where we were three people working on the same
                project.
              </p>

              <h2 className='heading-secondary u-margin-bottom-small'>
                Technologies
              </h2>

              <p>
                This project is built on the MERN stack. This is to say that we
                use MongoDB for the database, Express to build the backend,
                React.js to build the frontend, and Node.js which is a platform
                to create JavaScript applications.
              </p>

              <p className='u-margin-bottom-large'>
                To be able to authenticate, we have used Passport with Json Web
                Tokens to verify whether the user is logged in or not. The data
                is stored in a database at MongoDB. All passwords are encrypted
                with bcrypt before being stored.
              </p>

              <h2 className='heading-secondary u-margin-bottom-small'>
                Improvements
              </h2>

              <p>
                If I had to do this project over again, I should have made a
                more secure login system. It should have gone over HTTP secure
                and have refresh tokens instead of just using the same one for
                as long as the user is logged in as it works today.
              </p>

              <p>
                The project is built in React.js, but for easier routing and
                better SEO, I would have used Next.js next time. It makes it
                possible to scale more easily and uses a mix of Static Side
                Generated and Server Page Rendered for the fastest possible
                rendering of the page.
              </p>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default PlantmanagerPage;
