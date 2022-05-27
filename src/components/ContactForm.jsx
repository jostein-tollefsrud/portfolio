import { Form, Formik } from 'formik';
import { useState } from 'react';
import { basicSchema } from '../schemas/formValidations';
import TextField from '@/components/TextField';
import TextArea from '@/components/TextArea';
import FormMessage from './FormMessage';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  const [form, setForm] = useState({
    state: '',
    message: '',
  });

  const [token, setToken] = useState('');
  const [showCaptcha, setShowCaptcha] = useState(false);

  const handleSubmit = async (values, actions) => {
    if (!token) {
      setForm({
        state: 'error',
        message: 'You must verify the captcha!',
      });
      return;
    }

    try {
      setForm({ state: 'loading', message: 'sending message...' });
      const res = await fetch(`api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ values, token }),
      });

      const { error } = await res.json();

      if (error) {
        setForm({
          state: 'error',
          message: 'Something went wrong!',
        });
        return;
      }

      setForm({
        state: 'success',
        message: 'Your message was sent successfully',
      });
      setToken('');
      actions.resetForm();
    } catch (error) {
      setForm({
        state: 'error',
        message: 'Something went wrong!',
      });
      setToken('');
    }
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
          <Form className='form' onChange={() => setShowCaptcha(true)}>
            <TextField label='Name' name='name' type='text' />
            <TextField label='Email' name='email' type='email' />
            <TextArea label='Message' name='message' />
            {showCaptcha ? (
              <ReCAPTCHA
                sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
                size='compact'
                onChange={(token) => setToken(token)}
                onExpired={(e) => setToken('')}
              />
            ) : null}

            {form.state === 'loading' ? (
              <FormMessage text={form.message} type='sending' />
            ) : form.state === 'error' ? (
              <FormMessage text={form.message} type='error' />
            ) : (
              form.state === 'success' && (
                <FormMessage text={form.message} type='success' />
              )
            )}

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
