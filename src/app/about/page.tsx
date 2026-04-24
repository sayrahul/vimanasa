"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, ShieldCheck, Users, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const VALUES = [
  { icon: <TrendingUp className="text-secondary" />, title: "Innovation", desc: "Always pushing the boundaries of what's possible." },
  { icon: <ShieldCheck className="text-secondary" />, title: "Reliability", desc: "Trusted by government sectors and private businesses alike." },
  { icon: <Users className="text-secondary" />, title: "Empowerment", desc: "Lifting up communities through job creation and upskilling." },
  { icon: <CheckCircle2 className="text-secondary" />, title: "Excellence", desc: "Delivering top-tier results in every project." }
];

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

const TEAM = [
  {
    name: "Sanjivan Kamble",
    role: "Managing Partner & Chief Financial Officer (CFO)",
    initial: "SK",
    image: null,
    color: "from-red-600 to-rose-700"
  },
  {
    name: "Rajudas Rathod",
    role: "Chief Executive Officer (CEO) & Technical Director",
    initial: "RR",
    image: null,
    color: "from-orange-500 to-rose-500"
  },
  {
    name: "Gopichand Poul",
    role: "General Manager – Legal & Liaison",
    initial: "GP",
    image: "/images/team/gopichand.jpg",
    color: "from-blue-500 to-indigo-500"
  },
  {
    name: "Rahul Jadhav",
    role: "Chief Technology Officer (CTO) & Senior Technical Manager",
    initial: "RJ",
    image: "/images/team/rahul.jpg",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Prabhu Rathod",
    role: "Head of Corporate Affairs",
    initial: "PR",
    image: "/images/team/prabhu.jpg",
    color: "from-zinc-500 to-slate-500"
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            About <span className="text-primary">Vimanasa</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We are a multi-disciplinary conglomerate specializing in Manpower Outsourcing, Telecommunications, and Digital Innovation. Our mission is to bridge the gap between human potential and technological advancement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-secondary/10 border border-secondary/20 p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To be the leading service provider in India, recognized for our operational excellence, commitment to quality, and fostering an environment where both our employees and clients thrive.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl bg-primary/10 border border-primary/20 p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To empower organizations by providing reliable workforce solutions, robust telecommunication networks, and state-of-the-art digital experiences that drive growth and efficiency.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-3xl"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                <p className="text-muted-foreground">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 whitespace-nowrap">Our Leadership Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Meet the visionaries driving Vimanasa forward with their expertise and dedication.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
            {TEAM.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                transition={{ delay: idx * 0.1 }}
                className="group relative glass-card p-10 rounded-3xl overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col items-center text-center w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.7rem)] min-h-[420px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10 flex flex-col items-center flex-grow">
                  <div className={cn(
                    "w-32 h-32 rounded-3xl rotate-3 group-hover:rotate-6 group-hover:scale-110 flex items-center justify-center mb-6 shadow-xl transition-all duration-500 ease-out overflow-hidden relative",
                    !member.image && `bg-gradient-to-br ${member.color}`
                  )}>
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <span className="text-4xl font-black text-white tracking-widest">{member.initial}</span>
                    )}
                    {/* Gloss effect on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">{member.name}</h3>
                  <p className="text-muted-foreground font-medium text-sm leading-relaxed mb-6 group-hover:text-foreground transition-colors">{member.role}</p>

                  {/* Social Links reveal */}
                  <div className="mt-auto flex gap-3 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <a href="#" className="p-2.5 rounded-full bg-foreground/5 hover:bg-primary hover:text-white transition-all duration-300">
                      <LinkedinIcon size={16} />
                    </a>
                    <a href="#" className="p-2.5 rounded-full bg-foreground/5 hover:bg-[#1DA1F2] hover:text-white transition-all duration-300">
                      <TwitterIcon size={16} />
                    </a>
                    <a href="#" className="p-2.5 rounded-full bg-foreground/5 hover:bg-foreground hover:text-background transition-all duration-300">
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
