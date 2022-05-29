import { useRouter } from 'next/router';
import { FC, ReactNode, useEffect, useRef } from 'react';
import LocaleSwitch from './LocaleSwitch';

interface Props {
  id: string;
  children?: ReactNode;
}

const SkipNavLink: FC<Props> = ({
  id,
  children = 'Skip to content',
  ...props
}) => {
  const router = useRouter();
  const currentUrl = router.asPath;
  const skipRef: any = useRef();
  useEffect(() => {
    if (skipRef && skipRef.current) {
      skipRef.current?.focus();
    }
  }, [currentUrl]);

  return (
    <>
      <div ref={skipRef} className='focusContainer' tabIndex={-1}></div>
      <LocaleSwitch type='skip' />
      <a {...props} href={`#${id}`} className='skip-nav-link'>
        {children}
      </a>
    </>
  );
};

export default SkipNavLink;
