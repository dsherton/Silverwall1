import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-grid-pattern pt-20">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex flex-col items-center"
        >
          <div className="px-4 py-1 mb-8 border border-primary/30 bg-primary/5 text-primary font-mono text-xs tracking-[0.3em] uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary animate-pulse" />
            System Initialised // Clearance Level 5
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter uppercase leading-[0.85] text-foreground mix-blend-difference">
            <span className="block text-glow">Silver</span>
            <span className="block text-muted-foreground/40">wall</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mt-8 font-mono text-sm md:text-base text-muted-foreground max-w-2xl uppercase tracking-widest leading-relaxed"
        >
          Protection at the frontier of what's possible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 font-mono text-xs text-muted-foreground flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-primary/50 to-transparent" />
          <span className="uppercase tracking-widest">Scroll to Access</span>
        </motion.div>
      </div>
      
      {/* HUD elements */}
      {mounted && (
        <>
          <div className="absolute top-32 left-6 font-mono text-[10px] text-primary/40 hidden md:block">
            LAT: 37°48'51"S <br/>
            LNG: 144°57'47"E <br/>
            STATUS: SECURE
          </div>
          <div className="absolute bottom-12 right-6 font-mono text-[10px] text-primary/40 hidden md:block text-right">
            NET: ENCRYPTED <br/>
            PQC: ACTIVE <br/>
            SYS: NOMINAL
          </div>
        </>
      )}
    </section>
  );
}
