import { Form, Formik } from 'formik';
import { useState } from 'react';
import TextField from '@/components/TextField';
import TextArea from '@/components/TextArea';
import FormMessage from './FormMessage';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRouter } from 'next/router';
import * as yup from 'yup';

const ContactForm = () => {
  const { locale } = useRouter();
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
        message:
          locale === 'no'
            ? 'Du må verifisere captcha!'
            : 'You must verify the captcha!',
      });
      return;
    }

    try {
      setForm({
        state: 'loading',
        message: locale === 'no' ? 'sender melding...' : 'sending message...',
      });
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
          message: locale === 'no' ? 'Noe gikk galt!' : 'Something went wrong!',
        });
        return;
      }

      setForm({
        state: 'success',
        message:
          locale === 'no'
            ? 'Din melding ble sendt'
            : 'Your message was sent successfully',
      });
      setToken('');
      actions.resetForm();
    } catch (error) {
      setForm({
        state: 'error',
        message: locale === 'no' ? 'Noe gikk galt!' : 'Something went wrong!',
      });
      setToken('');
    }
  };

  const basicSchema = yup.object().shape({
    name: yup
      .string()
      .max(
        40,
        locale === 'no'
          ? 'Må være under 40 bokstaver!'
          : 'Must be lesser than 40 characters!'
      )
      .required(locale === 'no' ? 'Obligatorisk' : 'Required!'),
    email: yup
      .string()
      .email(
        locale === 'no'
          ? 'Vennligst skriv inn en gyldig e-postadresse!'
          : 'Please enter a valid email!'
      )
      .required(locale === 'no' ? 'Obligatorisk' : 'Required!'),
    message: yup
      .string()
      .min(5, locale === 'no' ? 'Minst 5 bokstaver!' : 'Minimum 5 characters!')
      .required(locale === 'no' ? 'Obligatorisk' : 'Required!'),
  });

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
          <Form
            className='form'
            onChange={() => setShowCaptcha(true)}
            aria-label={locale === 'no' ? 'kontaktskjema' : 'Contact form'}
          >
            <TextField
              label={locale === 'no' ? 'Navn' : 'Name'}
              name='name'
              type='text'
            />
            <TextField
              label={locale === 'no' ? 'E-post' : 'Email'}
              name='email'
              type='email'
            />
            <TextArea
              label={locale === 'no' ? 'Melding' : 'Message'}
              name='message'
            />
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
              {locale === 'no' ? 'Send melding' : 'Send message'}
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ContactForm;
