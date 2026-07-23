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
        {/* Left: Spread Logo */}
        <Link href="/" className="group flex items-center gap-3 cursor-pointer w-auto">
          <div className="w-4 h-4 bg-primary rounded-none group-hover:shadow-[0_0_15px_#E84020] transition-shadow duration-300" />
          <span className="font-heading font-bold text-xl md:text-2xl tracking-[0.2em] text-foreground uppercase">
            Silverwall
          </span>
        </Link>
        
        {/* Center: Thin Tagline / Status */}
        <div className="hidden md:flex flex-1 justify-center pt-1">
          <div className="font-mono text-[10px] text-primary/70 uppercase tracking-widest flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-primary animate-pulse rounded-full" />
            System Status: Nominal
          </div>
        </div>

        {/* Right: Stacked Editorial Nav */}
        <nav className="flex flex-col items-end gap-1 font-mono text-[10px] md:text-xs text-muted-foreground uppercase tracking-[0.3em]">
          <button onClick={() => scrollTo("premise")} className="hover:text-primary transition-colors duration-300 py-1 text-right">Premise</button>
          <button onClick={() => scrollTo("services")} className="hover:text-primary transition-colors duration-300 py-1 text-right">Modules</button>
          <button onClick={() => scrollTo("presence")} className="hover:text-primary transition-colors duration-300 py-1 text-right">Presence</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-primary transition-colors duration-300 py-1 text-primary text-right mt-4 border-b border-primary/30 hover:border-primary">Initiate Channel</button>
        </nav>
      </div>
    </motion.header>
  );
}
