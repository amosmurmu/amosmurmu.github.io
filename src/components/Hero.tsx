import type { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import {
  featuredLink,
  profile,
  resumeHref,
  type SocialId,
  socials,
} from "../data/content";

const icons: Record<SocialId, IconType> = {
  github: FaGithub,
  twitter: FaTwitter,
  linkedin: FaLinkedin,
  email: FaEnvelope,
};

const corners = {
  tl: [
    "left-4 top-4 h-6 w-28 border bg-sand",
    "left-4 top-16 h-6 w-6 border bg-sand/40",
  ],
  br: [
    "bottom-4 right-4 h-6 w-28 border bg-sand",
    "bottom-16 right-4 h-6 w-6 border bg-sand/40",
  ],
} as const;

function CornerSteps({ position }: { position: keyof typeof corners }) {
  return (
    <>
      {corners[position].map((cls) => (
        <span
          key={cls}
          aria-hidden="true"
          className={`absolute border-line ${cls}`}
        />
      ))}
    </>
  );
}

const linkClass =
  "inline-flex items-center gap-2 text-sm text-ink underline decoration-line decoration-1 underline-offset-4 transition-colors hover:text-accent-ink hover:decoration-accent";

export default function Hero() {
  return (
    <section id="home" className="py-10 sm:py-20">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-12">
        {/* Info: plain paper and profile info */}
        <div className="order-2 md:order-1">
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider">
            <span aria-hidden="true" className="size-1.5 bg-accent" />
            {profile.role}
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {profile.name}
          </h1>

          <p className="mt-5 max-w-prose leading-relaxed sm:text-lg">
            {profile.intro}
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
            {socials.map(({ id, label, href }) => {
              const Icon = icons[id];
              const external = !href.startsWith("mailto:");
              return (
                <li key={id}>
                  <a
                    href={href}
                    className={linkClass}
                    {...(external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    <Icon aria-hidden="true" className="size-4" />
                    {label}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href={resumeHref}
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiFileText aria-hidden="true" className="size-4" />
                Resume
              </a>
            </li>
          </ul>

          <p className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-line pt-4 text-sm">
            <span className="font-mono text-xs uppercase tracking-wider">
              Notion
            </span>
            <a
              href={featuredLink.href}
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              {featuredLink.title}
            </a>
          </p>
        </div>

        {/* Photo panel: grid background + corner blocks */}
        <div className="relative order-1 flex justify-center overflow-hidden border border-line p-12 shadow-[6px_6px_0_0_var(--color-sand)] md:order-2">
          <div
            aria-hidden="true"
            className="bg-grid pointer-events-none absolute inset-0"
          />
          <CornerSteps position="tl" />
          <CornerSteps position="br" />

          <div className="relative mb-3 mr-3">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 border border-ink/25 bg-sand"
            />
            <img
              src={profile.photo.src}
              alt={profile.photo.alt}
              width={208}
              height={208}
              className="relative size-36 border border-line bg-paper object-cover sm:size-52"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
