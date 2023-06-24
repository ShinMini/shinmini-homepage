// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/** @type {Parameters<typeof import('@emailjs/browser').send>} */
export const emailjsConfig = {
  serviceID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
