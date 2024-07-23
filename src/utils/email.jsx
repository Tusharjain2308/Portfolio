import emailjs from 'emailjs-com';

export const sendEmail = (templateParams) => {
  emailjs.send('service_loifizc', 'template_e7jtqpb', templateParams, 'BUP95TGjpJ5HKWOUu')
    .then((response) => {
      console.log('Email sent successfully:', response);
    })
    .catch((error) => {
      console.error('Email sending error:', error);
    });
};
