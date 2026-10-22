import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  className?: string;
  children: ReactNode;
}

export default function Section({
  id,
  title,
  className = "",
  children,
}: SectionProps) {
  return (
    <section id={id} className={`py-12 sm:py-14 ${className}`}>
      <h2 className="mb-8 font-mono text-xs uppercase tracking-wider">
        {title}
      </h2>
      {children}
    </section>
  );
}
