"use client";

import { BRAND_NAME } from "@/lib/constants";
import { ModeToggle } from "./mode-toggle";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Nav from "./nav";
import MobileMenuButton from "./mobile-menu-btn";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const initials = BRAND_NAME.split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "transition-all duration-300 fixed left-0 right-0 top-0 z-50",
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6 ">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl font-bold dark:text-white base-gradient-primary bg-clip-text text-transparent"
        >
          {initials}
        </motion.h1>
        <div className="flex items-center ">
          <Nav isScrolled={isScrolled} />
          <ModeToggle />
          <MobileMenuButton isScrolled={isScrolled} />
        </div>
      </div>
    </motion.header>
  );
}
