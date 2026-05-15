"use client";

import { motion } from "framer-motion";
import { Eye, Target, Sparkles, ShieldCheck, Users, Zap, Award, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

const VALUES = [
  {
    icon: <Zap className="h-5 w-5 text-primary" />,
    title: "Innovation",
    description: "We continuously modernize services and delivery systems to solve real business problems faster.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-primary" />,
    title: "Reliability",
    description: "Our clients trust us for transparent communication, compliance, and dependable execution.",
  },
  {
    icon: <Award className="h-5 w-5 text-primary" />,
    title: "Excellence",
    description: "We maintain strict quality standards across manpower operations, telecom projects, and digital work.",
  },
  {
    icon: <Users className="h-5 w-5 text-primary" />,
    title: "Empowerment",
    description: "We create meaningful growth for clients, teams, and communities through responsible partnerships.",
  },
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
    image: null,
    initial: "SK",
    color: "from-red-600 to-rose-700",
    bio: "Architecting robust financial frameworks and guiding the firm’s long-term investments and sustainable growth."
  },
  {
    name: "Mr. Rajudas Rathod",
    role: "Chief Executive Officer (CEO) & Technical Director",
    image: null,
    initial: "RR",
    color: "from-orange-500 to-rose-500",
    bio: "Translating ambitious visions into operational excellence and steering the company’s expansion across all verticals."
  },
  {
    name: "Adv. Gopichand Poul",
    role: "General Manager – Legal & Liaison",
    image: "/images/team/gopichand.jpg",
    initial: "GP",
    color: "from-blue-500 to-indigo-500",
    bio: "Safeguarding corporate integrity, mitigating risks, and ensuring seamless regulatory compliance across all business operations."
  },
  {
    name: "Mr. Rahul Jadhav",
    role: "Chief Technology Officer (CTO) & Senior Technical Manager",
    image: "/images/team/rahul.jpg",
    initial: "RJ",
    color: "from-purple-500 to-pink-500",
    bio: "Architecting the innovative IT and telecommunication infrastructures that power our modern enterprise."
  },
  {
    name: "Mr. Prabhu Rathod",
    role: "Head of Corporate Affairs",
    image: null,
    initial: "PR",
    color: "from-zinc-500 to-slate-500",
    bio: "Building bridges between Vimanasa, the community, and key institutions to foster a strong, reputable corporate footprint."
  },
];

export default function AboutPageClient() {
  return (
    <div className="w-full pb-16 pt-28 md:pt-32">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles size={14} />
            Who We Are
          </div>
          <h1 className="mb-5 text-4xl font-bold tracking-tight md:text-6xl">
            Building growth through <span className="text-primary">people and technology</span>
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Vimanasa Services is a multidisciplinary service company delivering manpower outsourcing, telecom infrastructure, and digital solutions for private and government organizations.
          </p>
        </motion.div>

        <section className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.article initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
              <Eye size={24} />
            </div>
            <h2 className="mb-3 text-2xl font-bold">Our Vision</h2>
            <p className="leading-relaxed text-muted-foreground">
              To become one of India&apos;s most trusted service partners by combining operational discipline, high standards, and client-first delivery.
            </p>
          </motion.article>
          <motion.article initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Target size={24} />
            </div>
            <h2 className="mb-3 text-2xl font-bold">Our Mission</h2>
            <p className="leading-relaxed text-muted-foreground">
              To empower organizations with dependable workforce solutions, modern telecom systems, and digital platforms that deliver measurable business outcomes.
            </p>
          </motion.article>
        </section>

        <section className="mb-20">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Core Values</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">Our culture is built around accountability, capability, and long-term trust.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">{value.icon}</div>
                <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="relative py-40 mb-24 overflow-hidden rounded-[2.5rem] bg-card/60 dark:bg-card/40 border border-border">
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
                className="inline-block px-6 py-2 mb-8 text-[11px] font-black tracking-[0.4em] uppercase border border-border rounded-full bg-background/90 shadow-sm text-primary"
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
                  <div className="relative pt-32 pb-12 px-8 rounded-[4rem] bg-background/90 border border-border shadow-[0_4px_12px_-8px_rgba(0,0,0,0.12)] dark:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.45)] group-hover:shadow-[0_8px_18px_-10px_rgba(0,0,0,0.14)] dark:group-hover:shadow-[0_24px_52px_-24px_rgba(0,0,0,0.55)] transition-all duration-1000 flex flex-col items-center">
                    <div className="absolute inset-0 overflow-hidden rounded-[4rem] pointer-events-none">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(var(--primary-rgb, 12, 164, 218), 0.06), transparent 40%)`
                        } as CSSProperties}
                      />

                      <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/15 dark:via-white/10 to-transparent -translate-x-full group-hover:animate-[gloss_2s_ease-in-out_infinite] rotate-45" />
                    </div>

                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 z-30">
                      <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-1000 rounded-full" />

                      <motion.div
                        whileHover={{ y: -12, rotateY: 8, rotateX: -5 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className={cn(
                          "relative w-full h-full rounded-[3.5rem] overflow-hidden shadow-2xl border-[6px] border-background transition-all duration-700",
                          !member.image && `bg-gradient-to-br ${member.color} flex items-center justify-center`
                        )}
                      >
                        {member.image ? (
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" />
                        ) : (
                          <span className="text-6xl font-black text-white/90 drop-shadow-xl">{member.initial}</span>
                        )}
                      </motion.div>

                      <div className="absolute -inset-4 border-2 border-primary/10 rounded-[4rem] animate-[spin_10s_linear_infinite] pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-700 scale-90 group-hover:scale-110" />
                      <div className="absolute -inset-8 border border-secondary/5 rounded-[5rem] animate-[spin_15s_linear_reverse_infinite] pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-700 scale-90 group-hover:scale-110" />
                    </div>

                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="text-center mt-6 w-full relative z-10"
                    >
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-500 tracking-tight">
                        {member.name}
                      </h3>

                      <div className="inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest mb-8 border border-primary/10 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        {member.role.split("&")[0]}
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-8 px-4 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                        {member.bio}
                      </p>

                      <div className="flex items-center justify-center gap-3 p-2 rounded-2xl bg-muted/50 border border-border group-hover:bg-background group-hover:shadow-xl transition-all duration-700 group-hover:translate-y-[-4px]">
                        <a href="#" className="p-2.5 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all">
                          <LinkedinIcon size={18} />
                        </a>
                        <div className="w-px h-4 bg-border" />
                        <a href="#" className="p-2.5 rounded-xl text-muted-foreground hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/5 transition-all">
                          <TwitterIcon size={18} />
                        </a>
                        <div className="w-px h-4 bg-border" />
                        <a href="#" className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all">
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
