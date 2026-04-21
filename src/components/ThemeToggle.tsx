"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-10 h-10 rounded-full bg-foreground/5 border border-foreground/10" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-muted border border-border hover:bg-accent hover:text-accent-foreground transition-all shadow-sm group overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Sun 
          className={cn(
            "h-[1.2rem] w-[1.2rem] transition-all",
            isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100 text-amber-500"
          )} 
        />
        <Moon 
          className={cn(
            "absolute h-[1.2rem] w-[1.2rem] transition-all",
            isDark ? "rotate-0 scale-100 opacity-100 text-blue-400" : "-rotate-90 scale-0 opacity-0"
          )} 
        />
      </div>
    </button>
  );
}
