import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-background border-t border-border pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-4 bg-primary" />
            <h2 className="font-heading text-2xl font-bold tracking-widest uppercase">Nexus Quantum Security</h2>
          </div>
          <p className="text-muted-foreground font-mono text-sm max-w-md">
            Protection at the frontier of what's possible. 
            Defending critical infrastructure and enterprise networks against next-generation vectors.
          </p>
        </div>

        <div>
          <h3 className="font-mono text-xs text-muted-foreground mb-4 tracking-widest uppercase">Locations</h3>
          <ul className="space-y-2 font-mono text-sm">
            <li className="flex justify-between border-b border-border/50 pb-1">
              <span>MELBOURNE</span>
              <span className="text-primary">ACTIVE</span>
            </li>
            <li className="flex justify-between border-b border-border/50 pb-1">
              <span>SINGAPORE</span>
              <span className="text-primary">ACTIVE</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs text-muted-foreground mb-4 tracking-widest uppercase">System Links</h3>
          <ul className="space-y-2 font-mono text-sm">
            <li><a href="#" className="hover:text-primary transition-colors duration-200">System Status</a></li>
            <li><a href="#" className="hover:text-primary transition-colors duration-200">Threat Intelligence Feed</a></li>
            <li><a href="#" className="hover:text-primary transition-colors duration-200">Client Portal</a></li>
            <li><a href="#" className="hover:text-primary transition-colors duration-200">Cryptographic Disclosures</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between font-mono text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} NEXUS QUANTUM SECURITY. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <span>SECURE.</span>
          <span>SOVEREIGN.</span>
          <span>SILENT.</span>
        </div>
      </div>
    </footer>
  );
}
