const conf = {
  appwriteServiceId: String(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID),
  appwriteTemplateId: String(import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID),
  appwritePublicKey: String(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY),
};

export default conf;
