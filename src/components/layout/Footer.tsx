import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

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
            <div className="flex items-center gap-4 text-muted-foreground text-sm font-semibold">
              <a href="#" className="hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
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
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+91 77980 21323 / +91 95959 97711</span>
              </li>
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
