import { motion } from "framer-motion";

export default function Presence() {
  return (
    <section id="presence" className="relative py-32 px-6 md:px-12 bg-background border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <div className="text-primary text-xs tracking-widest uppercase mb-4 flex items-center gap-2 font-mono">
            <span className="w-8 h-px bg-primary" />
            Theatre of Operations
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
            Asia Pacific Presence
          </h2>
          <p className="text-muted-foreground mb-12 max-w-md font-sans text-sm leading-relaxed">
            Operating from hardened facilities in Melbourne and Singapore, we provide contiguous overwatch for the APAC region. Our physical infrastructure is sovereign, strictly audited, and maintained entirely air-gapped from commercial cloud providers.
          </p>

          <div className="space-y-8 font-mono">
            <LocationCard 
              city="Melbourne"
              coord="37°48'51.0&quot;S 144°57'47.0&quot;E"
              designation="APAC HQ / Vault Alpha"
              status="SECURE"
            />
            <LocationCard 
              city="Singapore"
              coord="1°17'24.0&quot;N 103°51'00.0&quot;E"
              designation="Intelligence Node / Vault Beta"
              status="SECURE"
            />
          </div>
        </div>

        <div className="relative h-[500px] w-full border border-border bg-card/30 flex items-center justify-center overflow-hidden">
          {/* Abstract Radar / Map Grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-50" />
          
          <div className="relative w-[300px] h-[300px] border border-primary/20 rounded-full flex items-center justify-center">
            <div className="absolute w-[200px] h-[200px] border border-primary/30 rounded-full" />
            <div className="absolute w-[100px] h-[100px] border border-primary/40 rounded-full" />
            
            {/* Radar sweep */}
            <motion.div 
              className="absolute w-1/2 h-1/2 origin-bottom-right border-r border-t border-primary/50 bg-gradient-to-br from-primary/20 to-transparent"
              style={{ bottom: "50%", right: "50%" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 4, ease: "linear", repeat: Infinity }}
            />

            {/* Nodes */}
            <div className="absolute top-[60%] right-[30%] w-3 h-3">
              <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
              <span className="relative block w-3 h-3 bg-primary rounded-full" />
              <span className="absolute top-4 left-4 font-mono text-[10px] text-primary whitespace-nowrap">MEL</span>
            </div>
            
            <div className="absolute top-[30%] right-[60%] w-3 h-3">
              <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
              <span className="relative block w-3 h-3 bg-primary rounded-full" />
              <span className="absolute top-4 right-4 font-mono text-[10px] text-primary whitespace-nowrap">SIN</span>
            </div>
          </div>
          
          {/* Scanning Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.05)_1px,transparent_1px)] bg-[length:100%_4px] pointer-events-none" />
        </div>

      </div>
    </section>
  );
}

function LocationCard({ city, coord, designation, status }: { city: string, coord: string, designation: string, status: string }) {
  return (
    <div className="border border-border p-4 bg-background relative overflow-hidden group">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-border group-hover:bg-primary transition-colors" />
      <div className="flex justify-between items-start mb-2 pl-2">
        <h3 className="text-xl font-heading font-bold uppercase tracking-widest">{city}</h3>
        <span className="text-xs text-primary px-2 py-1 bg-primary/10 border border-primary/20">
          {status}
        </span>
      </div>
      <div className="pl-2 text-xs text-muted-foreground flex flex-col gap-1">
        <span>COORD: {coord}</span>
        <span>DESIG: {designation}</span>
      </div>
    </div>
  );
}
