import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 mix-blend-difference pointer-events-none"
    >
      <div className="flex items-start justify-between p-6 md:p-12 pointer-events-auto">
        {/* Left: Refined wordmark */}
        <Link href="/" className="group flex items-center gap-4 cursor-pointer">
          <div className="w-[2px] h-7 bg-primary group-hover:h-9 transition-all duration-300" />
          <div className="w-3 h-3 bg-primary shrink-0" />
          <div className="flex flex-col gap-0.5">
            <span className="font-heading font-bold text-sm md:text-base tracking-[0.28em] text-foreground uppercase leading-none">
              Silverwall
            </span>
            <span className="font-mono text-[8px] md:text-[9px] text-primary/70 tracking-[0.22em] uppercase leading-none">
              Cyber Defense
            </span>
          </div>
        </Link>
        
        {/* Center spacer */}
        <div className="hidden md:flex flex-1" />

        {/* Right: Stacked Editorial Nav */}
        <nav className="flex flex-col items-end gap-1 font-mono text-[10px] md:text-xs text-muted-foreground uppercase tracking-[0.3em]">
          <button onClick={() => scrollTo("premise")} className="hover:text-primary transition-colors duration-300 py-1 text-right">Sovereignty</button>
          <button onClick={() => scrollTo("services")} className="hover:text-primary transition-colors duration-300 py-1 text-right">Defense</button>
          <button onClick={() => scrollTo("presence")} className="hover:text-primary transition-colors duration-300 py-1 text-right">Operations</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-primary transition-colors duration-300 py-1 text-primary text-right mt-4 border-b border-primary/30 hover:border-primary">Request Briefing</button>
        </nav>
      </div>
    </motion.header>
  );
}
