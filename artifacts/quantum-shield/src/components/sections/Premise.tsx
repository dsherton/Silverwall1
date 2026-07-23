import { motion } from "framer-motion";
import { Shield, Lock, Activity } from "lucide-react";

export default function Premise() {
  return (
    <section id="premise" className="relative py-32 px-6 md:px-12 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          <div className="lg:col-span-4 font-mono">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="sticky top-32"
            >
              <div className="text-primary text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-primary" />
                The Premise
              </div>
              <h2 className="font-heading text-4xl font-semibold uppercase tracking-tight mb-6">
                Threats have outpaced conventional defences.
              </h2>
              <div className="space-y-4 text-sm text-muted-foreground border-l border-primary/30 pl-4">
                <p>
                  Most organisations are fighting tomorrow's wars with yesterday's weapons.
                </p>
                <p>
                  Quantum computing will render RSA/ECC obsolete. Adversarial AI is automating zero-day discovery. 
                  The perimeter no longer exists.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <div className="p-8 border border-border bg-card/50 flex flex-col justify-center items-center text-center">
              <span className="font-mono text-2xl text-primary font-bold tracking-widest mb-2">0 ZERO</span>
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Trust Assumption</span>
            </div>
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
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="p-8 border border-border bg-card group hover:border-primary/50 transition-colors duration-500"
    >
      <div className="mb-6 bg-background border border-border w-12 h-12 flex items-center justify-center group-hover:border-primary/50 transition-colors duration-500">
        {icon}
      </div>
      <h3 className="font-heading text-xl font-medium mb-3 tracking-wide">{title}</h3>
      <p className="font-sans text-sm text-muted-foreground leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}
