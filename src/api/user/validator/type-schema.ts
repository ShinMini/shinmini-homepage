import z from 'zod';

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }).nonempty({ message: 'Email is required' }),
  password: z.string().nonempty({ message: 'Password is required' }),
});

const registerSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }).nonempty({ message: 'Email is required' }),
  password: z.string().nonempty({ message: 'Password is required' }),
  firstName: z.string().nonempty({ message: 'First name is required' }),
  lastName: z.string().nonempty({ message: 'Last name is required' }),
});

export { loginSchema, registerSchema };
