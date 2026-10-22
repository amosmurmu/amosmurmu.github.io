import type { ReactNode } from "react";
import { profile } from "../data/content";
import { inlineLinkClass } from "../libs/styles";
import Section from "./Section";

function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className={inlineLinkClass}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

function Row({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <li className="grid gap-1 py-5 first:pt-0 last:pb-0 sm:gap-8">
      {/* <p className="font-mono text-xs uppercase tracking-wider sm:pt-1"> */}
      {/*   {label} */}
      {/* </p> */}
      <p className="leading-relaxed">{children}</p>
    </li>
  );
}

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      className="min-h-[calc(100dvh-8.5rem)]"
    >
      <ul className="divide-y divide-line">
        <Row>
          Say hello at{" "}
          <a href={`mailto:${profile.email}`} className={inlineLinkClass}>
            {profile.email}
          </a>
        </Row>

        <Row>
          My creative content is on{" "}
          <A href="https://instagram.com/amos.lens">Instagram @amos.lens</A>
        </Row>

        <Row>
          I sometimes play on{" "}
          <A href="https://www.chess.com/member/rebulbul">chess.com</A> and{" "}
          <A href="https://lichess.org/@/amosmurmu">lichess.org</A>
        </Row>

        <Row>
          I also do competitive programming on{" "}
          <A href="https://codeforces.com/profile/amosmurmu">codeforces.com</A>{" "}
          and <A href="https://atcoder.jp/users/lancelot_007">atcoder.jp</A>
        </Row>
      </ul>
    </Section>
  );
}
