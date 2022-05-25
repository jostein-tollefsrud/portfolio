// import '../styles/normalize.css';
// import '../styles/globals.scss';
import '../styles/main.scss';
import type { AppProps } from 'next/app';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import SkipNavLink from '@/components/SkipNavLink';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SkipNavLink id={'main-content'}>Skip to main content</SkipNavLink>
      <Navbar />
      <main id='main-content' tabIndex={-1}>
        <Component {...pageProps} />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default MyApp;
