import React, { useEffect, useState } from "react";

export default function App() {
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const base = import.meta.env.VITE_API_BASE_URL ?? "";
    const url = base ? `${base}/api/healthz` : "/api/healthz";
    fetch(url)
      .then((r) => r.json())
      .then((d) => setStatus(d.status))
      .catch(() => setStatus("error"));
  }, []);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: 20 }}>
      <h1>Silverwall1 — Demo</h1>
      <p>API status: {status ?? "loading..."}</p>
      <p>
        Frontend dev server runs on 5173 (vite). API server runs on 3000 by
        default in the modified config.
      </p>
    </div>
  );
}
