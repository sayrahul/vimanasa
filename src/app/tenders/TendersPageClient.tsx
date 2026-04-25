"use client";

import { motion } from "framer-motion";
import { FileText, Download, Building2, AlertCircle } from "lucide-react";
import Link from "next/link";

const ACTIVE_TENDERS = [
  {
    id: "VIM/TND/2026/041",
    title: "Facility Management & Security Provisioning for Government Hospital",
    location: "Mumbai District",
    deadline: "2026-11-15",
    status: "Open",
    type: "Manpower"
  },
  {
    id: "VIM/TND/2026/045",
    title: "Deployment of Campus-wide Fiber Optic Network",
    location: "Pune University Sector",
    deadline: "2026-11-20",
    status: "Open",
    type: "Telecommunications"
  },
  {
    id: "VIM/TND/2026/032",
    title: "Temporary Staffing for State Election Committees",
    location: "Maharashtra (Multiple Locations)",
    deadline: "2026-10-05",
    status: "Closed",
    type: "Manpower"
  }
];

export default function TendersPage() {
  return (
    <div className="flex flex-col w-full pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Active Tenders</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            View our currently active government and corporate tender participations and sub-contracting resource requirements.
          </p>
        </div>

        <div className="bg-card border border-border rounded-3xl p-6 md:p-10 mb-16">
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
            <Building2 className="text-primary" size={32} />
            <h2 className="text-2xl font-bold">Public Notice Board</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 text-muted-foreground">
                  <th className="pb-4 font-medium px-4">Tender Reference ID</th>
                  <th className="pb-4 font-medium px-4">Project Description</th>
                  <th className="pb-4 font-medium px-4">Category</th>
                  <th className="pb-4 font-medium px-4">Status</th>
                  <th className="pb-4 font-medium px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {ACTIVE_TENDERS.map((tender, idx) => (
                  <motion.tr 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    key={tender.id} 
                    className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                  >
                    <td className="py-6 px-4 font-mono text-sm text-secondary">{tender.id}</td>
                    <td className="py-6 px-4">
                      <div className="font-bold mb-1 group-hover:text-primary transition-colors">{tender.title}</div>
                      <div className="text-xs text-muted-foreground">{tender.location} • Deadline: {tender.deadline}</div>
                    </td>
                    <td className="py-6 px-4">
                      <span className="bg-white/10 px-3 py-1 rounded-full text-xs">{tender.type}</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${tender.status === 'Open' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                        {tender.status}
                      </span>
                    </td>
                    <td className="py-6 px-4">
                      <button 
                        disabled={tender.status === 'Closed'}
                        className="flex items-center gap-2 text-sm font-semibold text-primary disabled:text-muted-foreground disabled:cursor-not-allowed hover:underline"
                      >
                        <Download size={16} /> Details
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="glass-card flex items-center gap-4 p-6 rounded-2xl max-w-xl text-center">
            <AlertCircle className="text-secondary shrink-0" size={32} />
            <p className="text-sm text-muted-foreground leading-relaxed">
              If your organization is interested in sub-contracting or joining a consortium for an active tender, please <Link href="/contact" className="text-white hover:underline font-bold">Contact our Compliance Desk</Link> immediately referencing the exact Tender ID.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
