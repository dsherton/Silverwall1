import { motion } from "framer-motion";
import { Shield, Lock, Activity } from "lucide-react";

export default function Premise() {
  return (
    <section id="premise" className="relative pt-32 pb-16 bg-background">
      {/* Full bleed top horizontal rule */}
      <div className="w-full h-[1px] bg-border mb-12" />
      
      <div className="px-6 md:px-12 w-full max-w-[1800px] mx-auto">
        <div className="mb-24">
          <div className="text-primary text-[10px] md:text-xs tracking-[0.3em] uppercase mb-8 font-mono">
            [01] The Premise
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-6xl md:text-8xl lg:text-[7.5rem] font-bold uppercase tracking-tighter leading-[0.85] w-full"
          >
            Threats have outpaced <br className="hidden md:block" />
            <span className="text-muted-foreground/50">conventional defences.</span>
          </motion.h2>
        </div>

        {/* Full bleed separator */}
        <div className="w-full h-[1px] bg-border mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
          <div className="col-span-1">
             <p className="font-mono text-xs md:text-sm text-muted-foreground leading-loose pr-4">
               Most organisations are fighting tomorrow's wars with yesterday's weapons. Quantum computing will render RSA/ECC obsolete. Adversarial AI is automating zero-day discovery. The perimeter no longer exists.
             </p>
          </div>
          
          <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <Card 
              icon={<Shield className="w-6 h-6 text-primary" />}
              title="State-Level Actors"
              desc="Nation-states employ resources that overwhelm commercial firewalls. We build architectures that assume breach and contain horizontally."
              delay={0.1}
            />
            <Card 
              icon={<Lock className="w-6 h-6 text-primary" />}
              title="Shor's Algorithm"
              desc="The quantum decryption threat is real. Cryptographic relevance is expiring. We migrate critical PKI to NIST-approved post-quantum algorithms today."
              delay={0.2}
            />
            <Card 
              icon={<Activity className="w-6 h-6 text-primary" />}
              title="Adversarial ML"
              desc="Attackers use AI to bypass heuristic detection. We deploy autonomous counter-AI that reacts in milliseconds, not minutes."
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col group"
    >
      <div className="mb-8 w-12 h-12 flex items-center justify-center border border-border bg-card/50 group-hover:border-primary/50 transition-colors duration-500">
        {icon}
      </div>
      <h3 className="font-heading text-3xl font-bold mb-4 tracking-tight uppercase group-hover:text-primary transition-colors duration-500">{title}</h3>
      <p className="font-sans text-sm text-muted-foreground leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}
