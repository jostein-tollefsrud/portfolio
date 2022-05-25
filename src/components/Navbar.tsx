import Link from 'next/link';
import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <header>
      <nav aria-label='main navigation'>
        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/projects'>
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
