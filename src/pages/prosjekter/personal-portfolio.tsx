import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const PersonalPortfolioPage: NextPage = () => {
  const { locale } = useRouter();
  return (
    <div>
      <Head>
        <title>Personal Portfolio</title>
        <meta name='description' content='Description here...' />
      </Head>
      <div
        aria-hidden='true'
        className='projects-hero projects-hero--portfolio'
      ></div>
      <main id='main-content' className='bg-white'>
        <div className='projects'>
          {locale === 'no' ? (
            <>
              <h1 className='heading-primary u-margin-bottom-medium'>
                Personlig Portfolio
              </h1>
              <p className='text-sub'>
                Min personlige portfolio skal vise prosjekter jeg har laget, og
                samtidig vise hva jeg har lært gjennom tre år med studier.
              </p>
            </>
          ) : (
            <>
              <h1 className='heading-primary u-margin-bottom-medium'>
                Personal Portfolio
              </h1>
              <p className='text-sub'>
                My portfolio will show projects I have made, and at the same
                time show what I have learned through three years of study.
              </p>
            </>
          )}

          <div className='projects__buttons'>
            {/* <a
              href='https://josteintollefsrud.no/'
              className='btn btn--red'
              target='_blank'
              rel='noopener noreferrer'
            >
              Live demo
            </a> */}
            <a
              href='https://github.com/jostein-tollefsrud/portfolio-v2'
              className='btn btn--red'
              target='_blank'
              rel='noopener noreferrer'
            >
              Source code
            </a>
          </div>

          {locale === 'no' ? (
            <>
              <h2 className='heading-secondary u-margin-bottom-small'>
                Bakgrunn
              </h2>

              <p>
                Etter tre års studie i webutvikling skulle vi lage hver vår
                portfolie. Denne skal vise hva vi har gjort og skal brukes under
                utstillingen i faget{' '}
                <a
                  href='https://www.ntnu.no/studier/emner/IDG3800/2021#tab=omEmnet'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='link'
                >
                  IDG3800 Mappe og utstilling
                </a>
                . Her har jeg valgt ut tre prosjekter å vise til, hvor dette
                prosjektet er ett av dem.
              </p>

              <p className='u-margin-bottom-large'>
                I min første plan for portefolioen ville jeg lage den med
                mulighet for innhold på norsk og engelsk, noe det ble til med
                hjelp av Next.js sin egen ruting for &quot;locales&quot;. Jeg
                ønsket også å lage den med dark og light mode. Den første
                versjonen laget jeg med det, men i den endelige så synes jeg
                ikke det ble riktig med en mørk versjon da det ikke ville få
                samme inntrykk av siden.
              </p>

              <h2 className='heading-secondary u-margin-bottom-small'>
                Teknologier
              </h2>

              <p className='u-margin-bottom-large'>
                Nettsiden er bygget med Next.js, som er et rammeverktøy bygget
                på React.js. Dette forenkler ruting og tilpassing av språk. Jeg
                ønsket å lære Sass (Syntactically Awesome Style Sheets) så
                derfor er denne nettsiden laget med det. Sammen med BEM (Block
                Element Modifier) navnemetodikk har det gjort strukturering og
                skriving av CSS mer oversiktlig.
              </p>

              <h2 className='heading-secondary u-margin-bottom-small'>
                Tilgjengelighet
              </h2>

              <p>
                For at siden skal være tilghengelig for alle har jeg hatt
                tilgjengelighet i tankene fra starten av. Alle viktige
                kontraster oppfyller WCAG kriteriene. Linker har beskrivende
                tekst eller &quot;aria-labels&quot; for å utdype meningen med
                innholdet. Alle aria-labels og resten av innholdet er dessuten
                tilgjengelig på norsk og engelsk.
              </p>

              <p>
                Du kan bruke tastatur for å navigere hele nettstedet. Det første
                du &quot;tabber&quot; til er muligheten for å skifte språk,
                deretter kan du gå til hovedinnhold så du slipper å trykke
                igjennom navigasjonen. Jeg har valgt å fjerne outlines på
                enkelte elementer når du setter fokus, men det er erstattet med
                annen styling for å bedre passe inn i designet til siden.
              </p>

              <p className='u-margin-bottom-large'>
                Selv om jeg ikke er veldig god på å bruke skjermleser har jeg
                testet ut med skjermleseren som følger med Apple sin Macbook.
                Fant ut at den ikke leste opp varsler dersom du ikke fulgte
                kravene i kontaktskjemaet. Etter å ha tilrettelagt med aria ble
                det betydelig enklere å bruke skjemaet.
              </p>

              <h2 className='heading-secondary u-margin-bottom-small'>
                Forbedringer
              </h2>

              <p>
                Skulle jeg gjort dette om igjen nå ville jeg flyttet alt innhold
                over på et cms for å lettere holde oversikt og kunne oppdatere
                innholdet. Som CSM har jeg god erfaring med Strapi ettersom vi
                brukte det i Bachelor prosjektet, men det kan bli noe dyrt i
                starten da jeg trenger en egen server til det. En annen gratis
                mulighet hadde vært Sanity, men grunnet ønske om flerspråklig
                side så strakk ikke tiden til å lære mer om det.
              </p>
            </>
          ) : (
            <>
              {/* ########## ENGLISH ########## */}
              <h2 className='heading-secondary u-margin-bottom-small'>
                Background
              </h2>

              <p>
                After three years of studying web development, we each had to
                create our own portfolio. This will show what we have done and
                will be used during the exhibition in the subject{' '}
                <a
                  href='https://www.ntnu.edu/studies/courses/IDG3800/2021#tab=omEmnet'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='link'
                >
                  IDG3800 Portfolio and Exhibition
                </a>
                . Here I selected three projects to refer to, where this project
                is one of them.
              </p>

              <p className='u-margin-bottom-large'>
                In my first plan for the portfolio, I wanted to create it with
                the possibility of content in Norwegian and English, something
                that was created with the help of Next.js own routing for
                &quot;locales&quot;. I also wanted to make it with dark and
                light mode. The first version I made with it, but in the final I
                do not think it was correct with a dark version as it would not
                get the same impression of the page.
              </p>

              <h2 className='heading-secondary u-margin-bottom-small'>
                Technologies
              </h2>

              <p className='u-margin-bottom-large'>
                The website is built with Next.js, which is a framework tool
                built on React.js. This simplifies the routing and customization
                of languages. I wanted to teach Sass (Syntactically Awesome
                Style Sheets) so therefore this website is made with it.
                Together with BEM (Block Element Modifier) ​​naming methodology
                it has done structuring and writing CSS more clearly.
              </p>

              <h2 className='heading-secondary u-margin-bottom-small'>
                Accessibility
              </h2>

              <p>
                For the site to be accessible to everyone, I have had
                accessibility in mind from the start. All important contrasts
                meet the WCAG criteria. Links have descriptive text or
                &quot;aria-labels&quot; to elaborate on the meaning of the
                content. All aria labels and the rest of the content are also
                available in Norwegian and English.
              </p>

              <p>
                You can use the keyboard to navigate the entire site. The first
                thing you are &quot;tabing&quot; is the ability to change
                language, then you can go to the main content so you do not have
                to push through the navigation. I have chosen to remove outlines
                on some elements when focusing, but it has been replaced with
                another styling to better fit into the design of the page.
              </p>

              <p className='u-margin-bottom-large'>
                Although I&apos;m not very good at using a screen reader,
                I&apos;ve tested it out with the screen reader that comes with
                Apple&apos;s Macbook. Found that it did not read alerts if you
                did not follow the requirements in the contact form. After
                adapting to aria, it became significantly easier to use the
                form.
              </p>

              <h2 className='heading-secondary u-margin-bottom-small'>
                Improvements
              </h2>

              <p>
                Should I do this again now, I would move all content to a CMS to
                more easily keep track and be able to update the content. As a
                CSM, I have good experience with Strapi as we used it in the
                Bachelor project, but it can be a bit expensive in the beginning
                as I need a separate server for it. Another free option would
                have been Sanity, but because I wanted a multilingual side,
                there was not enough time to learn more about it.
              </p>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default PersonalPortfolioPage;
