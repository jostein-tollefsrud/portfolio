import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  alt: string;
  title: string;
  children: React.ReactNode;
  link: string;
  cloudinaryImage: any;
}

const Card: FC<Props> = ({ cloudinaryImage, alt, title, children, link }) => {
  return (
    <Link href={link}>
      <a className='card'>
        <article>
          <div className='card__image'>
            <Image
              src={cloudinaryImage.src}
              alt={alt}
              layout='fill'
              objectFit='cover'
              quality='100'
              sizes='60vw'
              placeholder='blur'
              blurDataURL={cloudinaryImage.blurDataUrl}
            />
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
