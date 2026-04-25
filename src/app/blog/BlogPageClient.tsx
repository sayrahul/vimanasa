"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of Smart Manpower Outsourcing in India",
    excerpt: "How digital compliance and strict vetting are transforming the blue-collar recruitment industry across the subcontinent.",
    date: "October 12, 2026",
    author: "Admin",
    category: "Insights",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Deploying Wi-Fi Solutions for Tier-2 Cities",
    excerpt: "Understanding the infrastructural challenges and immediate benefits of bridging the digital divide in rural areas.",
    date: "September 28, 2026",
    author: "Tech Team",
    category: "Telecommunications",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Why Your Corporate Website Needs a Dark Mode",
    excerpt: "Exploring user preference data and aesthetic benefits behind the massive dark mode trend in UI design.",
    date: "September 15, 2026",
    author: "Design Lab",
    category: "Digital Agency",
    readTime: "4 min read"
  },
  {
    id: 4,
    title: "Navigating Government Tenders: A Success Guide",
    excerpt: "Vimanasa's internal playbook on fulfilling compliance, pricing, and rapid deployment for state-level tenders.",
    date: "August 30, 2026",
    author: "Compliance Dept",
    category: "Business",
    readTime: "10 min read"
  }
];

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Our Insights</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Latest news, infrastructural thought leadership, and digital trends from the Vimanasa team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-3xl p-8 border border-border group hover:border-primary/50 transition-colors flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5"><Calendar size={16} />{post.date}</div>
                  <div className="flex items-center gap-1.5"><User size={16} />{post.author}</div>
                </div>
                <button className="w-10 h-10 rounded-full bg-card border border-border text-foreground flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
