"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, Home, User, Briefcase, LayoutGrid, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

const NAV_LINKS = [
  { name: "Home", href: "/", icon: Home },
  { name: "About Us", href: "/about", icon: User },
  { name: "Services", href: "/services", icon: LayoutGrid },
  { name: "Portfolio", href: "/portfolio", icon: Sparkles },
  { name: "Jobs", href: "https://nexus.vimanasa.com/jobs", icon: Briefcase },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop & Main Header Wrapper */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-700 flex justify-center px-4 md:px-8 pointer-events-none",
          isScrolled ? "py-2 md:py-4" : "py-4 md:py-6"
        )}
      >
        <div 
          className={cn(
            "w-full max-w-6xl transition-all duration-700 rounded-2xl md:rounded-full flex items-center justify-between px-6 py-3 pointer-events-auto",
            isScrolled 
              ? "bg-background shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-border" 
              : "bg-background shadow-lg border border-border/50"
          )}
        >
            <Link href="/" className="relative flex items-center gap-2 group shrink-0">
              <div className="relative">
                {/* Glow behind the logo */}
                <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative z-10">
                  <Image src="/logo.png" alt="Vimanasa Services" width={180} height={48} className="h-10 w-auto object-contain md:h-12" />
                </motion.div>
              </div>
            </Link>

            {/* Mobile Header Actions */}
            <div className="flex md:hidden items-center gap-3">
              <ThemeToggle />
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl bg-muted border border-border text-foreground shadow-sm"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>

            <nav className="hidden md:flex items-center gap-2">
              <div className="flex items-center gap-1 bg-muted rounded-full p-1.5 border border-border mr-4 shadow-inner">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        "relative px-4 lg:px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 z-10 select-none whitespace-nowrap",
                        isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <span className="relative z-20">{link.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="desktop-nav-pill"
                          className="absolute inset-0 rounded-full bg-card shadow-[0_2px_15px_rgba(0,0,0,0.05)] border border-foreground/5 -z-10"
                          transition={{ type: "spring", stiffness: 450, damping: 30 }}
                        />
                      )}
                      
                      {/* Subtle underline glow on active */}
                      {isActive && (
                        <motion.div 
                          layoutId="desktop-nav-glow"
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary blur-sm rounded-full -z-20"
                        />
                      )}
                    </Link>
                  );
                })}
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="bg-muted p-1 rounded-full flex items-center justify-center border border-border shadow-inner">
                  <ThemeToggle />
                </div>
                
                <Link href="/contact" className="relative group">
                  {/* Animated Border gradient behind button */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative flex items-center gap-2 px-5 lg:px-6 py-2.5 rounded-full bg-black text-white text-sm font-bold shadow-xl overflow-hidden whitespace-nowrap hover:bg-black"
                  >
                    <span className="relative z-10 hidden lg:inline-block"><Sparkles size={16} className="text-primary" /></span>
                    <span className="relative z-10">Get in Touch</span>
                    {/* Hover internal shine */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent z-0 pointer-events-none" />
                  </motion.div>
                </Link>
              </div>
            </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] md:hidden pt-28 px-6 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl"
          >
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center justify-between p-4 rounded-2xl border text-lg font-bold transition-all",
                      pathname === link.href 
                        ? "bg-primary/10 border-primary/20 text-primary" 
                        : "bg-foreground/5 border-transparent text-muted-foreground"
                    )}
                  >
                    {link.name}
                    <ChevronRight size={20} className={pathname === link.href ? "opacity-100" : "opacity-30"} />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.3 }}
               className="mt-12 p-8 rounded-3xl bg-primary text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Ready to start?</h3>
                <p className="text-white/80 mb-6 font-medium">Let&apos;s discuss your next big project today.</p>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="inline-block bg-white text-primary px-8 py-3 rounded-full font-bold shadow-lg">
                  Get in Touch
                </Link>
              </div>
              {/* Decorative element */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navbar */}
      <AnimatePresence>
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.2 }}
          className="md:hidden fixed bottom-6 left-4 right-4 z-[100]"
        >
          <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-2xl border border-white/20 dark:border-zinc-800 shadow-[0_10px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_50px_rgba(0,0,0,0.6)] rounded-3xl p-2 flex items-center justify-between overflow-hidden relative">
            
            {/* Shimmer background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent -translate-x-[200%] animate-[shimmer_3s_infinite] pointer-events-none" />

            {NAV_LINKS.map((link) => {
              const Icon = link.icon!;
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative flex flex-col items-center justify-center w-[20%] h-14 group outline-none"
                >
                  <motion.div
                    whileTap={{ scale: 0.85 }}
                    className={cn(
                      "relative w-full h-full flex flex-col items-center justify-center rounded-2xl transition-all duration-300 z-10",
                      isActive ? "text-primary dark:text-primary" : "text-zinc-500 dark:text-zinc-400"
                    )}
                  >
                    {/* Active Pill Background */}
                    {isActive && (
                      <motion.div
                        layoutId="mobile-nav-pill"
                        className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-2xl border border-primary/20 dark:border-primary/30"
                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                        style={{ originY: "100%" }}
                      />
                    )}

                    {/* Active Top Glow Line */}
                    {isActive && (
                      <motion.div 
                        layoutId="mobile-nav-line"
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-1 bg-primary rounded-b-full shadow-[0_0_10px_rgba(12,164,218,0.8)]"
                      />
                    )}

                    <div className="relative z-20 flex flex-col items-center gap-1">
                      <motion.div
                        animate={{ y: isActive ? -2 : 0 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon 
                          size={isActive ? 22 : 20} 
                          strokeWidth={isActive ? 2.5 : 2} 
                          className={cn("transition-all duration-300", isActive && "drop-shadow-[0_0_8px_rgba(12,164,218,0.5)]")} 
                        />
                      </motion.div>
                      <motion.span 
                        animate={{ opacity: isActive ? 1 : 0.7, scale: isActive ? 1 : 0.95 }}
                        className="text-[10px] font-bold leading-none tracking-wide whitespace-nowrap"
                      >
                        {link.name}
                      </motion.span>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
