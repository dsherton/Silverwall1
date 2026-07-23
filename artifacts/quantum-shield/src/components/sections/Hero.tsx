import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-background pt-32 pb-8">
      {/* Full-bleed atmospheric right-biased orb/arc */}
      <div className="absolute top-[40%] right-0 -translate-y-1/2 translate-x-1/3 w-[90vw] md:w-[70vw] aspect-square bg-primary/10 blur-[120px] md:blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[50vw] aspect-square border-[1px] border-primary/20 rounded-full pointer-events-none" />
      <div className="absolute top-[30%] right-[-20%] w-[60vw] aspect-square border-[1px] border-primary/10 rounded-full pointer-events-none" />

      {/* Central typography */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col items-center"
        >
          <h1 className="font-heading font-bold uppercase text-[15vw] leading-[0.75] tracking-tighter w-full block text-center whitespace-nowrap mix-blend-difference text-foreground">
            SILVERWALL
          </h1>
        </motion.div>
      </div>
      
      {/* Bottom anchored strip */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10 w-full px-6 md:px-12 flex justify-between items-end border-t border-border/50 pt-6"
      >
        <div className="font-mono text-[10px] md:text-xs text-primary uppercase tracking-[0.3em] max-w-[200px] md:max-w-none leading-relaxed">
          For Asia Pacific and Critical Infrastructure
        </div>
        <div className="font-mono text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest text-right max-w-xs hidden md:block leading-relaxed">
          Protection at the frontier of what's possible.
        </div>
      </motion.div>
      
      {/* HUD elements at extreme edges */}
      {mounted && (
        <>
          <div className="absolute top-[40%] left-6 md:left-8 font-mono text-[9px] text-muted-foreground/60 hidden md:flex items-center gap-4 tracking-widest uppercase" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
            <span className="w-16 h-px bg-border/50 block" />
            LAT: 37°48'51"S • LNG: 144°57'47"E • STATUS: SECURE
          </div>
          <div className="absolute top-[40%] right-6 md:right-8 font-mono text-[9px] text-muted-foreground/60 hidden md:flex items-center gap-4 tracking-widest uppercase" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
            NET: ENCRYPTED • PQC: ACTIVE • SYS: NOMINAL
            <span className="w-16 h-px bg-border/50 block" />
          </div>
        </>
      )}
    </section>
  );
}
