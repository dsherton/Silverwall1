import { motion } from "framer-motion";
import { Server, Cpu, Fingerprint, Lock, Database, Smartphone } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Post Quantum Defense",
    icon: <Lock className="w-6 h-6" />,
    description: "Cryptographic future-proofing against quantum computing threats. PQC algorithm migration, NIST-compliant key encapsulation, and quantum-resilient PKI.",
    status: "ACTIVE_MODULE",
    classification: "TS/SCI"
  },
  {
    id: "02",
    title: "OT/SCADA Security",
    icon: <Server className="w-6 h-6" />,
    description: "Protection for operational technology, industrial control systems, power grids, and water networks. Zero-trust architecture for legacy environments.",
    status: "ACTIVE_MODULE",
    classification: "CRITICAL_INFRA"
  },
  {
    id: "03",
    title: "AI Threat Detection",
    icon: <Cpu className="w-6 h-6" />,
    description: "Real-time behavioural anomaly detection, autonomous threat containment, AI Agent Security, adversarial AI simulation, and red-team automation.",
    status: "ACTIVE_MODULE",
    classification: "AUTONOMOUS"
  },
  {
    id: "04",
    title: "Air-Gapped Vaults",
    icon: <Database className="w-6 h-6" />,
    description: "Sovereign, off-network data preservation. Hardened physical vaulting, cryptographic chain-of-custody, disaster recovery for nation-state-level attack scenarios.",
    status: "ACTIVE_MODULE",
    classification: "AIR_GAPPED"
  },
  {
    id: "05",
    title: "Deep ID Biometric Auth",
    icon: <Fingerprint className="w-6 h-6" />,
    description: "Multi-modal biometric authentication, liveness detection, deepfake forensics, and executive identity assurance against AI-generated spoofing.",
    status: "ACTIVE_MODULE",
    classification: "IDENTITY"
  },
  {
    id: "06",
    title: "Mobile Protection",
    icon: <Smartphone className="w-6 h-6" />,
    description: "End-to-end mobile security for enterprise and government fleets. Secure enclaves, EMM/MDM hardening, and zero-click exploit mitigation.",
    status: "ACTIVE_MODULE",
    classification: "MOBILE_SEC"
  }
];

export default function Services() {
  return (
    <section id="services" className="relative pt-32 pb-16 bg-background">
      {/* Full bleed line */}
      <div className="w-full h-[1px] bg-border mb-12" />
      
      <div className="px-6 md:px-12 w-full max-w-[1800px] mx-auto">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <div className="text-primary text-[10px] md:text-xs tracking-[0.3em] uppercase mb-8 font-mono">
              [02] Operational Modules
            </div>
            <h2 className="font-heading text-6xl md:text-8xl lg:text-[7.5rem] font-bold uppercase tracking-tighter leading-[0.85]">
              Systems Online
            </h2>
          </div>
          
          <div className="font-heading text-8xl md:text-[12rem] font-bold text-primary leading-none tracking-tighter mix-blend-screen text-glow">
            06
          </div>
        </div>

        <div className="flex flex-col border-t border-border">
          {services.map((service, index) => (
            <ServiceModule key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceModule({ service, index }: { service: typeof services[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative border-b border-border py-12 md:py-16 hover:bg-card/50 transition-colors duration-500"
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start px-4">
        {/* Massive ID */}
        <div className="w-full md:w-32 shrink-0">
          <span className="font-heading text-6xl md:text-7xl font-bold text-muted-foreground/20 group-hover:text-primary transition-colors duration-500">
            {service.id}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col md:flex-row gap-8 md:gap-16 w-full justify-between items-start">
          <div className="w-full md:w-5/12">
             <div className="flex items-center gap-4 mb-6 text-primary">
               {service.icon}
             </div>
             <h3 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6 group-hover:text-primary transition-colors duration-300">
               {service.title}
             </h3>
             <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground flex gap-6">
               <span className="flex flex-col gap-1">
                 <span className="text-primary/50">CLASS</span>
                 {service.classification}
               </span>
               <span className="flex flex-col gap-1">
                 <span className="text-primary/50">STATUS</span>
                 <span className="text-primary">{service.status}</span>
               </span>
             </div>
          </div>
          
          <div className="w-full md:w-6/12 md:pt-14">
             <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-sans max-w-xl">
               {service.description}
             </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
