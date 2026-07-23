import { motion } from "framer-motion";

const threats = [
  {
    stat: "194",
    unit: "days",
    label: "Average Dwell Time",
    detail:
      "The median time an attacker moves undetected inside a compromised network before discovery. In critical infrastructure sectors, that figure climbs to 287 days.",
    source: "IBM Cost of a Data Breach 2024",
    delay: 0.1,
  },
  {
    stat: "5",
    unit: "days",
    label: "Time-to-Exploit",
    detail:
      "Average time from public vulnerability disclosure to active exploitation in the wild — down from 63 days in 2018. AI-assisted tooling is compressing this window further, toward hours.",
    source: "Mandiant M-Trends 2024",
    delay: 0.2,
  },
  {
    stat: "420%",
    unit: "",
    label: "Rise in OT/ICS Attacks",
    detail:
      "Attacks on operational technology — power grids, water utilities, ports, and manufacturing — have surged since 2020. APAC critical infrastructure recorded 67 significant incidents in H1 2024 alone.",
    source: "Dragos OT Cybersecurity Report 2024",
    delay: 0.3,
  },
];

export default function Premise() {
  return (
    <section id="premise" className="relative pt-32 pb-16 bg-background">
      <div className="w-full h-[1px] bg-border mb-12" />

      <div className="px-6 md:px-12 w-full max-w-[1800px] mx-auto">
        <div className="mb-24">
          <div className="text-primary text-[10px] md:text-xs tracking-[0.3em] uppercase mb-8 font-mono">
            [01] Sovereignty
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-6xl md:text-8xl lg:text-[7.5rem] font-bold uppercase tracking-tighter leading-[0.85] w-full"
          >
            The breach has already{" "}
            <br className="hidden md:block" />
            <span className="text-muted-foreground/50">happened.</span>
          </motion.h2>
        </div>

        <div className="w-full h-[1px] bg-border mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-24">
          <div className="col-span-1">
            <p className="font-mono text-xs md:text-sm text-muted-foreground leading-loose pr-4">
              The data below is not theoretical. These are documented, verified
              figures from 2024 incident reports. Most organisations are
              operating inside an active compromise they have not yet detected.
            </p>
          </div>

          <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {threats.map((t) => (
              <ThreatCard key={t.label} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ThreatCard({
  stat,
  unit,
  label,
  detail,
  source,
  delay,
}: {
  stat: string;
  unit: string;
  label: string;
  detail: string;
  source: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col group border-t border-border pt-8"
    >
      <div className="mb-4 flex items-end gap-2">
        <span className="font-heading text-6xl md:text-7xl font-bold text-primary leading-none tracking-tighter">
          {stat}
        </span>
        {unit && (
          <span className="font-heading text-2xl font-bold text-primary/60 mb-2">
            {unit}
          </span>
        )}
      </div>
      <h3 className="font-heading text-xl font-bold mb-4 tracking-tight uppercase group-hover:text-primary transition-colors duration-500">
        {label}
      </h3>
      <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
        {detail}
      </p>
      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/40 border-t border-border/50 pt-3">
        {source}
      </span>
    </motion.div>
  );
}
