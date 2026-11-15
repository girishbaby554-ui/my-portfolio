import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { supabase } from '@/lib/supabase';
import {
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from '@/lib/contactValidation';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const EMPTY_VALUES: ContactFormValues = { name: '', email: '', message: '' };

const inputClass = (hasError: boolean) =>
  `w-full rounded-xl border bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors duration-200 focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-300 dark:focus:ring-zinc-100/10 ${
    hasError
      ? 'border-error-600 dark:border-error-500'
      : 'border-zinc-300 dark:border-zinc-700'
  }`;

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const handleChange = (field: keyof ContactFormValues, value: string) => {
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);
    if (errors[field]) {
      setErrors(validateContactForm(nextValues));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');
    const { error } = await supabase.from('contact_messages').insert({
      name: values.name.trim(),
      email: values.email.trim(),
      message: values.message.trim(),
    });

    if (error) {
      setStatus('error');
      return;
    }

    setValues(EMPTY_VALUES);
    setErrors({});
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-center justify-center rounded-2xl border border-success-500/40 bg-success-50 p-10 text-center dark:bg-zinc-900"
      >
        <CheckCircle2 className="h-12 w-12 text-success-600" aria-hidden="true" />
        <h3 className="mt-5 text-xl font-semibold text-zinc-900 dark:text-zinc-50">Thank you for reaching out</h3>
        <p className="mt-3 max-w-sm leading-normal text-zinc-700 dark:text-zinc-300">
          Your message has been received. I will get back to you as soon as I can.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-8 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-white dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
        >
          Send another message
        </button>
      </div>
    );
  }

  const submitting = status === 'submitting';

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-describedby={status === 'error' ? 'contact-form-error' : undefined}
      className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => handleChange('name', e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            className={inputClass(Boolean(errors.name))}
            placeholder="Your full name"
          />
          {errors.name && (
            <p id="contact-name-error" className="mt-2 text-sm text-error-700 dark:text-error-500">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => handleChange('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            className={inputClass(Boolean(errors.email))}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p id="contact-email-error" className="mt-2 text-sm text-error-700 dark:text-error-500">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="contact-message" className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Message
          </label>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">{values.message.length}/2000</span>
        </div>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          value={values.message}
          onChange={(e) => handleChange('message', e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className={`${inputClass(Boolean(errors.message))} resize-y`}
          placeholder="Tell me about your project, opportunity, or question..."
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-2 text-sm text-error-700 dark:text-error-500">
            {errors.message}
          </p>
        )}
      </div>

      {status === 'error' && (
        <div
          id="contact-form-error"
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-error-500/40 bg-error-50 p-4 text-sm text-error-700 dark:bg-zinc-950 dark:text-error-500"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" aria-hidden="true" />
          <span>Your message could not be sent right now. Please try again in a moment.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-zinc-700 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
