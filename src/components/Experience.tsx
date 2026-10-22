import {
  experiences,
  type Experience as ExperienceItem,
} from "../data/content";
import Section from "./Section";

const kindLabel: Record<ExperienceItem["kind"], string> = {
  "open-source": "Open source",
  work: "Work",
};

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="divide-y divide-line">
        {experiences.map((e) => (
          <li
            key={e.id}
            className="grid gap-3 py-8 first:pt-0 last:pb-0 sm:grid-cols-[10rem_1fr] sm:gap-8"
          >
            <div className="font-mono text-xs">
              <p className="text-ink">{e.period}</p>
              <p className="mt-1 uppercase tracking-wider">
                {kindLabel[e.kind]}
              </p>
            </div>

            <div>
              <h3 className="font-medium text-ink">
                {e.role} <span className="font-normal text-body">at</span>{" "}
                {e.company}
              </h3>
              <p className="mt-2 max-w-prose leading-relaxed">
                {e.description}
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs">
                {e.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
