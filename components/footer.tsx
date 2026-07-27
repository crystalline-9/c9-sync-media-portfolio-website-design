import Link from "next/link";
import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-lavender-glow/10 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <Link href="/" className="flex items-center gap-2">
          <Leaf className="size-4 text-moss-green" />
          <span className="font-serif text-base text-foreground">
            crystalline_9
          </span>
        </Link>
        <p className="text-center text-xs leading-relaxed text-muted-foreground">
          A calm digital forest where creative work exists as explorable worlds.
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link
            href="/writing"
            className="transition-colors hover:text-foreground"
          >
            Writing
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
