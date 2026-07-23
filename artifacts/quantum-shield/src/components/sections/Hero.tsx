import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-background pt-32 pb-8">
      {/* Mercor-style full-bleed atmospheric orb — positioned right */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/hero-orb.jpg"
          alt=""
          aria-hidden="true"
          className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[75vw] md:w-[60vw] aspect-square object-cover rounded-full opacity-90 mix-blend-screen select-none"
          draggable={false}
        />
        {/* Soft vignette so left text area reads cleanly */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_0%_50%,hsl(0_65%_3%)_30%,transparent_80%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_100%,hsl(0_65%_3%)_0%,transparent_80%)]" />
      </div>

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
