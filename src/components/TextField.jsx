import { useField, ErrorMessage } from 'formik';

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className='text-field'>
      <label className='text-field__label' htmlFor={field.name}>
        {label}
      </label>
      <input
        {...field}
        {...props}
        aria-invalid={meta.error ? 'true' : null}
        aria-describedby={
          meta.touched && meta.error ? `${field.name}aria-error` : null
        }
        aria-required='true'
        id={field.name}
        className={`text-field__input ${
          meta.touched && meta.error && 'text-field__input--invalid'
        }`}
      />
      <ErrorMessage
        component='div'
        name={field.name}
        className='text-field__error-message'
        role='alert'
        id={`${field.name}aria-error`}
      />
    </div>
  );
};

export default TextField;
