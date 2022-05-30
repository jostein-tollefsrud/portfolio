import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import LocaleSwitch from './LocaleSwitch';
import Logo from './Logo';

const Navbar: FC = () => {
  const { locale } = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <header className='header'>
      <div className='header__container'>
        <Link href={'/'}>
          <a aria-label='home'>
            <Logo className='header__logo' />
          </a>
        </Link>

        <button
          aria-label={
            locale === 'no'
              ? `meny, ${open ? 'utvidet' : 'minimert'}`
              : `menu, ${open ? 'opened' : 'closed'}`
          }
          className={`header__button ${open && 'active'}`}
          onClick={() => setOpen(!open)}
        >
          <span className='header__icon-1'></span>
          <span className='header__icon-2'></span>
          <span className='header__icon-3'></span>
        </button>

        <nav
          aria-label={locale === 'no' ? 'Hoved navigasjon' : 'Main navigation'}
          className={`${open && 'open'}`}
        >
          <ul>
            <li onClick={() => setOpen(false)}>
              <Link href='/'>
                <a>{locale === 'no' ? 'Hjem' : 'Home'}</a>
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href='/#projects'>
                <a>{locale === 'no' ? 'Prosjekter' : 'Projects'}</a>
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href='/#about'>
                <a>{locale === 'no' ? 'Om meg' : 'About'}</a>
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href='/#contact'>
                <a>{locale === 'no' ? 'Kontakt' : 'Contact'}</a>
              </Link>
            </li>
            <li>
              <LocaleSwitch />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
