import React, { useRef, useState } from 'react';
import { Button, Checkbox, FormControlLabel, Grid, TextField } from '@mui/material';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '@src/lib/emailjs/constants';
import { z, ZodError } from 'zod';
import styled from 'styled-components';
import { hexToRGBA } from '@src/features';

const Form = styled.form`
  /* className="flex flex-col gap-6 rounded-xl border-4 px-5 py-8 border-teal-900 mx-auto bg-slate-200 shadow-xl text-slate-800"> */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: rgb(19 78 74) 2px solid;
  border-radius: 15px;
  padding: 15px 10px;
  background-color: #e0e7ff;
  box-shadow: 1px 1px 2px 2px ${props => hexToRGBA(props.theme.colors.opposite.background)};
  margin-top: 2rem;
  margin-left: min(6vw, 3rem);
  margin-bottom: 2rem;
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

  const sendEmail = async e => {
    e.preventDefault();
    if (form.current === null) return;

    const formFields = new FormData(form.current);
    const formData = Object.fromEntries(formFields);

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
      // Check if it is a ZodError
      if (error instanceof ZodError) {
        // Handle validation errors
        const errorMap = error.formErrors.fieldErrors;
        setFormErrors(prevErrors => ({ ...prevErrors, ...errorMap }));
      } else {
        console.error(error);
      }
    }
  };

  return (
    <Form ref={form}>
      <h4 className="text-2xl font-bold">Contact to Me!</h4>
      <Grid className="flex gap-6 mb-2 box-border px-2">
        <TextField
          fullWidth
          required
          name="user_name"
          label="Name"
          autoComplete="name"
          variant="standard"
          error={Boolean(formErrors.user_name)}
          helperText={formErrors.user_name}
        />
        <TextField
          fullWidth
          required
          name="user_email"
          label="Email"
          variant="standard"
          error={Boolean(formErrors.user_email)}
          helperText={formErrors.user_email}
        />
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
        <FormControlLabel control={<Checkbox color="secondary" name="anonymous" value="yes" />} label="Anonymous" />
        <Button type="submit" variant="contained" color="primary" onClick={sendEmail}>
          Send
        </Button>
      </Grid>
    </Form>
  );
};

export default SendMail;
