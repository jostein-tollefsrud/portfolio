import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiAward, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Obfuscate from 'react-obfuscate'; // No typescript

const Footer = () => {
  const { locale } = useRouter();
  return (
    <footer className='footer'>
      <address>
        <ul>
          <li>
            <Link
              href='https://www.linkedin.com/in/jostein-tollefsrud-31877497'
              target='_blank'
              rel='noreferrer'
            >
              <a aria-label='LinkedIn' title='LinkedIn'>
                <FiLinkedin aria-hidden='true' />
              </a>
            </Link>
          </li>
          <li>
            <Link
              href='https://github.com/jostein-tollefsrud'
              target='_blank'
              rel='noreferrer'
            >
              <a aria-label='Github' title='Github'>
                <FiGithub aria-hidden='true' />
              </a>
            </Link>
          </li>
          <li>
            <Obfuscate
              obfuscateChildren={false}
              email='mail@josteintollefsrud.no'
              aria-label={
                locale === 'no' ? 'Send meg en epost' : 'Send me an email'
              }
              headers={{
                subject:
                  locale === 'no'
                    ? 'Hei! Jeg fant deg på nettsiden din!'
                    : 'Hello! I found you on your website!',
              }}
            >
              <FiMail aria-hidden='true' />
            </Obfuscate>
          </li>
          <li>
            <Link href='#' target='_blank' rel='noreferrer'>
              <a
                aria-label={locale === 'no' ? 'Min resume' : 'My Resume'}
                title={locale === 'no' ? 'Min resume' : 'My Resume'}
              >
                <FiAward aria-hidden='true' />
              </a>
            </Link>
          </li>
        </ul>
      </address>
      <p>2022 &copy; Jostein Tollefsrud</p>
      {locale === 'no' ? (
        <p>
          Laget med{' '}
          <a
            className='link'
            href='https://nextjs.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Next.js
          </a>{' '}
          av meg
        </p>
      ) : (
        <p>
          Made with{' '}
          <a
            className='link'
            href='https://nextjs.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Next.js
          </a>{' '}
          by me
        </p>
      )}
    </footer>
  );
};

export default Footer;
