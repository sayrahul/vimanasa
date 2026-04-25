"use client";

import { motion } from "framer-motion";
import { Download, Building2, AlertCircle } from "lucide-react";
import Link from "next/link";

const ACTIVE_TENDERS = [
  {
    id: "VIM/TND/2026/041",
    title: "Facility Management & Security Provisioning for Government Hospital",
    location: "Mumbai District",
    deadline: "2026-11-15",
    status: "Open",
    type: "Manpower",
  },
  {
    id: "VIM/TND/2026/045",
    title: "Deployment of Campus-wide Fiber Optic Network",
    location: "Pune University Sector",
    deadline: "2026-11-20",
    status: "Open",
    type: "Telecommunications",
  },
  {
    id: "VIM/TND/2026/032",
    title: "Temporary Staffing for State Election Committees",
    location: "Maharashtra (Multiple Locations)",
    deadline: "2026-10-05",
    status: "Closed",
    type: "Manpower",
  },
];

export default function TendersPageClient() {
  return (
    <div className="w-full pb-12 pt-28 md:pt-32">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h1 className="mb-5 text-4xl font-bold tracking-tight md:text-6xl">Active Tenders</h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Explore active tender opportunities and current participation notices across manpower and telecom projects.
          </p>
        </div>

        <section className="mb-12 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <div className="flex items-center gap-3 border-b border-border px-6 py-5">
            <Building2 className="text-primary" size={24} />
            <h2 className="text-xl font-semibold">Tender Notice Board</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border text-sm text-muted-foreground">
                  <th className="px-6 py-4 font-medium">Reference ID</th>
                  <th className="px-6 py-4 font-medium">Project</th>
                  <th className="px-6 py-4 font-medium">Category</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {ACTIVE_TENDERS.map((tender, index) => (
                  <motion.tr
                    key={tender.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.07 }}
                    className="border-b border-border/60 hover:bg-muted/40"
                  >
                    <td className="px-6 py-5 font-mono text-xs text-secondary">{tender.id}</td>
                    <td className="px-6 py-5">
                      <p className="font-semibold">{tender.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {tender.location} • Deadline: {tender.deadline}
                      </p>
                    </td>
                    <td className="px-6 py-5">
                      <span className="rounded-full bg-muted px-3 py-1 text-xs">{tender.type}</span>
                    </td>
                    <td className="px-6 py-5">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          tender.status === "Open" ? "bg-green-500/15 text-green-600 dark:text-green-400" : "bg-red-500/15 text-red-600 dark:text-red-400"
                        }`}
                      >
                        {tender.status}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <button
                        disabled={tender.status === "Closed"}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary disabled:cursor-not-allowed disabled:text-muted-foreground"
                      >
                        <Download size={14} />
                        Details
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-5">
          <p className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
            <AlertCircle size={18} className="mt-0.5 shrink-0 text-secondary" />
            <span>
              If your organization is interested in consortium collaboration or subcontracting for an active tender, please{" "}
              <Link href="/contact" className="font-semibold text-primary hover:underline">
                contact our compliance desk
              </Link>{" "}
              with the exact tender ID.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
