import '../styles/main.scss';
import Head from 'next/head';

import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SkipNavLink from '@/components/SkipNavLink';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <SkipNavLink id={'main-content'}>
        {locale === 'no' ? 'Gå til hovedinnhold' : 'Skip to main content'}
      </SkipNavLink>
      <Navbar />
      <main id='main-content' tabIndex={-1}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default appWithTranslation(MyApp);
