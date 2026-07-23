import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-background border-t border-border overflow-hidden pt-32 pb-8 flex flex-col">
      <div className="px-6 md:px-12 w-full max-w-[1800px] mx-auto relative z-10 flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
        <div className="max-w-md">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-4 h-4 bg-primary" />
            <h2 className="font-heading text-3xl font-bold tracking-[0.2em] uppercase">Silverwall</h2>
          </div>
          <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest leading-loose">
            Protection at the frontier of what's possible. Defending critical infrastructure and enterprise networks against next-generation vectors.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-16 lg:gap-32 font-mono text-[10px] uppercase tracking-[0.2em]">
          <div>
            <h3 className="text-primary mb-6 border-b border-primary/30 pb-2 inline-block">Locations</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li>Melbourne [HQ]</li>
              <li>Singapore [NODE]</li>
            </ul>
          </div>
          <div>
            <h3 className="text-primary mb-6 border-b border-primary/30 pb-2 inline-block">System Links</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">System Status</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Threat Intel</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Client Portal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Disclosures</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Massive Background Text Watermark */}
      <div className="w-full overflow-hidden flex justify-center items-end pointer-events-none -mb-6 md:-mb-10 lg:-mb-16 select-none">
        <h1 className="font-heading font-bold uppercase text-[18vw] leading-[0.75] tracking-tighter text-border/40 whitespace-nowrap text-center">
          SILVERWALL
        </h1>
      </div>

      <div className="px-6 md:px-12 w-full max-w-[1800px] mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50 border-t border-border/50 pt-8 mt-12">
        <p>&copy; {new Date().getFullYear()} SILVERWALL. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6 mt-6 md:mt-0">
          <span>SECURE</span>
          <span>SOVEREIGN</span>
          <span>SILENT</span>
        </div>
      </div>
    </footer>
  );
}
