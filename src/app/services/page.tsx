"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Server, Shield, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "manpower", label: "Manpower", icon: <Users size={18} /> },
  { id: "telecom", label: "Telecom", icon: <Server size={18} /> },
  { id: "it", label: "IT & Digital", icon: <Shield size={18} /> },
];

const CONTENT: Record<string, any> = {
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
  const [activeTab, setActiveTab] = useState("manpower");

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
                  activeTab === tab.id ? "text-white" : "text-muted-foreground hover:text-white"
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "absolute inset-0 rounded-3xl border border-border p-8 md:p-16 bg-gradient-to-br to-transparent",
                CONTENT[activeTab].color
              )}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">{CONTENT[activeTab].title}</h2>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    {CONTENT[activeTab].description}
                  </p>
                  <ul className="space-y-4">
                    {CONTENT[activeTab].features.map((feature: string, idx: number) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3 text-lg"
                      >
                        <CheckCircle2 className="text-primary shrink-0" size={24} />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="hidden md:flex justify-center items-center">
                   <div className="w-full aspect-square max-w-sm rounded-[2rem] bg-black/50 border border-white/10 flex items-center justify-center shadow-2xl relative overflow-hidden">
                     <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full isolate" />
                     {activeTab === 'manpower' && <Users size={120} className="text-white relative z-10 opacity-80" />}
                     {activeTab === 'telecom' && <Server size={120} className="text-white relative z-10 opacity-80" />}
                     {activeTab === 'it' && <Shield size={120} className="text-white relative z-10 opacity-80" />}
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
