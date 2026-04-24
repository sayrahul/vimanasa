"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TwitterIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const SOCIAL_LINKS = [
  { name: 'Twitter', icon: <TwitterIcon size={18} />, color: 'hover:bg-[#1DA1F2]', href: '#' },
  { name: 'Instagram', icon: <InstagramIcon size={18} />, color: 'hover:bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]', href: '#' },
  { name: 'LinkedIn', icon: <LinkedinIcon size={18} />, color: 'hover:bg-[#0077b5]', href: '#' },
  { name: 'Facebook', icon: <FacebookIcon size={18} />, color: 'hover:bg-[#1877F2]', href: '#' }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block mb-2">
              <div className="bg-white/95 rounded-2xl p-4 inline-block shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <img
                  src="/logo.png"
                  alt="Vimanasa Services LLP"
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Empowering growth through talent and technology. Your trusted partner for modern manpower, advanced telecommunications, and digital IT solutions.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={cn(
                    "w-10 h-10 flex items-center justify-center rounded-xl bg-muted border border-border text-muted-foreground transition-all duration-300 hover:text-white hover:shadow-lg group relative overflow-hidden",
                    social.color
                  )}
                  aria-label={social.name}
                >
                  <div className="relative z-10 transition-transform duration-300 group-hover:rotate-6">
                    {social.icon}
                  </div>
                  {/* Internal Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white blur-xl transition-opacity" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-semibold text-foreground tracking-wide uppercase text-sm">Company</h3>
            <ul className="flex flex-col gap-3">
              {['About Us', 'Our Services', 'Portfolio', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-6">
            <h3 className="font-semibold text-foreground tracking-wide uppercase text-sm">Our Divisions</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="text-muted-foreground">Manpower Outsourcing</li>
              <li className="text-muted-foreground">Telecommunications</li>
              <li className="text-muted-foreground">IT & Digital Agency</li>
              <li className="text-muted-foreground">Government Tenders</li>
              <li className="text-muted-foreground">Facility Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h3 className="font-semibold text-foreground tracking-wide uppercase text-sm">Contact Information</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col gap-2">
                  <span><strong className="text-foreground/80">Corporate:</strong> Nath Valley Road, Kanchanwadi, Sambhajinagar 431001</span>
                  <span><strong className="text-foreground/80">Registered:</strong> 227, Undegaon, Gangakhed, Parbhani 431514</span>
                </div>
              </li>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone size={18} className="text-primary" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <a href="tel:+919921713207" className="hover:underline">9921713207</a>
                  <span className="hidden sm:inline text-muted-foreground/30">|</span>
                  <a href="tel:+918669997711" className="hover:underline">8669997711</a>
                </div>
              </div>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-primary shrink-0" />
                <span>vimanasaservices@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/60">
          <p>&copy; {currentYear} Vimanasa Services LLP. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
