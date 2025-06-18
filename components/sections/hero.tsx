"use client";

import { BRAND_NAME } from "@/lib/constants";
import { Variants, motion } from "framer-motion";
import { Code, Coffee, Github, Linkedin, Mail, Mouse, Zap } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    { href: "https://github.com", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:raymond@example.com", icon: Mail, label: "Email" },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="max-w-7xl mx-auto  px-6 relative z-10">
        <div className="md:hidden text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold mb-4 base-gradient-primary bg-clip-text text-transparent"
            >
              {BRAND_NAME}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300 mb-6 leading-relaxed"
            >
              Aspiring Full-Stack Developer learning to create amazing digital
              experiences
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center mb-8"
            >
              <motion.a
                href="#contact"
                className="button-gradient-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300 "
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                className="border-2 border-slate-400 hover:border-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-slate-900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-all duration-300"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    backgroundColor: "rgb(59, 130, 246)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-bold base-gradient-primary bg-clip-text text-transparent"
            >
              {BRAND_NAME}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-300 leading-relaxed"
            >
              Passionate developer on a journey to create meaningful digital
              experiences. Currently building my skills in modern web
              technologies and eager to contribute to exciting projects.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex gap-3 text-sm text-slate-400"
            >
              <div className="flex items-center gap-2">
                <Code size={16} />
                <span>Learning & Growing</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={16} />
                <span>Problem Solver</span>
              </div>
              <div className="flex items-center gap-2">
                <Coffee size={16} />
                <span>Coffee Enthusiast</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-6">
              <motion.a
                href="#contact"
                className=" px-8 py-4 rounded-lg font-semibold transition-all duration-300 button-gradient-primary"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Let&apos;s Connect
              </motion.a>
              <motion.a
                href="#projects"
                className="border-2 border-slate-400 hover:border-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-slate-900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-all duration-300"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    backgroundColor: "rgb(59, 130, 246)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <motion.div
              className="relative w-full max-w-lg mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Main illustration container */}
              <div className="relative bg-gradient-to-br from-blue-600/20 to-emerald-600/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                {/* Floating code elements - NOT gradient in original */}
                <motion.div
                  className="absolute -top-4 -left-4 bg-blue-600 rounded-lg p-3 shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Code className="text-white" size={20} />
                </motion.div>

                <motion.div
                  className="absolute -top-2 -right-6 bg-emerald-600 rounded-lg p-3 shadow-lg"
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <Zap className="text-white" size={20} />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -right-4 bg-orange-600 rounded-lg p-3 shadow-lg"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <Coffee className="text-white" size={20} />
                </motion.div>

                {/* Central illustration */}
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
                    <motion.div
                      className="h-3 base-gradient-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                    <motion.div
                      className="h-3 base-gradient-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "80%" }}
                      transition={{ duration: 2, delay: 1.5 }}
                    />
                    <motion.div
                      className="h-3 base-gradient-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "90%" }}
                      transition={{ duration: 2, delay: 2 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: [0, 15, 0],
        }}
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
