import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { Github, Linkedin, Mail, Phone, ArrowUpRight, Send, CheckCircle, AlertCircle } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { profile } from '../data/profile';

const CHANNELS = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'LinkedIn', value: 'in/jawadhameedbaloch2', href: profile.links.linkedin, icon: Linkedin },
  { label: 'GitHub', value: 'jawadhameedbaloch', href: profile.links.github, icon: Github },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, icon: Phone },
];

export default function Contact() {
  const [state, handleSubmit] = useForm('xbdedzkb');

  return (
    <section id="contact" className="relative py-section px-5 md:px-8">
      <div className="max-w-content mx-auto">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Work Together"
          subtitle="Open to freelance builds, full-time roles, and interesting problems."
        />

        <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center p-10 bg-bg-surface border border-border rounded-2xl text-center h-full">
                <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-xl font-semibold text-fg mb-3">Message Sent!</h3>
                <p className="text-body text-fg-secondary">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="form-label">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    className="form-input"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors} 
                    className="text-micro text-red-400 mt-1.5 block"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="form-label">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    className="form-input"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors} 
                    className="text-micro text-red-400 mt-1.5 block"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    className="form-input min-h-[140px] resize-y"
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors} 
                    className="text-micro text-red-400 mt-1.5 block"
                  />
                </div>

                {state.errors && state.errors.length > 0 && !state.errors.find(e => e.field) && (
                  <div className="flex items-center gap-2 text-body-sm text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                    <AlertCircle size={16} />
                    Something went wrong. Please check the fields and try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn-primary w-full sm:w-auto justify-center"
                >
                  {state.submitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3"
          >
            <h3 className="text-label uppercase text-fg-tertiary tracking-[0.12em] mb-4">
              Or reach out directly
            </h3>
            {CHANNELS.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 bg-bg-surface border border-border rounded-xl hover:border-border-hover transition-all duration-250"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-bg-elevated flex items-center justify-center">
                    <channel.icon size={16} className="text-fg-secondary group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <div className="text-micro uppercase text-fg-tertiary tracking-wider">{channel.label}</div>
                    <div className="text-body-sm text-fg-secondary group-hover:text-fg transition-colors mt-0.5">{channel.value}</div>
                  </div>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-fg-muted group-hover:text-fg-tertiary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
