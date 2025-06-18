"use client";

import { BRAND_NAME } from "@/lib/constants";
import { motion } from "framer-motion";
import { Code, Coffee, Github, Linkedin, Mail, Mouse, Zap } from "lucide-react";

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:raymond@example.com", icon: Mail, label: "Email" },
];

const floatingIcons = [
  {
    icon: Code,
    color: "bg-blue-600",
    position: "-top-4 -left-4",
    delay: 0,
    duration: 3,
  },
  {
    icon: Zap,
    color: "bg-emerald-600",
    position: "-top-2 -right-6",
    delay: 1,
    duration: 4,
  },
  {
    icon: Coffee,
    color: "bg-orange-600",
    position: "-bottom-4 -right-4",
    delay: 0.5,
    duration: 3.5,
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="md:hidden text-center space-y-6">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold base-gradient-primary bg-clip-text text-transparent"
          >
            {BRAND_NAME}
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-slate-300 leading-relaxed"
          >
            Aspiring Full-Stack Developer learning to create amazing digital
            experiences
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 justify-center"
          >
            <motion.a
              href="#contact"
              className="button-gradient-primary px-6 py-3 rounded-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="border-2 border-slate-400 hover:border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex gap-4 justify-center"
          >
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800 hover:bg-slate-700"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  backgroundColor: "rgb(59, 130, 246)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold base-gradient-primary bg-clip-text text-transparent"
            >
              {BRAND_NAME}
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-slate-300 leading-relaxed"
            >
              Passionate developer on a journey to create meaningful digital
              experiences. Currently building my skills in modern web
              technologies.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-3 text-sm text-slate-400"
            >
              {[
                { icon: Code, text: "Learning & Growing" },
                { icon: Zap, text: "Problem Solver" },
                { icon: Coffee, text: "Coffee Enthusiast" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon size={16} />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex gap-6"
            >
              <motion.a
                href="#contact"
                className="px-8 py-4 rounded-lg font-semibold button-gradient-primary"
                whileHover={{ scale: 1.05 }}
              >
                Let's Connect
              </motion.a>
              <motion.a
                href="#projects"
                className="border-2 border-slate-400 hover:border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900"
                whileHover={{ scale: 1.05 }}
              >
                View My Work
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex gap-6"
            >
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-800 hover:bg-slate-700"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    backgroundColor: "rgb(59, 130, 246)",
                  }}
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative bg-gradient-to-br from-blue-600/20 to-emerald-600/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              {floatingIcons.map((item, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${item.position} ${item.color} rounded-lg p-3 shadow-lg`}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: item.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: item.delay,
                  }}
                >
                  <item.icon className="text-white" size={20} />
                </motion.div>
              ))}

              <div className="text-center space-y-6">
                <motion.div
                  className="w-32 h-32 base-gradient-primary rounded-full mx-auto flex items-center justify-center shadow-2xl"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Code className="text-white" size={48} />
                </motion.div>

                <div className="space-y-3">
                  {[100, 80, 90].map((width, i) => (
                    <motion.div
                      key={i}
                      className="h-3 base-gradient-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${width}%` }}
                      transition={{ duration: 2, delay: 1 + i * 0.5 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform-translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 15, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.5 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2 },
        }}
      >
        <Mouse size={32} className="text-slate-400" />
      </motion.div>
    </section>
  );
}
