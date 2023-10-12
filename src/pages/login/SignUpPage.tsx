import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { HiLockClosed } from 'react-icons/hi';

import { Layout } from '@src/components';
import { registerSchema } from '@src/api/user/validator/type-schema';
import { z } from 'zod';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
      {'Copyright © '}
      <Link color="inherit" href="https://shinmini.com/">
        https://shinmini.com/
      </Link>{' '}
      2023.07.13
    </Typography>
  );
}

type UserInfo = z.infer<typeof registerSchema>;
const initializeUserInfo: UserInfo = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export default function SignUp() {
  const [allowExtraEmails, setAllowExtraEmails] = React.useState(false);
  const [helperText, setHelperText] = React.useState<UserInfo>(initializeUserInfo);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userInfo = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    };

    const result = registerSchema.safeParse(userInfo);
    if (!result.success) {
      const errorMessage = Object.fromEntries(result.error.errors.map(error => [error.path[0], error.message]));
      setHelperText(errorMessage as UserInfo);
      return;
    }

    console.log('result', { ...result.data, allowExtraEmails });

    // currently not working only works with SNS login
    alert('currently not working please sign in via SNS account');
    return;
  };

  return (
    <Layout>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
          }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <HiLockClosed />
          </Avatar>
          <Typography component="h1" variant="h5" fontWeight={500}>
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={!!helperText.firstName}
                  helperText={helperText.firstName}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={!!helperText.lastName}
                  helperText={helperText.lastName}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={!!helperText.email}
                  helperText={helperText.email}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={!!helperText.password}
                  helperText={helperText.password}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  onChange={() => setAllowExtraEmails(prev => !prev)}
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                  componentsProps={{ typography: { fontSize: '0.75rem', lineHeight: 1.15, color: 'darkgray' } }}
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright />
      </Container>
    </Layout>
  );
}
