import { send } from '@emailjs/browser';

type SendParams = Parameters<typeof send>;
type EmailConfig = {
  serviceID: SendParams[0];
  templateID: SendParams[1];
  publicKey: SendParams[3];
};

export const emailjsConfig: EmailConfig = {
  serviceID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
