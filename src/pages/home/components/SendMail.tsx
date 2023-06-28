import React, { useEffect, useRef, useState } from 'react';
import { Button, Checkbox, FormControlLabel, Grid, TextField } from '@mui/material';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '@src/lib/emailjs/constants';
import { set, z, ZodError } from 'zod';
import styled from 'styled-components';
import { hexToRGBA, randomEmail, randomName } from '@src/features';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: rgb(19 78 74) 2px solid;
  border-radius: 15px;
  padding: 1.5rem 1rem;
  background-color: #e0e7ff;
  box-shadow: 1px 1px 2px 2px ${props => hexToRGBA(props.theme.colors.opposite.background)};
  margin: 2rem auto;
  max-width: 600px;
  width: 80%;
`;

// Defining schema for validation
const schema = z.object({
  user_name: z.string().nonempty({ message: 'Name is required' }),
  user_email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().nonempty({ message: 'Message is required' }),
  anonymous: z.boolean().default(false),
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
    if (form.current === null) return;

    const formFields = new FormData(form.current);
    const formData = Object.fromEntries(formFields);

    if (formData.anonymous) {
      formData.user_name = anonymousUser.user_name;
      formData.user_email = anonymousUser.user_email;
    }

    // Perform form validation using Zod
    try {
      const parsedData = schema.parse(formData);
      console.log(parsedData);

      emailjs.sendForm(emailjsConfig.serviceID, emailjsConfig.templateID, form.current, emailjsConfig.publicKey).then(
        _ => {
          alert('Message Sent, I will get back to you shortly');
        },
        error => {
          console.log(error.text);
          alert('There was an error sending the message, please try again later. :(');
        },
      );
    } catch (error) {
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

    const _randomName = randomName();
    const _randomEmail = randomEmail(_randomName);
    setAnonymousUser({ user_name: _randomName, user_email: _randomEmail });
  };

  useEffect(() => {
    console.log(`
    current user name: ${nameRef.current?.value} 
    current user email: ${emailRef.current?.value}
    anonymousUser: ${JSON.stringify(anonymousUser)} 
    isAnonymous: ${isAnonymous}
    `);
  }, [isAnonymous]);

  return (
    <Form ref={form}>
      <h4 className="text-2xl font-bold">Contact to Me!</h4>
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
          rows={4}
          fullWidth
          error={Boolean(formErrors.message)}
          helperText={formErrors.message}
        />
      </Grid>
      <Grid className="flex justify-between box-border px-2">
        <FormControlLabel
          control={<Checkbox color="secondary" name="anonymous" value="yes" onChange={handleAnonymousChange} />}
          label="Anonymous"
        />
        <Button type="submit" variant="contained" color="primary" onClick={sendEmail}>
          Send
        </Button>
      </Grid>
    </Form>
  );
};

export default SendMail;
