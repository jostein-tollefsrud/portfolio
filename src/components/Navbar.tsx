import Link from 'next/link';
import { FC, useState } from 'react';
import Logo from './Logo';

const Navbar: FC = () => {
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
          aria-label='menu'
          className={`header__button ${open && 'active'}`}
          onClick={() => setOpen(!open)}
        >
          <span className='header__icon-1'></span>
          <span className='header__icon-2'></span>
          <span className='header__icon-3'></span>
        </button>

        <nav
          aria-label='main navigation'
          className={`${open && 'open'}`}
          onClick={() => setOpen(false)}
        >
          <ul>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='#projects'>
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link href='#about'>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href='#contact'>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
