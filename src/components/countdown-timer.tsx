import { useEffect, useState } from "react";
import { RELEASE_DATE, getTimeRemaining } from "@/lib/countdown";

const units = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
] as const;

function pad(n: number, width = 2) {
  return String(n).padStart(width, "0");
}

export function CountdownTimer() {
  const [t, setT] = useState(() => getTimeRemaining(RELEASE_DATE));

  useEffect(() => {
    const id = setInterval(() => setT(getTimeRemaining(RELEASE_DATE)), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
      {units.map((u) => {
        const value = t[u.key] as number;
        const display = u.key === "days" ? pad(value, 3) : pad(value);
        return (
          <div
            key={u.key}
            className="relative overflow-hidden rounded-xl border border-border/60 bg-card/60 p-4 text-center backdrop-blur-md sm:p-6"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
            <div
              className="font-display text-5xl leading-none text-foreground sm:text-7xl"
              style={{
                textShadow:
                  "0 0 18px color-mix(in oklab, var(--neon-pink) 60%, transparent)",
              }}
            >
              {display}
            </div>
            <div className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
              {u.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}