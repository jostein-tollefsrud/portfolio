import Link from 'next/link';
import { FC } from 'react';
import { FiAward, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer: FC = () => {
  return (
    <footer>
      <address>
        <ul>
          <li>
            <Link href='#' target='_blank' rel='noreferrer'>
              <a aria-label='LinkedIn'>
                <FiLinkedin />
              </a>
            </Link>
          </li>
          <li>
            <Link href='#' target='_blank' rel='noreferrer'>
              <a aria-label='Github'>
                <FiGithub />
              </a>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a aria-label='Mail'>
                <FiMail />
              </a>
            </Link>
          </li>
          <li>
            <Link href='#' target='_blank' rel='noreferrer'>
              <a aria-label='Resume'>
                <FiAward />
              </a>
            </Link>
          </li>
        </ul>
      </address>
      <p>2022 &copy; Jostein Tollefsrud</p>
      <p>
        Made with{' '}
        <a href='#' target='_blank' rel='noreferrer'>
          Next.js
        </a>{' '}
        by me
      </p>
    </footer>
  );
};

export default Footer;
