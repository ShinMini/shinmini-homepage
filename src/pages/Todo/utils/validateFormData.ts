import { z } from 'zod';

export const FormData = z.object({
  date: z.date().default(() => new Date()),
  title: z
    .string()
    .min(1)
    .max(300, { message: "the title can't over the 120 sizes" })
    .refine(check => check !== '', { message: 'title is required' }),
  detail: z.string().max(5000).optional(),
});

export const validateFormData = (inputs: unknown) => {
  const isValidData = FormData.parse(inputs);
  return isValidData;
};
