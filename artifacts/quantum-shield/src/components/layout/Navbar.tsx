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
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 mix-blend-difference"
    >
      <div className="flex items-center justify-between px-6 py-6 md:px-12">
        <Link href="/" className="group flex items-center gap-2 cursor-pointer">
          <div className="w-3 h-3 bg-primary rounded-none group-hover:shadow-[0_0_10px_#00E5FF] transition-shadow duration-300" />
          <span className="font-heading font-bold text-sm tracking-[0.2em] text-foreground uppercase">
            Nexus Quantum
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs text-muted-foreground uppercase tracking-widest">
          <button onClick={() => scrollTo("premise")} className="hover:text-primary transition-colors duration-300">Premise</button>
          <button onClick={() => scrollTo("services")} className="hover:text-primary transition-colors duration-300">Modules</button>
          <button onClick={() => scrollTo("presence")} className="hover:text-primary transition-colors duration-300">Presence</button>
          <button 
            onClick={() => scrollTo("contact")} 
            className="text-primary border border-primary/30 px-4 py-2 hover:bg-primary/10 transition-colors duration-300"
          >
            Initiate Channel
          </button>
        </nav>
      </div>
      
      {/* Top progress bar / scanner line */}
      <div className="w-full h-px bg-border/50 relative">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-primary"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>
    </motion.header>
  );
}
