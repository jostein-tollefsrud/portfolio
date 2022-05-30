import { NextPage } from 'next';
import Head from 'next/head';

const PersonalPortfolioPage: NextPage = () => {
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
          <h1 className='heading-primary u-margin-bottom-medium'>
            Personlig Portfolio
          </h1>
          <p className='text-sub'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
            vel veniam, commodi corporis porro facere.
          </p>

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

          <h2 className='heading-secondary u-margin-bottom-small'>Bakgrunn</h2>

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
            I min første plan for portefolioen ville jeg lage den med mulighet
            for innhold på norsk og engelsk, noe det ble til med hjelp av next
            sin egen ruting for &quot;locales&quot;. Jeg ønsket også å lage den
            med dark og light mode. Den første versjonen laget jeg med det, men
            i den endelige så synes jeg ikke det ble riktig med en mørk versjon
            da det ikke ville få samme inntrykk av siden.
          </p>

          <h2 className='heading-secondary u-margin-bottom-small'>
            Teknologier
          </h2>

          <p className='u-margin-bottom-large'>
            Nettsiden er bygget med Next.js, som er et rammeverktøy bygget på
            React.js. Dette forenkler ruting og tilpassing av språk.
          </p>

          <h2 className='heading-secondary u-margin-bottom-small'>
            Tilgjengelighet
          </h2>

          <p>
            For at siden skal være tilghengelig for alle har jeg hatt
            tilgjengelighet i tankene fra starten av. Alle viktige kontraster
            oppfyller WCAG kriteriene. Linker har beskrivende tekst eller
            &quot;aria-labels&quot; for å utdype meningen med innholdet.
          </p>

          <p className='u-margin-bottom-large'>
            Du kan bruke tastatur for å navigere hele nettstedet. Det første du
            &quot;tabber&quot; til er muligheten for å skifte språk, deretter
            kan du gå til hovedinnhold så du slipper å trykke igjennom
            navigasjonen. Jeg har valgt å fjerne outlines på enkelte elementer
            når du setter fokus, men det er erstattet med annen styling for å
            bedre passe inn i designet til siden.
          </p>

          <h2 className='heading-secondary u-margin-bottom-small'>
            Forbedringer
          </h2>

          <p>
            Skulle jeg gjort dette om igjen nå ville jeg flyttet alt innhold
            over på et cms for å lettere holde oversikt og kunne oppdatere
            innholdet. Som CSM har jeg god erfaring med Strapi ettersom vi
            brukte det i Bachelor prosjektet, men det kan bli noe dyrt i starten
            da jeg trenger en egen server til det. En annen gratis mulighet
            hadde vært Sanity, men grunnet ønske om flerspråklig side så strakk
            ikke tiden til å lære mer om det.
          </p>
        </div>
      </main>
    </div>
  );
};

export default PersonalPortfolioPage;
