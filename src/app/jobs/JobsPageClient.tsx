"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, Clock, Search, ChevronRight, X, Sparkles, Building, Users } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const JOB_LISTINGS = [
  { id: 1, title: "Senior Network Engineer", category: "Telecom", location: "Pune, MH", type: "Full-Time", experience: "5-7 Years", description: "Design, implement, and maintain advanced telecommunications networks. Ensure network uptime and robust security protocols for our enterprise clients." },
  { id: 2, title: "Security Guard (Tender)", category: "Manpower", location: "Mumbai, MH", type: "Contract", experience: "1-2 Years", description: "Responsible for securing premises, personnel, and equipment. Involves patrolling properties, monitoring surveillance equipment, and inspecting buildings." },
  { id: 3, title: "Frontend Next.js Developer", category: "IT Agency", location: "Remote", type: "Full-Time", experience: "3+ Years", description: "Build state-of-the-art web applications using Next.js and Tailwind CSS. Focus on performance, animations, and premium UI/UX implementations." },
  { id: 4, title: "Project Manager (Tower Installs)", category: "Telecom", location: "Nashik, MH", type: "Full-Time", experience: "8+ Years", description: "Oversee the lifecycle of telecom tower installations. Coordinate between field teams, regulatory bodies, and clients to ensure timely delivery." },
  { id: 5, title: "Housekeeping Staff", category: "Manpower", location: "Parbhani, MH", type: "Contract", experience: "0-1 Years", description: "Perform cleaning and maintenance duties to keep client facilities operating smoothly and cleanly." },
  { id: 6, title: "Digital Marketing Specialist", category: "IT Agency", location: "Remote", type: "Full-Time", experience: "2-4 Years", description: "Develop and execute digital marketing campaigns. Optimize SEO, manage ad spend, and increase overall brand visibility for our clients." },
];

export default function JobsPage() {
  const [selectedJob, setSelectedJob] = useState<typeof JOB_LISTINGS[0] | null>(null);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden pb-32">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 -left-64 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }} 
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-40 -right-64 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="relative container mx-auto px-6 max-w-7xl pt-32 md:pt-40">
        
        {/* Dynamic Hero Section */}
        <div className="text-center mb-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20 backdrop-blur-md shadow-[0_0_20px_rgba(0,183,255,0.15)]"
          >
            <Sparkles size={16} />
            <span>Join the Vimanasa Team</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/80 to-foreground/50"
          >
            Shape the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Future.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            We're building a network of exceptional talent across Telecom, Manpower, and deep-tech IT. Discover your next big leap with us.
          </motion.p>
        </div>

        {/* Job List - Centered and Streamlined */}
        <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col gap-6">
          <AnimatePresence mode="popLayout">
            {JOB_LISTINGS.map((job, idx) => (
              <motion.div
                layout
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => setSelectedJob(job)}
                className="group cursor-pointer relative bg-card/40 backdrop-blur-lg border border-border p-6 md:p-10 rounded-[2rem] hover:bg-muted/50 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/5"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                        {job.category}
                      </span>
                      <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold group-hover:text-primary transition-colors duration-300 mb-3 tracking-tight">{job.title}</h3>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{job.description}</p>
                    
                    <div className="flex flex-wrap items-center gap-5 text-sm font-semibold text-foreground/80">
                      <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-xl">
                        <MapPin size={18} className="text-primary" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-xl">
                        <Briefcase size={18} className="text-secondary" />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex items-center justify-center w-20 h-20 rounded-3xl bg-muted border border-border group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0 shadow-inner group-hover:shadow-primary/20">
                    <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Application Modal Overlay */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
            onClick={() => setSelectedJob(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-card border border-border shadow-2xl rounded-[2rem] p-8 md:p-12 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Decor */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <button 
                onClick={() => setSelectedJob(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors text-foreground"
              >
                <X size={20} />
              </button>

              <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                <Sparkles size={14} /> Open Position
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{selectedJob.title}</h2>
              <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-muted-foreground mb-8">
                <span className="flex items-center gap-1"><MapPin size={16}/> {selectedJob.location}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Briefcase size={16}/> {selectedJob.experience}</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-secondary"><Clock size={16}/> {selectedJob.type}</span>
              </div>

              <div className="space-y-6 mb-10">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Role Overview</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedJob.description}</p>
                </div>
                <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-6">
                  <h4 className="text-primary font-semibold mb-2">Why join Vimanasa?</h4>
                  <ul className="space-y-2 text-sm text-foreground/80 list-disc list-inside">
                    <li>Competitive salary and performance bonuses</li>
                    <li>Comprehensive healthcare and insurance plans</li>
                    <li>Dynamic, fast-paced corporate environment</li>
                    <li>Opportunities for rapid career advancement</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(12,164,218,0.3)] hover:shadow-[0_0_40px_rgba(12,164,218,0.5)] active:scale-95">
                  Apply for this role
                </button>
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="py-4 px-8 rounded-xl bg-background border border-border font-bold text-lg hover:bg-foreground/5 transition-all text-foreground active:scale-95"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
