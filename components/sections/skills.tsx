"use client";
import { Variants, motion } from "framer-motion";
import {
  Code,
  Palette,
  Server,
  Database,
  Globe,
  Smartphone,
  GitBranch,
  Cloud,
  Settings,
  Layers,
  Terminal,
  Zap,
} from "lucide-react";

// Add these interfaces
interface Skill {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface CategorySectionProps {
  title: string;
  description: string;
  skills: Skill[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
  iconColor: string;
}

interface SkillCardProps {
  skill: Skill;
  index: number;
}

// Update arrays with proper typing
const frontendSkills: Skill[] = [
  { name: "React/Next.js", icon: Code },
  { name: "Vue.js/Nuxt.js", icon: Layers },
  { name: "TypeScript", icon: Terminal },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Framer Motion", icon: Zap },
  { name: "React Native", icon: Smartphone },
];

const backendSkills: Skill[] = [
  { name: "Node.js/Express", icon: Server },
  { name: "Python/Django", icon: Code },
  { name: "PostgreSQL", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "Redis", icon: Server },
  { name: "GraphQL", icon: Globe },
];

const otherSkills: Skill[] = [
  { name: "Docker", icon: Settings },
  { name: "AWS/Vercel", icon: Cloud },
  { name: "Git/GitHub", icon: GitBranch },
  { name: "Jest/Testing", icon: Code },
  { name: "CI/CD", icon: Settings },
  { name: "Figma/Design", icon: Palette },
];

export default function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.05,
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

  const skillVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Fix color classes with static approach
  const getIconColorClass = (color: string): string => {
    const colorMap = {
      blue: "bg-blue-600",
      emerald: "bg-emerald-600",
      orange: "bg-orange-600",
    };
    return colorMap[color as keyof typeof colorMap] || "bg-blue-600";
  };

  const SkillCard = ({ skill }: SkillCardProps) => (
    <motion.div
      variants={skillVariants}
      className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group border border-slate-200 dark:border-slate-700"
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex flex-col items-center text-center space-y-3">
        <motion.div
          className="p-3 bg-blue-600 rounded-lg shadow-md group-hover:shadow-lg"
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <skill.icon size={20} className="text-white" />
        </motion.div>

        <motion.h3
          className="font-semibold text-sm text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {skill.name}
        </motion.h3>
      </div>
    </motion.div>
  );

  const CategorySection = ({
    title,
    description,
    skills,
    icon: Icon,
    iconColor,
  }: CategorySectionProps) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-16"
    >
      <motion.div variants={itemVariants} className="text-center mb-8">
        <motion.div
          className={`w-16 h-16 ${getIconColorClass(
            iconColor
          )} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <Icon size={32} className="text-white" />
        </motion.div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400">{description}</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Technologies I&apos;m learning and working with to build amazing
            digital experiences
          </p>
        </motion.div>

        <div className="space-y-16">
          <CategorySection
            title="Frontend Development"
            description="User Interface & Experience"
            skills={frontendSkills}
            icon={Code}
            iconColor="blue"
          />

          <CategorySection
            title="Backend Development"
            description="Server & Database Technologies"
            skills={backendSkills}
            icon={Server}
            iconColor="emerald"
          />

          <CategorySection
            title="DevOps & Tools"
            description="Development & Deployment Tools"
            skills={otherSkills}
            icon={Settings}
            iconColor="orange"
          />
        </div>
      </div>
    </section>
  );
}
