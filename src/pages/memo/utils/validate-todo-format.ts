import { z } from 'zod';

export const FormData = z.object({
  date: z
    .date()
    .optional()
    .default(() => new Date()),
  title: z
    .string()
    .min(1)
    .max(15, { message: "the title shouldn't be over 15 characters" })
    .refine(check => check !== '', { message: 'title is required' }),
  detail: z.string().max(5000).optional().default(''),
});

export const validateFormData = (inputs: unknown) => {
  const isValidData = FormData.safeParse(inputs);
  return isValidData;
};
