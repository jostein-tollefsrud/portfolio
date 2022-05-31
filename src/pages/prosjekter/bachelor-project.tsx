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
            <a
              href='https://github.com/jostein-tollefsrud/bachelor-project'
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
              <li>Next.js</li>
              <li>React.js</li>
              <li>Strapi</li>
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

          {locale === 'no' ? (
            <>
              <h2 className='heading-secondary u-margin-bottom-small'>
                Bakgrunn
              </h2>

              <p className='u-margin-bottom-large'>
                Etter tre år med studie ved NTNU Gjøvik skulle vi fullføre med
                en{' '}
                <a
                  className='link'
                  target='_blank'
                  rel='noopner noreferrer'
                  href='https://www.ntnu.no/studier/emner/IDG3920/2021#tab=omEmnet'
                >
                  bachelor oppgave
                </a>
                . Jeg og tre andre medstudenter ønsket å bygge videre på et
                annet prosjekt vi tok i et annet fag hvor vi fikk tildelt en
                ferdig prototype, men avdekket mangler ved denne noe som gjorde
                at vi startet helt på nytt med design og kode i bachelor
                oppgaven.
              </p>

              <h2 className='heading-secondary u-margin-bottom-small'>
                Teknologier
              </h2>

              <p>
                Denne nettsiden er laget med Next.js i frontend og Strapi for
                backend. Prosjekteier ønsket et CMS hvor det ikke var nødvendig
                å kunne kode eller HTML da de som skulle oppdatere innholdet
                ikke hadde kompetanse på det feltet. Derfor falt valget på
                Strapi. Det CMS systemet gjorde det også enkelt å få alt innhold
                på norsk og engelsk pluss muligheten for å paginere innlegg de
                skulle skrive.
              </p>

              <p className='u-margin-bottom-large'>
                Vi brukte Sass for å style enkelte elementer, men i hovedsak
                benyttet vi oss av biblioteket Material UI for komponenter.
                Sentry ble brukt til å holde oversikt over feilmeldinger under
                utviklingen og panelbear ble lagt til som et alternativ til
                Google Analytics.
              </p>

              <h2 className='heading-secondary u-margin-bottom-small'>
                Forbedringer
              </h2>

              <p>
                Dersom jeg skulle gjort dette prosjektet på nytt ville jeg
                testet ut andre CMS løsninger for å lære mer. I stedenfor å
                bruke Material UI ville jeg stylet alt med Sass og kodet selv
                for å ha mer kontroll på hvordan de oppfører seg.
              </p>

              <p>
                Jeg ville fokusert mer på tilgjengelighet og testet det nøye for
                hver komponent vi laget og implementert Jest og Testing library
                for å teste hver komponent før de blir pusha ut til github.
              </p>
            </>
          ) : (
            <>
              {/* ########## ENGLISH ########## */}
              <h2 className='heading-secondary u-margin-bottom-small'>
                Background
              </h2>

              <p className='u-margin-bottom-large'>
                After three years of study at NTNU Gjøvik, we were to complete a{' '}
                <a
                  className='link'
                  target='_blank'
                  rel='noopner noreferrer'
                  href='https://www.ntnu.edu/studies/courses/IDG3920/2021#tab=omEmnet'
                >
                  bachelor thesis
                </a>
                . I and three other fellow students wanted to build upon another
                project we took in another subject where we were assigned a
                finished prototype but revealed shortcomings in this which made
                us start all over again with designing and coding in the
                bachelor thesis.
              </p>

              <h2 className='heading-secondary u-margin-bottom-small'>
                Technologies
              </h2>

              <p>
                This website is made with Next.js for the frontend and Strapi
                for the backend. The project owner wanted a CMS where it was not
                necessary to be able to code or HTML as those who were to update
                the content did not have expertise in that field. Therefore, the
                choice fell on Strapi. The CMS system also made it easy to get
                all content in Norwegian and English plus the ability to
                paginate posts.
              </p>

              <p className='u-margin-bottom-large'>
                We used Sass to style some elements, but we mainly used the
                Material UI library for components. Sentry was used to keeping
                track of error messages during development and Panelbear was
                added as an alternative to Google Analytics.
              </p>

              <h2 className='heading-secondary u-margin-bottom-small'>
                Improvements
              </h2>

              <p>
                If I were to do this project again I would test out other CMS
                solutions to learn more. Instead of using Material UI, I would
                style everything with Sass and code myself to have more control
                over how they behave.
              </p>

              <p>
                I would focus more on accessibility and test it carefully for
                each component we created and implement the Jest and Testing
                library to test each component before being pushed out to
                Github.
              </p>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default BachelorProjectPage;
