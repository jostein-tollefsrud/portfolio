import { Form, Formik } from 'formik';
import { FC, useState } from 'react';
import { basicSchema } from '../schemas/formValidations';
import TextField from '@/components/TextField';
import TextArea from '@/components/TextArea';

interface FormValues {
  initialValues: object;
  name: string;
  email: string;
  message: string;
}

// const onSubmit = async (values: any, actions: any) => {
//   console.log('submitted');
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   actions.resetForm();
// };

const ContactForm: FC = () => {
  const [isSendt, setIsSendt] = useState(false);

  const handleSubmit = async (values, actions) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('sendt');
    setIsSendt(true);
    actions.resetForm();
  };

  return (
    <Formik
      validateOnMount={true}
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      validationSchema={basicSchema}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
    >
      {({ isSubmitting, isValid }) => (
        <div>
          <Form className='form'>
            <TextField label='Name' name='name' type='text' />
            <TextField label='Email' name='email' type='email' />
            <TextArea label='Message' name='message' />

            {isSendt && <p>In development mode | Not sendt!</p>}

            <button
              disabled={!isValid || isSubmitting}
              type='submit'
              className='btn btn--red'
            >
              Send message
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ContactForm;
