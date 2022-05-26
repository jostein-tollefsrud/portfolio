import Link from 'next/link';
import React from 'react';
import { FiAward, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const FormSocialList = () => {
  return (
    <ul className='social-list'>
      <li className='list-item'>
        <a
          href='https://www.linkedin.com/in/jostein-tollefsrud-31877497'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='list-item__box'>
            <FiLinkedin className='list-item__box--icon' />
          </span>
          LinkedIn
        </a>
      </li>
      <li className='list-item'>
        <a
          href='https://github.com/jostein-tollefsrud'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='list-item__box' aria-hidden='true'>
            <FiGithub className='list-item__box--icon' />
          </span>
          Github
        </a>
      </li>
      <li className='list-item'>
        <Link href='mailto:mail@josteintollefsrud.no?subject=Hei!%20Jeg%20fant%20deg%20på%20nettsiden%20din&#128526;'>
          <a>
            <span className='list-item__box' aria-hidden='true'>
              <FiMail className='list-item__box--icon' />
            </span>
            Email
          </a>
        </Link>
      </li>
      <li className='list-item'>
        <Link href={'#'}>
          <a>
            <span className='list-item__box' aria-hidden='true'>
              <FiAward className='list-item__box--icon' />
            </span>
            Resume
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default FormSocialList;
