import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    void data;
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  if (isSubmitSuccessful) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-lg p-5 sm:p-8 text-center"
      >
        <div className="flex justify-center mb-4">
          <CheckCircle className="text-green-600 w-16 h-16" />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-700">Thank you for reaching out. We'll get back to you shortly.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-stone-700 dark:text-stone-300">
          Full Name
        </label>
        <input
          id="name"
          {...register('name', { required: 'Name is required' })}
          className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-stone-800 focus:ring-2 focus:ring-orange-500 outline-none transition-all ${
            errors.name ? 'border-red-500' : 'border-stone-300 dark:border-stone-700'
          }`}
          placeholder="Enter your name"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-stone-700 dark:text-stone-300">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-stone-800 focus:ring-2 focus:ring-orange-500 outline-none transition-all ${
            errors.email ? 'border-red-500' : 'border-stone-300 dark:border-stone-700'
          }`}
          placeholder="your@email.com"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-stone-700 dark:text-stone-300">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message', { required: 'Message is required' })}
          className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-stone-800 focus:ring-2 focus:ring-orange-500 outline-none transition-all ${
            errors.message ? 'border-red-500' : 'border-stone-300 dark:border-stone-700'
          }`}
          placeholder="How can we help you?"
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-4 bg-orange-700 hover:bg-orange-800 text-white font-bold rounded-lg transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
      >
        {isSubmitting ? (
          <span className="animate-pulse">Sending...</span>
        ) : (
          <>
            Send Message <Send size={18} />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
