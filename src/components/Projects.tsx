import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Project, projects } from "../data/content";
import { linkClass } from "../libs/styles";
import Section from "./Section";

function TechList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs">
      {items.map((item) => (
        <li key={item}> {item}</li>
      ))}
    </ul>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-2">
      <li>
        <a
          href={project.github}
          className={linkClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub aria-hidden="true" className="size-4" />
          Source
        </a>
      </li>
      {project.demo && (
        <li>
          <a
            href={project.demo}
            className={linkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink aria-hidden="true" className="size-4" />
            Live demo
          </a>
        </li>
      )}
    </ul>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" title="Projects">
      {featured && (
        <article className="border border-line p-6 shadow-[4px_4px_0_0_var(--color-sand)] sm:p-8">
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider">
            <span aria-hidden="true" className="size-1.5 bg-accent" />
            Featured
          </p>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
            {featured.title}
          </h3>
          <p className="mt-2 max-w-prose leading-relaxed">
            {featured.description}
          </p>

          {featured.highlights && (
            <ul className="mt-5 space-y-2 text-sm leading-relaxed">
              {featured.highlights.map((point) => (
                <li key={point} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-px w-3 shrink-0 bg-ink/40"
                  />
                  {point}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex flex-col gap-4 border-t border-line pt-4 sm:flex-row sm:items-center sm:justify-between">
            <TechList items={featured.techStack} />
            <ProjectLinks project={featured} />
          </div>
        </article>
      )}

      {others.length > 0 && (
        <>
          <h3 className="mb-2 mt-12 font-mono text-xs uppercase tracking-wider">
            Other projects
          </h3>
          <ul className="divide-y divide-line border-y border-line">
            {others.map((project) => (
              <li key={project.title} className="grid gap-3 py-6">
                <h4 className="font-medium text-ink">{project.title}</h4>
                <p className="max-w-prose leading-relaxed">
                  {project.description}
                </p>
                <TechList items={project.techStack} />
                <ProjectLinks project={project} />
              </li>
            ))}
          </ul>
        </>
      )}
    </Section>
  );
}
