'use client';

import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  href,
}: FeatureCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-border bg-surface p-5 transition-all hover:border-accent hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
        <Icon size={24} />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-muted">{description}</p>

      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent">
        <span>Open Tool</span>

        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}
