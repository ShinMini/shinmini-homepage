import React, { memo, useRef, useState } from 'react';

import styled from 'styled-components';
import { Button, Checkbox, FormControlLabel, Grid, TextField } from '@mui/material';

import { emailjsConfig } from '@src/lib/emailjs/constants';
import emailjs from '@emailjs/browser';

import { randomEmail, randomName } from '@src/features';

import { z, ZodError } from 'zod';

const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: clamp(1rem, 3vh, 4rem);
  box-sizing: content-box;
  border: ${props => props.theme.colors.warning} 4px solid;
  background-color: ${({ theme }) => theme.colors.yellow};
  mix-blend-mode: normal;
  border-radius: 10px;
  padding: 1.5rem 1rem;
  padding-bottom: 2rem;

  width: clamp(300px, 95%, 1980px);
  height: clamp(400px, 100%, 600px);

  margin: 5rem auto;
`;

// Defining schema for validation
const schema = z.object({
  user_name: z.string().nonempty({ message: 'Name is required' }),
  user_email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().nonempty({ message: 'Message is required' }),
  anonymous: z.boolean().or(z.string()).default(false),
});

const SendMail: React.FC = () => {
  const form = useRef(null);
  const [formErrors, setFormErrors] = useState({ user_name: '', user_email: '', message: '', anonymous: '' });
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [anonymousUser, setAnonymousUser] = useState({ user_name: '', user_email: '' });
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const sendEmail = async e => {
    e.preventDefault();
    if (form.current === null) return console.error('Form is null');

    const formFields = new FormData(form.current);
    const formData = Object.fromEntries(formFields);

    if (formData.anonymous === 'yes') {
      formData.user_name = anonymousUser.user_name;
      formData.user_email = anonymousUser.user_email;
    }

    try {
      const parsedData = schema.parse(formData);
      console.log('anonymous: ', parsedData.anonymous);

      emailjs
        .send(
          emailjsConfig.serviceID,
          emailjsConfig.templateID,
          {
            from_name: formData.user_name,
            message: formData.message,
            reply_to: formData.user_email,
          },
          emailjsConfig.publicKey,
        )
        .then(
          _ => {
            alert('Message Sent, I will get back to you shortly');
          },
          error => {
            console.log(error.text);
            alert('There was an error sending the message, please try again later. :(');
          },
        );
    } catch (error) {
      console.error('zod parse error occur:', error);
      if (error instanceof ZodError) {
        const errorMap = error.formErrors.fieldErrors;
        setFormErrors(prevErrors => ({ ...prevErrors, ...errorMap }));
      } else {
        console.error(error);
      }
    }
  };

  const handleAnonymousChange = e => {
    const { checked } = e.target;
    setIsAnonymous(checked);

    if (!checked) return setAnonymousUser({ user_name: '', user_email: '' });
    const _randomName = randomName();
    const _randomEmail = randomEmail(_randomName);
    setAnonymousUser({ user_name: _randomName, user_email: _randomEmail });
  };

  return (
    <Form id="contact-me" ref={form}>
      <h4 className="lg:text-4xl text-2xl font-bold text-slate-700 mb-2">Hi ShinMini</h4>
      <Grid className="flex gap-6 mb-2 box-border px-2">
        {!isAnonymous ? (
          <TextField
            ref={nameRef}
            fullWidth
            required
            name="user_name"
            label="Name"
            autoComplete="name"
            variant="standard"
            error={Boolean(formErrors.user_name)}
            helperText={formErrors.user_name}
          />
        ) : (
          <TextField fullWidth name="user_name" autoComplete="name" value={anonymousUser.user_name} disabled />
        )}
        {!isAnonymous ? (
          <TextField
            ref={emailRef}
            fullWidth
            required
            name="user_email"
            label="Email"
            variant="standard"
            error={Boolean(formErrors.user_email)}
            helperText={formErrors.user_email}
          />
        ) : (
          <TextField fullWidth name="user_email" value={anonymousUser.user_email} disabled />
        )}
      </Grid>
      <Grid>
        <TextField
          name="message"
          label="Message"
          multiline
          minRows={8}
          fullWidth
          error={Boolean(formErrors.message)}
          helperText={formErrors.message}
        />
      </Grid>
      <Grid className="flex justify-between box-border px-2 text-slate-900">
        <FormControlLabel
          control={<Checkbox color="secondary" name="anonymous" value="yes" onChange={handleAnonymousChange} />}
          label="Anonymous"
        />
        <Button type="submit" variant="contained" color="success" onClick={sendEmail}>
          Send
        </Button>
      </Grid>
    </Form>
  );
};

export default memo(SendMail);
