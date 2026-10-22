import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-line py-12 sm:py-16">
      <h2 className="mb-8 font-mono text-xs uppercase tracking-wider">
        {title}
      </h2>
      {children}
    </section>
  );
}
