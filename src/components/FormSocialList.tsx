import Link from 'next/link';
import React from 'react';
import { FiAward, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const FormSocialList = () => {
  return (
    <ul className='social-list'>
      <li className='list-item'>
        <Link href={'#'}>
          <a>
            <span className='list-item__box'>
              <FiLinkedin className='list-item__box--icon' />
            </span>
            LinkedIn
          </a>
        </Link>
      </li>
      <li className='list-item'>
        <Link href={'#'}>
          <a>
            <span className='list-item__box'>
              <FiGithub className='list-item__box--icon' />
            </span>
            Github
          </a>
        </Link>
      </li>
      <li className='list-item'>
        <Link href={'#'}>
          <a>
            <span className='list-item__box'>
              <FiMail className='list-item__box--icon' />
            </span>
            Email
          </a>
        </Link>
      </li>
      <li className='list-item'>
        <Link href={'#'}>
          <a>
            <span className='list-item__box'>
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
