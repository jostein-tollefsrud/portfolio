import Link from 'next/link';
import { FC } from 'react';
import { FiAward, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer: FC = () => {
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
                <FiLinkedin />
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
                <FiGithub />
              </a>
            </Link>
          </li>
          <li>
            <Link href='mailto:mail@josteintollefsrud.no?subject=Hei!%20Jeg%20fant%20deg%20på%20nettsiden%20din&#128526;'>
              <a aria-label='Send me an email' title='Send me an email'>
                <FiMail />
              </a>
            </Link>
          </li>
          <li>
            <Link href='#' target='_blank' rel='noreferrer'>
              <a aria-label='My Resume' title='My Resume'>
                <FiAward />
              </a>
            </Link>
          </li>
        </ul>
      </address>
      <p>2022 &copy; Jostein Tollefsrud</p>
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
    </footer>
  );
};

export default Footer;
