"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, Shield, Server, ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    icon: <Users size={32} className="text-primary" />,
    title: "Manpower Outsourcing",
    description: "Skilled & unskilled staff, security, and housekeeping solutions for private and government sectors.",
    href: "/services#manpower",
  },
  {
    icon: <Server size={32} className="text-primary" />,
    title: "Telecommunications",
    description: "End-to-end network installations, Wi-Fi setups, and specialized project managers.",
    href: "/services#telecom",
  },
  {
    icon: <Shield size={32} className="text-primary" />,
    title: "IT & Digital Agency",
    description: "Custom software development, high-end web design, and digital marketing strategies.",
    href: "/services#it",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center pt-48 pb-20 w-full">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full mix-blend-screen" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 blur-[150px] rounded-full mix-blend-screen" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary text-sm font-medium tracking-wide mb-2 border border-primary/20"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Welcome to the Future of Services
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-tight"
            >
              Empowering Growth Through <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Talent & Technology
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-4 leading-relaxed text-balance"
            >
              Vimanasa Services LLP delivers unparalleled manpower solutions, advanced telecommunications infrastructure, and cutting-edge digital creations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto"
            >
              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                Explore Services
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card text-foreground font-semibold text-lg hover:bg-foreground/10 transition-all flex items-center justify-center gap-2"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 bg-card/50 border-y border-border/50 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Verticals</h2>
            <p className="text-muted-foreground max-w-2xl">
              Comprehensive operational and digital excellence tailored for businesses and government organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 rounded-3xl glass-card hover:bg-foreground/10 transition-colors border border-border overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-300">
                  <ArrowUpRight className="text-primary" size={24} />
                </div>
                
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 shadow-inner border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <div className="group-hover:scale-110 transition-transform duration-300 text-primary group-hover:text-white">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:translate-x-1 transition-all"
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl leading-tight">
            Ready to transform your operations?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl">
            Partner with Vimanasa to scale efficiently. Our experienced teams are ready to deploy.
          </p>
          <Link
            href="/contact"
            className="px-10 py-5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-xl hover:shadow-[0_0_30px_rgba(12,164,218,0.4)] transition-all hover:scale-105 active:scale-95"
          >
            Start Your Project Now
          </Link>
        </div>
      </section>
    </div>
  );
}
