import { motion } from "framer-motion";

export default function Presence() {
  return (
    <section id="presence" className="relative pt-32 pb-32 bg-background overflow-hidden">
      {/* Full bleed line */}
      <div className="w-full h-[1px] bg-border mb-12" />

      <div className="px-6 md:px-12 w-full max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5">
            <div className="text-primary text-[10px] md:text-xs tracking-[0.3em] uppercase mb-8 font-mono">
              [03] Theatre of Operations
            </div>
            <h2 className="font-heading text-6xl md:text-8xl lg:text-[7.5rem] font-bold uppercase tracking-tighter leading-[0.85] mb-12">
              APAC <br className="hidden md:block"/>
              Presence
            </h2>
            <p className="text-muted-foreground mb-16 max-w-md font-sans text-sm md:text-base leading-relaxed">
              Operating from hardened facilities in Melbourne and Singapore, we provide contiguous overwatch for the APAC region. Our physical infrastructure is sovereign, strictly audited, and maintained entirely air-gapped from commercial cloud providers.
            </p>

            <div className="flex flex-col border-t border-border">
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

          <div className="lg:col-span-7 relative h-[600px] lg:h-[800px] w-full border border-border/50 bg-card/20 flex items-center justify-center overflow-hidden group mt-12 lg:mt-0">
            {/* Abstract Radar / Map Grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            
            <div className="relative w-[120%] lg:w-[150%] aspect-square border border-primary/10 rounded-full flex items-center justify-center">
              <div className="absolute w-[75%] h-[75%] border border-primary/20 rounded-full" />
              <div className="absolute w-[40%] h-[40%] border border-primary/30 rounded-full" />
              
              {/* Radar sweep */}
              <motion.div 
                className="absolute w-1/2 h-1/2 origin-bottom-right border-r border-t border-primary/50 bg-gradient-to-br from-primary/10 to-transparent"
                style={{ bottom: "50%", right: "50%" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              />

              {/* Nodes */}
              <div className="absolute top-[65%] right-[35%] w-4 h-4">
                <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-50" />
                <span className="relative block w-4 h-4 bg-primary rounded-full" />
                <span className="absolute top-6 left-6 font-mono text-xs text-primary whitespace-nowrap tracking-widest">MELBOURNE HQ</span>
              </div>
              
              <div className="absolute top-[35%] right-[60%] w-4 h-4">
                <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-50" />
                <span className="relative block w-4 h-4 bg-primary rounded-full" />
                <span className="absolute top-6 right-6 font-mono text-xs text-primary whitespace-nowrap tracking-widest">SINGAPORE NODE</span>
              </div>
            </div>
            
            {/* Scanning Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(232,64,32,0.04)_1px,transparent_1px)] bg-[length:100%_4px] pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}

function LocationCard({ city, coord, designation, status }: { city: string, coord: string, designation: string, status: string }) {
  return (
    <div className="border-b border-border py-8 group relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-end gap-6 cursor-crosshair">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
      <div className="pl-4">
        <h3 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">{city}</h3>
        <div className="text-[10px] md:text-xs text-muted-foreground flex flex-col gap-2 font-mono uppercase tracking-widest">
          <span className="flex gap-4"><span className="w-16 text-primary/50">DESIG</span> {designation}</span>
          <span className="flex gap-4"><span className="w-16 text-primary/50">COORD</span> {coord}</span>
        </div>
      </div>
      <div className="pl-4 md:pl-0">
        <span className="text-[10px] text-primary font-mono uppercase tracking-[0.3em] border border-primary/30 px-4 py-2 bg-primary/5 inline-block">
          STATUS: {status}
        </span>
      </div>
    </div>
  );
}
