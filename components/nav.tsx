"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
  { href: "/archive", label: "Archive" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/work"
      ? pathname === "/work" || pathname.startsWith("/work/")
      : pathname === href;

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav className="glass-strong flex w-full max-w-4xl items-center justify-between rounded-2xl border border-lavender-glow/15 px-4 py-2.5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.7)]">
        <Link
          href="/"
          className="group flex items-center gap-2 pl-1"
          onClick={() => setOpen(false)}
        >
          <span className="flex size-8 items-center justify-center rounded-lg border border-moss-green/40 bg-midnight-pine/60">
            <Leaf className="size-4 text-moss-green transition-colors group-hover:text-cyan-mana" />
          </span>
          <span className="font-serif text-lg font-medium tracking-wide text-foreground">
            crystalline_9
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "relative rounded-lg px-3.5 py-2 text-sm font-medium tracking-wide transition-all duration-300",
                  isActive(link.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {isActive(link.href) && (
                  <span className="absolute inset-0 rounded-lg border border-cyan-mana/30 bg-cyan-mana/5 shadow-[0_0_18px_-4px_rgba(57,213,255,0.5)]" />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-9 items-center justify-center rounded-lg border border-lavender-glow/20 text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="glass-strong animate-fade-up fixed inset-x-4 top-20 z-50 rounded-2xl border border-lavender-glow/15 p-2 md:hidden">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    isActive(link.href)
                      ? "bg-cyan-mana/5 text-foreground"
                      : "text-muted-foreground hover:bg-midnight-pine/50 hover:text-foreground",
                  )}
                >
                  {link.label}
                  <span className="font-serif text-sm text-cyan-mana">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
