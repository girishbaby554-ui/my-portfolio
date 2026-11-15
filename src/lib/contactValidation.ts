export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (!name) {
    errors.name = 'Please enter your name.';
  } else if (name.length > 100) {
    errors.name = 'Name must be 100 characters or fewer.';
  }

  if (!email) {
    errors.email = 'Please enter your email address.';
  } else if (email.length > 200 || !EMAIL_PATTERN.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!message) {
    errors.message = 'Please write a message.';
  } else if (message.length < 10) {
    errors.message = 'Your message should be at least 10 characters.';
  } else if (message.length > 2000) {
    errors.message = 'Your message must be 2000 characters or fewer.';
  }

  return errors;
}
