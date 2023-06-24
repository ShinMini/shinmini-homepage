// useSendMail.js
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '@src/lib/emailjs/constants';
import { z, ZodError } from 'zod';

const schema = z.object({
  user_name: z.string().nonempty({ message: 'Name is required' }),
  user_email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().nonempty({ message: 'Message is required' }),
  anonymous: z.boolean().default(false),
});

export const useSendMail = (form: HTMLFormElement) => {
  const [formErrors, setFormErrors] = useState({ user_name: '', user_email: '', message: '', anonymous: '' });

  const sendEmail = async formData => {
    try {
      const parsedData = schema.parse(formData);
      console.log(parsedData);

      await emailjs.sendForm(emailjsConfig.serviceID, emailjsConfig.templateID, form.current, emailjsConfig.publicKey);
      alert('Message Sent, I will get back to you shortly');
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMap = error.formErrors.fieldErrors;
        setFormErrors(prevErrors => ({ ...prevErrors, ...errorMap }));
      } else {
        console.error(error);
        alert('There was an error sending the message, please try again later. :(');
      }
    }
  };

  return { formErrors, sendEmail };
};
