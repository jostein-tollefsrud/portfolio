import { useField, ErrorMessage } from 'formik';

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className='text-field'>
      <label className='text-field__label' htmlFor={field.name}>
        {label}
      </label>
      <textarea
        {...field}
        {...props}
        id={field.name}
        className={`text-field__input text-field__input--area ${
          meta.touched && meta.error && 'text-field__input--invalid'
        }`}
      ></textarea>

      <ErrorMessage
        component='div'
        name={field.name}
        className='text-field__error-message'
      />
    </div>
  );
};

export default TextArea;
