'use client';

import { Code2, Info, LifeBuoy, Scale, ShipWheel } from 'lucide-react';

export default function AboutSettings() {
  const sections = [
    {
      title: 'Application',
      icon: ShipWheel,
      content: (
        <>
          <p className="text-sm text-muted leading-6">
            Naviscope is a maritime voyage planning toolkit designed to help
            estimate arrival times, fuel consumption, voyage costs, and other
            operational metrics for shipping professionals.
          </p>
        </>
      ),
    },
    {
      title: 'Version',
      icon: Info,
      content: (
        <div className="space-y-2 text-sm">
          <p>
            <strong>Version:</strong> 1.0.0
          </p>
          <p>
            <strong>Release:</strong> June 2026
          </p>
        </div>
      ),
    },
    {
      title: 'Built With',
      icon: Code2,
      content: (
        <ul className="space-y-1 text-sm text-muted">
          <li>Next.js</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>React Hook Form</li>
          <li>Zod</li>
        </ul>
      ),
    },
    {
      title: 'Support',
      icon: LifeBuoy,
      content: (
        <p className="text-sm text-muted">
          For questions, feature requests, or bug reports, contact the
          development team.
        </p>
      ),
    },
    {
      title: 'Legal',
      icon: Scale,
      content: (
        <p className="text-sm text-muted">
          © 2026 Naviscope. All rights reserved.
        </p>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold">About</h1>

        <p className="mt-1 text-sm text-muted">
          Information about the application.
        </p>
      </div>

      {sections.map((section) => (
        <section
          key={section.title}
          className="rounded-xl border border-border p-5"
        >
          <div className="mb-4 flex items-center gap-2">
            <section.icon className="h-5 w-5 text-accent" />
            <h2 className="font-semibold">{section.title}</h2>
          </div>

          {section.content}
        </section>
      ))}
    </div>
  );
}
