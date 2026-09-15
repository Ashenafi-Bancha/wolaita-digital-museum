import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import PageHero from '../components/ui/PageHero';
import ContactForm from '../components/Features/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SITE_EMAIL } from '../config/site';

const Contact = () => {
  const { t } = useLanguage();
  return (
    <>
      <Helmet>
        <title>Contact Us | Get in Touch</title>
        <meta name="description" content="Reach out to us for inquiries, collaborations, or to learn more about the Wolaita Museum." />
      </Helmet>

      <PageHero
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
        badge="Get in Touch"
        compact
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">Get in Touch</h2>
            <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
              Whether you have a question about our project, want to contribute, or are interested in partnership opportunities, we're here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-700 dark:text-orange-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 dark:text-stone-100 mb-1">Visit Us</h4>
                  <p className="text-sm text-stone-600 dark:text-stone-400">
                    Wolaita Sodo Cultural Center<br />
                    Sodo, Ethiopia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-700 dark:text-orange-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 dark:text-stone-100 mb-1">Email Us</h4>
                  <p className="text-sm text-stone-600 dark:text-stone-400">
                    {SITE_EMAIL}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-700 dark:text-orange-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 dark:text-stone-100 mb-1">Call Us</h4>
                  <p className="text-sm text-stone-600 dark:text-stone-400">
                    +251 46 555 0100
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="surface-3d hover-glow-slow p-8 rounded-2xl">
            <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-6">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;