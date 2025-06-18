import {
  Award,
  Code,
  Coffee,
  Github,
  Heart,
  Lightbulb,
  Linkedin,
  Mail,
  Palette,
  Rocket,
  Users,
  Zap,
} from "lucide-react";

export const WERSITE_NAME = "MY PERSONAL PORTFOLIO";
export const SITE_DESCRIPTION =
  "A portfolio website to showcase my projects and skills.";
export const BRAND_NAME = "Raymond Dev";

// Navigation items for the website
export const NAV_ITEMS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact", isContact: true },
];

//Hero Section
export const SOCIAL_LINKS = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:raymond@example.com", icon: Mail, label: "Email" },
];

export const HERO_TRAITS = [
  { icon: Code, text: "Learning & Growing" },
  { icon: Zap, text: "Problem Solver" },
  { icon: Coffee, text: "Coffee Enthusiast" },
];

// About Section
export const FEATURES = [
  {
    icon: Code,
    title: "Clean Code",
    description:
      "Writing readable, maintainable code that follows best practices and industry standards",
    color: "bg-blue-600",
  },
  {
    icon: Palette,
    title: "Learning Design",
    description:
      "Developing an eye for good design and user-friendly interfaces",
    color: "bg-emerald-600",
  },
  {
    icon: Rocket,
    title: "Performance Focus",
    description:
      "Learning to optimize applications for better speed and user experience",
    color: "bg-orange-600",
  },
  {
    icon: Users,
    title: "Team Player",
    description:
      "Collaborating effectively and learning from experienced developers",
    color: "bg-purple-600",
  },
];

export const STATS = [
  { number: "20+", label: "Projects Built", icon: Award },
  { number: "2+", label: "Years Learning", icon: Coffee },
  { number: "100%", label: "Passion Driven", icon: Heart },
  { number: "24/7", label: "Always Learning", icon: Lightbulb },
];

// Projects Section
export const PROJECTS = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and Stripe integration.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative project management tool with real-time updates and team features.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather application with location-based forecasts and charts.",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["Vue.js", "TypeScript", "Chart.js", "API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Blog Platform",
    description:
      "A modern blogging platform with markdown support and user authentication.",
    image:
      "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Auth0"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects and skills.",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "Tailwind", "Framer Motion", "Vite"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Chat Application",
    description: "Real-time chat application with rooms and message history.",
    image:
      "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "Socket.io", "Express", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];
