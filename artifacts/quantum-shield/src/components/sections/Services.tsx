import { motion } from "framer-motion";
import { Server, Cpu, Fingerprint, Lock, Database } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Post Quantum Defense",
    icon: <Lock className="w-8 h-8" />,
    description: "Cryptographic future-proofing against quantum computing threats. PQC algorithm migration, NIST-compliant key encapsulation, and quantum-resilient PKI.",
    status: "ACTIVE_MODULE",
    classification: "TS/SCI"
  },
  {
    id: "02",
    title: "OT/SCADA Security",
    icon: <Server className="w-8 h-8" />,
    description: "Protection for operational technology, industrial control systems, power grids, and water networks. Zero-trust architecture for legacy environments.",
    status: "ACTIVE_MODULE",
    classification: "CRITICAL_INFRA"
  },
  {
    id: "03",
    title: "AI Threat Detection & Response",
    icon: <Cpu className="w-8 h-8" />,
    description: "Real-time behavioural anomaly detection, autonomous threat containment, adversarial AI simulation, and red-team automation.",
    status: "ACTIVE_MODULE",
    classification: "AUTONOMOUS"
  },
  {
    id: "04",
    title: "Physical Air-Gapped Vaults",
    icon: <Database className="w-8 h-8" />,
    description: "Sovereign, off-network data preservation. Hardened physical vaulting, cryptographic chain-of-custody, disaster recovery for nation-state-level attack scenarios.",
    status: "ACTIVE_MODULE",
    classification: "AIR_GAPPED"
  },
  {
    id: "05",
    title: "Deep ID Biometric Auth",
    icon: <Fingerprint className="w-8 h-8" />,
    description: "Multi-modal biometric authentication, liveness detection, deepfake forensics, and executive identity assurance against AI-generated spoofing.",
    status: "ACTIVE_MODULE",
    classification: "IDENTITY"
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 bg-secondary/30 border-t border-border overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border/50" />
      <div className="absolute right-6 md:right-12 top-0 bottom-0 w-px bg-border/50" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tighter">
            Operational Modules
          </h2>
          <div className="mt-4 flex items-center gap-4 font-mono text-xs text-primary uppercase tracking-widest">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            5 Systems Online
          </div>
        </div>

        <div className="space-y-6">
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
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative border border-border bg-card p-6 md:p-8 hover:border-primary/50 transition-colors duration-500"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-primary scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500" />
      
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
        {/* Dossier Meta */}
        <div className="w-full md:w-48 shrink-0 font-mono text-xs flex flex-col gap-2">
          <div className="flex justify-between items-center text-muted-foreground border-b border-border pb-2">
            <span>MODULE</span>
            <span className="text-foreground">[{service.id}]</span>
          </div>
          <div className="flex justify-between items-center text-muted-foreground border-b border-border pb-2">
            <span>STATUS</span>
            <span className="text-primary">{service.status}</span>
          </div>
          <div className="flex justify-between items-center text-muted-foreground border-b border-border pb-2">
            <span>CLASS</span>
            <span className="text-foreground">{service.classification}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="w-16 h-16 shrink-0 bg-background border border-border flex items-center justify-center text-primary group-hover:bg-primary/5 transition-colors">
            {service.icon}
          </div>
          <div>
            <h3 className="font-heading text-2xl font-semibold uppercase tracking-tight mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl font-sans">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
