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
    <section id="contact" className="relative py-32 px-6 md:px-12 bg-card border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
            Initiate Secure Channel
          </h2>
          <p className="font-mono text-sm text-muted-foreground max-w-lg mx-auto">
            Disclose minimal operational details. A sovereign-cleared architect will establish encrypted contact within 4 hours.
          </p>
        </div>

        <div className="border border-border bg-background p-1 font-mono">
          <div className="border-b border-border p-2 bg-muted/30 flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full border border-border" />
              <div className="w-3 h-3 rounded-full border border-border" />
              <div className="w-3 h-3 rounded-full border border-border" />
            </div>
            <span>TERMINAL // 2048-bit AES Active</span>
          </div>

          <div className="p-6 md:p-10">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-12 flex flex-col items-center text-center gap-4"
              >
                <CheckCircle2 className="w-16 h-16 text-primary" />
                <h3 className="font-heading text-2xl uppercase tracking-widest text-primary">Handshake Confirmed</h3>
                <p className="text-sm text-muted-foreground max-w-sm">
                  Your transmission has been encrypted and securely routed. Await contact.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
                >
                  Initiate New Channel
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs text-primary uppercase tracking-widest">Target Designation [Name]</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-card border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                      placeholder="ENTER NAME"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-primary uppercase tracking-widest">Comms Vector [Email]</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-card border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                      placeholder="ENTER SECURE EMAIL"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-primary uppercase tracking-widest">Organisation</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-card border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="ENTER ENTITY NAME"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-primary uppercase tracking-widest">Clearance / Threat Profile (Optional)</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-card border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="DESCRIBE VECTOR OR REQUIREMENTS"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary/10 border border-primary text-primary py-4 uppercase tracking-[0.3em] text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-bold"
                >
                  Transmit Data
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
