"use client";
import { BRAND_NAME } from "@/lib/constants";
import { Coffee, Laptop } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-slate-950 dark:bg-black text-white py-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <section>
        <div className="container mx-auto px-6 text-center">
          <motion.p
            className="text-slate-400 flex items-center justify-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            &copy; {new Date().getFullYear()} {BRAND_NAME} &mdash; Built with{" "}
            <motion.span whileHover={{ scale: 1.2, rotate: 10 }}>
              <Laptop size={16} />
            </motion.span>
            &amp;
            <motion.span whileHover={{ scale: 1.2, rotate: -10 }}>
              <Coffee size={16} />
            </motion.span>
          </motion.p>
        </div>
      </section>
    </motion.footer>
  );
}
