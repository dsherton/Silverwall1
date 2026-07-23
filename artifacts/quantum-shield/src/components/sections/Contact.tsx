import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative pt-32 pb-32 bg-background border-t border-border">
      {/* Full bleed line */}
      <div className="w-full h-[1px] bg-border mb-12" />

      <div className="px-6 md:px-12 w-full max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <div>
            <div className="text-primary text-[10px] md:text-xs tracking-[0.3em] uppercase mb-8 font-mono">
              [04] Classified Briefing
            </div>
            <h2 className="font-heading text-6xl md:text-8xl lg:text-[8rem] font-bold uppercase tracking-tighter leading-[0.85] mb-12">
              Request <br/>
              a Private <br/>
              Briefing
            </h2>
            <p className="font-mono text-xs md:text-sm text-muted-foreground max-w-md uppercase tracking-widest leading-loose border-l border-primary/30 pl-6">
              Share the minimum. A sovereign-cleared principal will establish encrypted contact within 4 hours and walk you through your current exposure.
            </p>
          </div>

          <div className="border border-border/50 bg-[#060100] p-1 font-mono relative overflow-hidden group">
            <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
            <div className="border-b border-border/50 p-4 bg-black flex items-center justify-between text-[10px] text-muted-foreground uppercase tracking-widest">
              <div className="flex gap-3">
                <div className="w-2.5 h-2.5 rounded-none bg-border/50 group-hover:bg-primary/50 transition-colors" />
                <div className="w-2.5 h-2.5 rounded-none bg-border/50 group-hover:bg-primary/50 transition-colors delay-75" />
                <div className="w-2.5 h-2.5 rounded-none bg-border/50 group-hover:bg-primary/50 transition-colors delay-150" />
              </div>
              <span className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary animate-pulse" />
                TERMINAL // 2048-bit AES Active
              </span>
            </div>

            <div className="p-8 md:p-16 relative z-10">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-16 flex flex-col items-center text-center gap-6"
                >
                  <CheckCircle2 className="w-20 h-20 text-primary" />
                  <h3 className="font-heading text-3xl uppercase tracking-widest text-primary font-bold">Briefing Requested</h3>
                  <p className="text-xs text-muted-foreground max-w-sm uppercase tracking-widest leading-loose">
                    Received and encrypted. A principal will reach out within 4 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-[10px] text-muted-foreground hover:text-primary transition-colors underline underline-offset-8 uppercase tracking-[0.2em]"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="space-y-4">
                    <label className="text-[10px] text-primary uppercase tracking-[0.3em] block">Target Designation [Name]</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-transparent border-b border-border py-3 text-sm md:text-base focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30 font-mono text-foreground"
                      placeholder="ENTER NAME"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <label className="text-[10px] text-primary uppercase tracking-[0.3em] block">Comms Vector [Email]</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-transparent border-b border-border py-3 text-sm md:text-base focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30 font-mono text-foreground"
                      placeholder="ENTER SECURE EMAIL"
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] text-primary uppercase tracking-[0.3em] block">Organisation</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-transparent border-b border-border py-3 text-sm md:text-base focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30 font-mono text-foreground"
                      placeholder="ENTER ENTITY NAME"
                    />
                  </div>

                  <div className="space-y-4 pt-6">
                    <button 
                      type="submit"
                      className="w-full bg-primary/5 border border-primary/50 text-primary py-6 uppercase tracking-[0.3em] text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-500 font-bold"
                    >
                      Send Request
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
