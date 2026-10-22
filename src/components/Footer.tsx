import { useEffect, useState } from "react";
import { profile } from "../data/content";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

export default function Footer() {
  const [time, setTime] = useState(() => formatter.format(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(formatter.format(new Date())), 15_000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[820px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-8 text-sm sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs">
          <span className="sr-only">Local time in India: </span>
          {time} IST
        </p>
      </div>
    </footer>
  );
}
