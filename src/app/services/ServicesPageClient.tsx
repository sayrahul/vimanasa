"use client";

import { useState } from "react";
import type { ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Server, Shield, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const TABS: Array<{ id: ServiceTab; label: string; icon: ReactElement }> = [
  { id: "manpower", label: "Manpower", icon: <Users size={18} /> },
  { id: "telecom", label: "Telecom", icon: <Server size={18} /> },
  { id: "it", label: "IT & Digital", icon: <Shield size={18} /> },
];

type ServiceTab = "manpower" | "telecom" | "it";

type ServiceContent = {
  title: string;
  description: string;
  features: string[];
  color: string;
};

const CONTENT: Record<ServiceTab, ServiceContent> = {
  manpower: {
    title: "Comprehensive Manpower Outsourcing",
    description: "Providing skilled, semi-skilled, and unskilled workforce solutions tailored to government and private sector needs.",
    features: [
      "Security Personnel & Guarding",
      "Facility Management & Housekeeping",
      "Skilled Technical Staffing",
      "Temporary & Permanent Placements",
      "Compliance & Payroll Management"
    ],
    color: "from-blue-600/20"
  },
  telecom: {
    title: "Advanced Telecommunications",
    description: "Robust infrastructure deployment, maintenance, and project management for wired and wireless networks.",
    features: [
      "Wi-Fi Installation & Setup",
      "Fiber Optic Network Deployment",
      "Tower Installation & Maintenance",
      "Project Management Outsourcing",
      "24/7 Network Support"
    ],
    color: "from-cyan-600/20"
  },
  it: {
    title: "IT & Digital Agency Services",
    description: "Developing custom tailored software, beautiful web interfaces, and high-conversion digital marketing campaigns.",
    features: [
      "Custom Software Development",
      "Premium Web Design & UI/UX",
      "E-commerce Platforms",
      "Social Media Management",
      "Search Engine Optimization (SEO)"
    ],
    color: "from-indigo-600/20"
  }
};

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<ServiceTab>("manpower");

  return (
    <div className="flex flex-col w-full pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Our Services</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Discover our comprehensive divisions tailored to support your business operations and digital growth.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-2 bg-card border border-border rounded-2xl">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-colors",
                  activeTab === tab.id ? "text-white" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 bg-primary rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {tab.icon}
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={cn(
                "w-full rounded-[2.5rem] border border-border p-8 md:p-16 bg-gradient-to-br to-background/50 backdrop-blur-sm",
                CONTENT[activeTab].color
              )}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{CONTENT[activeTab].title}</h2>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                    {CONTENT[activeTab].description}
                  </p>
                  <ul className="space-y-4">
                    {CONTENT[activeTab].features.map((feature: string, idx: number) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 + 0.2 }}
                        className="flex items-center gap-4 text-base md:text-lg text-foreground/80"
                      >
                        <div className="p-1 rounded-full bg-primary/10">
                          <CheckCircle2 className="text-primary shrink-0" size={20} />
                        </div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="order-1 lg:order-2 flex justify-center items-center">
                   <div className="w-full aspect-square max-w-[320px] md:max-w-sm rounded-[2.5rem] bg-muted/20 border border-border/50 flex items-center justify-center shadow-2xl relative overflow-hidden group">
                     <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/20 transition-colors duration-500" />
                     <motion.div
                       key={activeTab}
                       initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                       animate={{ opacity: 1, scale: 1, rotate: 0 }}
                       transition={{ type: "spring", stiffness: 100, damping: 15 }}
                       className="relative z-10"
                     >
                       {activeTab === 'manpower' && <Users size={120} className="text-foreground/70" />}
                       {activeTab === 'telecom' && <Server size={120} className="text-foreground/70" />}
                       {activeTab === 'it' && <Shield size={120} className="text-foreground/70" />}
                     </motion.div>
                   </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
