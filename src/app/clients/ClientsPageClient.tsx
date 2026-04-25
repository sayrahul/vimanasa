"use client";

import { motion } from "framer-motion";

const CLIENTS = [
  { name: "Global Tech Corp", industry: "IT Infrastructure", logo: "GT" },
  { name: "Maharashtra State Transport", industry: "Government Sector", logo: "MST" },
  { name: "Apex Healthcare", industry: "Hospitality & Medical", logo: "AH" },
  { name: "Sunrise Telecom", industry: "Networking", logo: "ST" },
  { name: "Pinnacle Education", industry: "Institutional", logo: "PE" },
  { name: "Secure City Initiative", industry: "Public Safety", logo: "SCI" },
  { name: "Nexus Retails", industry: "E-Commerce", logo: "NR" },
  { name: "Omega Builders", industry: "Construction", logo: "OB" },
];

const TESTIMONIALS = [
  {
    quote: "Vimanasa transformed our networking capabilities entirely. Their deployment team was rapid and completely professional.",
    author: "Rakesh Verma",
    position: "CTO, Sunrise Telecom"
  },
  {
    quote: "Finding dependable manpower was a huge challenge before we partnered with Vimanasa. Highly recommended.",
    author: "Sneha Patil",
    position: "HR Director, Apex Healthcare"
  },
  {
    quote: "Their digital agency division completely revamped our outdated web presence, doubling our organic conversion rate.",
    author: "David L.",
    position: "Founder, Nexus Retails"
  }
];

export default function ClientsPage() {
  return (
    <div className="flex flex-col w-full pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Our Trusted Partners</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We are proud to power operations for leading enterprises, government divisions, and fast-growing organizations.
          </p>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {CLIENTS.map((client, idx) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card flex flex-col items-center justify-center p-8 rounded-2xl border border-border group hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4 text-2xl font-black text-secondary group-hover:scale-110 transition-transform">
                {client.logo}
              </div>
              <h3 className="font-bold text-center text-foreground">{client.name}</h3>
              <p className="text-xs text-muted-foreground text-center mt-1">{client.industry}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="relative rounded-3xl bg-secondary/10 border border-secondary/20 p-8 md:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5">
             <span className="text-9xl font-serif">"</span>
          </div>
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold">What They Say About Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {TESTIMONIALS.map((testi, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-foreground/5 shadow-sm"
              >
                <div className="text-primary text-4xl font-serif leading-none mb-4">"</div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  {testi.quote}
                </p>
                <div>
                  <h4 className="font-bold text-foreground">{testi.author}</h4>
                  <p className="text-sm text-secondary">{testi.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
