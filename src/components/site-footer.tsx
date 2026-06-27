import { Github, Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/40 bg-background/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-xs text-muted-foreground">
          Unofficial fan-made countdown. Not affiliated with or endorsed by any
          game publisher. © {new Date().getFullYear()} Chetan Kumar.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Chetan19988"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-md border border-border/60 p-2 text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/askchetan/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-md border border-border/60 p-2 text-muted-foreground transition-colors hover:border-accent/60 hover:text-accent"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}