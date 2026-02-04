import emailjs from '@emailjs/browser';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const initEmailJs = () => {
  emailjs.init({publicKey: PUBLIC_KEY});
};