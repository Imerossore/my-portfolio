import { NAV_ITEMS } from "@/lib/constants";
import { cn, scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";

interface NavProps {
  isScrolled?: boolean;
}

export default function Nav({ isScrolled }: NavProps) {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {NAV_ITEMS.map((item, index) => (
        <motion.button
          key={item.href}
          onClick={() => scrollToSection(item.href)}
          className={cn(
            "relative transition-all duration-300 cursor-pointer",
            isScrolled
              ? "text-slate-800 dark:text-slate-200"
              : "text-slate-300",
            item.isContact
              ? "px-6 py-2  rounded-full shadow-lg button-gradient-primary"
              : "dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
          )}
          whileHover={{ y: -2, scale: item.isContact ? 1.05 : 1 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {item.label}
          {!item.isContact && (
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </motion.button>
      ))}
    </nav>
  );
}
