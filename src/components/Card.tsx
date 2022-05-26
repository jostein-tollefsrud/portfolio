import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  image: any;
  alt: string;
  title: string;
  children: React.ReactNode;
  link: string;
}

const Card: FC<Props> = ({ image, alt, title, children, link }) => {
  return (
    <Link href={link}>
      <a className='card'>
        <article>
          <div className='card__image'>
            <Image src={image} alt={alt} layout='responsive' />
          </div>
          <div className='card__info'>
            <h3 className='heading-tertiary u-margin-bottom-small'>{title}</h3>
            <p className='card__text u-margin-bottom-medium'>{children}</p>
            <div className='card__readmore'>Read more &rarr; </div>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default Card;
