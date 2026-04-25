"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// Dummy data for portfolio
const PORTFOLIO_ITEMS = [
  { id: 1, title: "NextGen E-Commerce", category: "Web Development", image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800", span: "md:col-span-2 md:row-span-2" },
  { id: 2, title: "Govt Telecom Hub", category: "Infrastructure", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800", span: "col-span-1 row-span-1" },
  { id: 3, title: "Smart City Security", category: "Manpower Deployment", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800", span: "col-span-1 row-span-1" },
  { id: 4, title: "Fintech Dashboard UI", category: "UI/UX Design", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", span: "col-span-1 row-span-2" },
  { id: 5, title: "Campus Wi-Fi Setup", category: "Telecommunications", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800", span: "col-span-1 row-span-1" },
  { id: 6, title: "Hospitality Staffing", category: "Manpower", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800", span: "col-span-1 row-span-1" },
];

export default function PortfolioPage() {
  return (
    <div className="flex flex-col w-full pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A showcase of our capabilities across manpower deployments, telecom infrastructure, and digital creations.
          </p>
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {PORTFOLIO_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden glass-card ${item.span}`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <p className="text-primary font-medium text-sm mb-2 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {item.category}
                </p>
                <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  {item.title}
                </h3>
                
                {/* Hover Action */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card text-foreground border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 delay-100">
                  <ExternalLink size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
