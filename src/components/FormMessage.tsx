import { FC } from 'react';
import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
import LoadingSpinner from '@/components/LoadingSpinner';

interface Props {
  text: string;
  type?: string;
}

const FormMessage: FC<Props> = ({ text, type }) => {
  let typeClassName;
  let icon;
  switch (type) {
    case 'sending':
      typeClassName = '--sending';
      icon = <LoadingSpinner aria-hidden='true' />;
      break;
    case 'success':
      typeClassName = '--success';
      icon = <FiCheckCircle aria-hidden='true' />;
      break;
    case 'error':
      typeClassName = '--error';
      icon = <FiAlertCircle aria-hidden='true' />;
      break;
    default:
      icon = null;
      break;
  }
  return (
    <div className={`form-message form-message${typeClassName}`} role='alert'>
      <span aria-hidden='true' className='form-message__icon'>
        {icon}
      </span>
      <p>{text}</p>
    </div>
  );
};

export default FormMessage;
