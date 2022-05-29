import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  alt: string;
  title: string;
  children: React.ReactNode;
  link: string;
  img: any;
}

const Card: FC<Props> = ({ img, alt, title, children, link }) => {
  return (
    <Link href={link}>
      <a className='card'>
        <article>
          <div className='card__image'>
            <Image
              src={img}
              alt={alt}
              layout='fill'
              objectFit='cover'
              quality='100'
              // sizes='60vw'
              // placeholder='blur'
              // blurDataURL={cloudinaryImage.blurDataUrl}
            />
          </div>
          <div className='card__info'>
            <h3 className='heading-tertiary u-margin-bottom-small'>{title}</h3>
            <p className='card__text'>{children}</p>
          </div>
          <div className='card__readmore'>
            Read more <span className='card__readmore--arrow'>&rarr;</span>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default Card;
