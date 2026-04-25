"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, ShieldCheck, Users, Mail, Eye, Target, Sparkles, Zap, Award, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const VALUES = [
  { icon: <Zap className="text-primary" />, title: "Innovation", desc: "Pioneering the next generation of digital and telecommunication solutions.", color: "bg-blue-500/10" },
  { icon: <ShieldCheck className="text-primary" />, title: "Reliability", desc: "A foundation of trust built through years of government and private sector service.", color: "bg-cyan-500/10" },
  { icon: <Award className="text-primary" />, title: "Excellence", desc: "Unwavering commitment to top-tier quality and operational perfection.", color: "bg-indigo-500/10" },
  { icon: <Users className="text-primary" />, title: "Empowerment", desc: "Creating opportunities and lifting communities through strategic growth.", color: "bg-violet-500/10" }
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
    name: "Mr. Sanjivan Kamble",
    role: "Managing Director",
    initial: "SK",
    image: "/images/team/sanjivan.jpg",
    color: "from-red-600 to-rose-700",
    bio: "Architecting robust financial frameworks and guiding the firm’s long-term investments and sustainable growth."
  },
  {
    name: "Mr. Rajudas Rathod",
    role: "Chief Executive Officer (CEO) & Technical Director",
    initial: "RR",
    image: null,
    color: "from-orange-500 to-rose-500",
    bio: "Translating ambitious visions into operational excellence and steering the company’s expansion across all verticals."
  },
  {
    name: "Adv. Gopichand Poul",
    role: "General Manager – Legal & Liaison",
    initial: "GP",
    image: "/images/team/gopichand.jpg",
    color: "from-blue-500 to-indigo-500",
    bio: "Safeguarding corporate integrity, mitigating risks, and ensuring seamless regulatory compliance across all business operations."
  },
  {
    name: "Mr.Rahul Jadhav",
    role: "Chief Technology Officer (CTO) & Senior Technical Manager",
    initial: "RJ",
    image: "/images/team/rahul.jpg",
    color: "from-purple-500 to-pink-500",
    bio: "Architecting the innovative IT and telecommunication infrastructures that power our modern enterprise."
  },
  {
    name: "Mr. Prabhu Rathod",
    role: "Head of Corporate Affairs",
    initial: "PR",
    image: "/images/team/prabhu.jpg",
    color: "from-zinc-500 to-slate-500",
    bio: "Building bridges between Vimanasa, the community, and key institutions to foster a strong, reputable corporate footprint."
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

        {/* Vision & Mission Section */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-32">
          {/* Background Light Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative p-10 md:p-14 rounded-[3rem] bg-white border border-black/[0.03] shadow-[0_30px_70px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_90px_rgba(0,0,0,0.08)] transition-all duration-700 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[5rem] -z-10 group-hover:bg-secondary/10 transition-colors" />
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <Eye className="text-secondary w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Our Vision</h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              To be the leading service provider in India, recognized for our <span className="text-foreground font-medium">operational excellence</span>, commitment to quality, and fostering an environment where both our employees and clients thrive.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative p-10 md:p-14 rounded-[3rem] bg-white border border-black/[0.03] shadow-[0_30px_70px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_90px_rgba(0,0,0,0.08)] transition-all duration-700 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] -z-10 group-hover:bg-primary/10 transition-colors" />
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <Target className="text-primary w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Our Mission</h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              To empower organizations by providing <span className="text-foreground font-medium">reliable workforce solutions</span>, robust telecommunication networks, and state-of-the-art digital experiences that drive growth.
            </p>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div className="mb-32 relative">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase border border-primary/20 rounded-full bg-primary/5 text-primary"
            >
              <Sparkles size={14} />
              The Vimanasa DNA
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Our Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-10 rounded-[2.5rem] bg-white border border-black/[0.02] shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2"
              >
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:rotate-12", val.color)}>
                  {val.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{val.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm font-light">{val.desc}</p>
                
                {/* Subtle numbering */}
                <div className="absolute top-10 right-10 text-4xl font-black text-black/[0.02] group-hover:text-primary/5 transition-colors">
                  0{idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>        {/* Leadership Team Section - The Floating Prism Aesthetic */}
        <section className="relative py-40 mb-24 overflow-hidden bg-white">
          {/* Animated Mesh-like Background */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                opacity: [0.05, 0.1, 0.05]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-gradient-to-br from-primary via-transparent to-secondary blur-[150px] rounded-full"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [90, 0, 90],
                opacity: [0.03, 0.08, 0.03]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-tr from-secondary via-transparent to-primary blur-[130px] rounded-full"
            />
          </div>

          <div className="relative z-10 px-6 container mx-auto max-w-7xl">
            <div className="text-center mb-32">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-6 py-2 mb-8 text-[11px] font-black tracking-[0.4em] uppercase border border-black/5 rounded-full bg-white shadow-sm text-primary"
              >
                Executive Board
              </motion.div>
              <h2 className="text-5xl md:text-8xl font-bold tracking-tight text-foreground mb-8">
                The minds behind <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Vimanasa.</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
                A multidisciplinary team united by a singular vision: to bridge human potential with technological excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-32 gap-x-12">
              {TEAM.map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
                  }}
                  className="group relative"
                >
                  {/* The Prism Card Body */}
                  <div className="relative pt-32 pb-12 px-8 rounded-[4rem] bg-white border border-black/[0.02] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] group-hover:shadow-[0_60px_120px_-20px_rgba(0,0,0,0.1)] transition-all duration-1000 flex flex-col items-center">
                    
                    {/* Internal Animation Container (to avoid cropping the floating image) */}
                    <div className="absolute inset-0 overflow-hidden rounded-[4rem] pointer-events-none">
                      {/* Mouse Tracking Glow */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(var(--primary-rgb, 12, 164, 218), 0.06), transparent 40%)`
                        } as any}
                      />

                      {/* Gloss Sweep Effect */}
                      <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[gloss_2s_ease-in-out_infinite] rotate-45" />
                    </div>

                    {/* Floating Detached Image */}
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 z-30">
                      <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-1000 rounded-full" />
                      
                      <motion.div
                        whileHover={{ y: -12, rotateY: 8, rotateX: -5 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className={cn(
                          "relative w-full h-full rounded-[3.5rem] overflow-hidden shadow-2xl border-[6px] border-white transition-all duration-700",
                          !member.image && `bg-gradient-to-br ${member.color} flex items-center justify-center`
                        )}
                      >
                        {member.image ? (
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" />
                        ) : (
                          <span className="text-6xl font-black text-white/90 drop-shadow-xl">{member.initial}</span>
                        )}
                      </motion.div>

                      {/* Rotating Orbit Halo */}
                      <div className="absolute -inset-4 border-2 border-primary/10 rounded-[4rem] animate-[spin_10s_linear_infinite] pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-700 scale-90 group-hover:scale-110" />
                      <div className="absolute -inset-8 border border-secondary/5 rounded-[5rem] animate-[spin_15s_linear_reverse_infinite] pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-700 scale-90 group-hover:scale-110" />
                    </div>

                    {/* Content Section with subtle Parallax */}
                    <motion.div 
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="text-center mt-6 w-full relative z-10"
                    >
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-500 tracking-tight">
                        {member.name}
                      </h3>

                      <div className="inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest mb-8 border border-primary/10 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        {member.role.split('&')[0]}
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-8 px-4 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                        {member.bio}
                      </p>

                      {/* Social Plate */}
                      <div className="flex items-center justify-center gap-3 p-2 rounded-2xl bg-black/[0.02] border border-black/[0.03] group-hover:bg-white group-hover:shadow-xl transition-all duration-700 group-hover:translate-y-[-4px]">
                        <a href="#" className="p-2.5 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all">
                          <LinkedinIcon size={18} />
                        </a>
                        <div className="w-px h-4 bg-black/[0.05]" />
                        <a href="#" className="p-2.5 rounded-xl text-muted-foreground hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/5 transition-all">
                          <TwitterIcon size={18} />
                        </a>
                        <div className="w-px h-4 bg-black/[0.05]" />
                        <a href="#" className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-black/5 transition-all">
                          <Mail size={18} />
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
