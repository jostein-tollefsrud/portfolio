import { useRouter } from 'next/router';
import { FC } from 'react';
import { FiChevronDown, FiGlobe } from 'react-icons/fi';

interface Props {
  type?: string;
}

const LocaleSwitch: FC<Props> = ({ type }) => {
  const router = useRouter();

  const handleRoute = (locale: string) => {
    router.push(router.asPath, router.asPath, { locale: locale });
  };

  return (
    <div className={`locale-switch ${type === 'skip' && 'skip'}`}>
      <FiGlobe className='locale-switch__icon' aria-hidden='true' />
      <select
        aria-label={`${
          router.locale === 'no' ? 'Velg Språk' : 'Choose language'
        }`}
        name='language'
        id='language'
        defaultValue={router.locale}
        onChange={(e) => handleRoute(e.target.value)}
        className={`locale-switch__select ${type === 'skip' && 'skip-switch'}`}
      >
        <option value='no'>Norsk</option>
        <option value='en'>English</option>
      </select>
      <FiChevronDown className='locale-switch__icon' aria-hidden='true' />
    </div>
  );
};

export default LocaleSwitch;
