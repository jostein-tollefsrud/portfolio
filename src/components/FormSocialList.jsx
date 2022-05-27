import Link from 'next/link';
import React from 'react';
import Obfuscate from 'react-obfuscate'; // No typescript
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
        {/* Use obfuscate to hide email from bots */}
        <Obfuscate
          obfuscateChildren={false}
          email='mail@josteintollefsrud.no'
          aria-label='Send me an email'
          headers={{
            subject: 'Hei! Jeg fant deg på nettsiden din!',
          }}
        >
          <span className='list-item__box' aria-hidden='true'>
            <FiMail className='list-item__box--icon' />
          </span>
          Email
        </Obfuscate>
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
