"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Building } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Serverless Form Simulation (e.g. Formspree/EmailJS)
    // Replace the action point in production
    setTimeout(() => {
      setFormStatus("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Contact Us</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Ready to scale your business? Get in touch with our team today and let's discuss how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details & Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-8"
          >
            <div className="glass-card p-8 rounded-3xl border border-border">
              <h2 className="text-2xl font-bold mb-6">Our Office</h2>
              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-4 text-muted-foreground">
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Registered Office</h3>
                    <p className="mt-1 leading-relaxed">227, Undegaon, Post Kodri, Taluka Gangakhed,<br/>Dist Parbhani, MH - 431514</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-muted-foreground">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                    <Building size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Corporate Office</h3>
                    <p className="mt-1 leading-relaxed">Nath Valley Road, Kanchanwadi,<br/>Chhatrapati Sambhajinagar (Aurangabad) 431001</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-muted-foreground">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Phone Numbers</h3>
                    <div className="flex flex-col gap-1 mt-1">
                      <a href="tel:+919921713207" className="text-lg font-medium hover:text-primary transition-colors text-foreground">9921713207</a>
                      <a href="tel:+918669997711" className="text-lg font-medium hover:text-primary transition-colors text-foreground">8669997711</a>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-muted-foreground">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Email Address</h3>
                    <p className="mt-1 leading-relaxed">vimanasaservices@gmail.com</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map Embed dummy */}
            <div className="w-full h-80 rounded-3xl overflow-hidden border border-border glass-card p-2 relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120536.56475751853!2d76.6713723307527!3d18.96695240217036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bceba29606d8b2d%3A0xe549eb9a6b107c1b!2sGangakhed%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, borderRadius: '1.25rem' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 rounded-3xl border border-border flex flex-col gap-6">
              <h2 className="text-3xl font-bold mb-2">Send us a message</h2>
              <p className="text-muted-foreground mb-4">Fill out the form below and we'll get back to you within 24 hours.</p>

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground/80">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  className="bg-background border border-border rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  className="bg-background border border-border rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground/80">Subject Category</label>
                <select 
                  id="subject" 
                  name="subject" 
                  required
                  className="bg-background border border-border rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all text-foreground/90"
                >
                  <option value="" className="text-foreground">Select a subject...</option>
                  <option value="manpower" className="text-foreground">Manpower Outsourcing Request</option>
                  <option value="telecom" className="text-foreground">Telecommunications Inquiry</option>
                  <option value="it" className="text-foreground">IT & Web Services</option>
                  <option value="tender" className="text-foreground">Government Tender Connect</option>
                  <option value="other" className="text-foreground">Other General Inquiry</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/80">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required
                  rows={5}
                  className="bg-background border border-border rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all resize-none"
                  placeholder="Tell us about your project or requirement..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                className="mt-4 w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-5 rounded-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? (
                  <span className="flex items-center gap-2">Sending <span className="animate-pulse">...</span></span>
                ) : formStatus === 'success' ? (
                  <span className="flex items-center gap-2 text-green-200">Message Sent Successfully!</span>
                ) : (
                  <>
                    Send Message
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
