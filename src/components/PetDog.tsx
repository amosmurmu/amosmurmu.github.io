import { useEffect, useRef } from "react";
import { PET_SAY_EVENT, PetSayDetail } from "../libs/pet";

const CLICK_MESSAGES = ["Woof!", "Hello there!", "Got treats?", "Pet me more"];

const DEBUG = false;
// Set to false if your OS has "reduce motion" turned on and you still want the dog to move.
const RESPECT_REDUCED_MOTION = true;

/* Sprite sheet: 512 x 1152, a 4 x 9 grid of 128px frames (public/shiba.png). */
const SHEET = { src: "/shiba.png", width: 512, height: 1152, cell: 128 };
const SCALE = 0.75;
const SIZE = SHEET.cell * SCALE; // 64px on screen
const WALK_SPEED = 80; // px per second

/* A frame is [column, row] (like chessboard squares). */
type Frame = [col: number, row: number];
const WALK_RIGHT: Frame[] = [[0, 1], [1, 1], [2, 1], [3, 1]];
const WALK_LEFT: Frame[] = [[0, 3], [1, 3], [2, 3], [3, 3]];
const SIT: Frame = [3, 5]; // sitting, faces right (mirrored when facing left)
const PANT: Frame[] = [[0, 6], [1, 6], [2, 6]]; // sitting, tongue out
const LIE: Frame[] = [[0, 7], [1, 7]]; // lying down
const FRONT: Frame[] = [[2, 4], [3, 4]]; // facing the viewer (also used for talking)

type Mode = "walk" | "sit" | "pant" | "lie" | "front" | "talk";
const rand = (min: number, max: number) => min + Math.random() * (max - min);

/* A shiba that wanders along the bottom of the screen doing random things,
   and can show a speech bubble (see petSay in lib/pet.ts). */
export default function PetDog() {
  const laneRef = useRef<HTMLDivElement>(null);
  const dogRef = useRef<HTMLDivElement>(null);
  const spriteRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const liveRef = useRef<HTMLSpanElement>(null);
  const debugRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const lane = laneRef.current;
    const dog = dogRef.current;
    const sprite = spriteRef.current;
    const bubble = bubbleRef.current;
    const text = textRef.current;
    const live = liveRef.current;
    const debug = debugRef.current;
    if (!lane || !dog || !sprite || !bubble || !text || !live) return () => { };

    const reduceMotion =
      RESPECT_REDUCED_MOTION &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const maxX = () => Math.max(0, lane.clientWidth - SIZE);

    let x = rand(0, maxX());
    let target = x;
    let facing: "left" | "right" = "right";
    let mode: Mode = "sit";
    let modeStart = performance.now();
    let modeEnd = modeStart + rand(800, 2000);
    let last = modeStart;
    let raf = 0;
    let bubbleOn = false;
    let bubbleTimer = 0;

    if (DEBUG) {
      console.log("[PetDog] started", {
        reduceMotion,
        laneWidth: lane.clientWidth,
      });
    }

    const draw = ([col, row]: Frame, mirror = false) => {
      sprite.style.backgroundPosition = `${-col * SIZE}px ${-row * SIZE}px`;
      sprite.style.transform = mirror ? "scaleX(-1)" : "none";
    };
    const place = () => {
      dog.style.transform = `translateX(${x}px)`;
    };

    const positionBubble = () => {
      if (!bubbleOn) return;
      const w = bubble.offsetWidth;
      const left = Math.min(
        Math.max(x + SIZE / 2 - w / 2, 0),
        Math.max(0, lane.clientWidth - w),
      );
      bubble.style.left = `${left - x}px`;
      bubble.style.setProperty("--tail", `${x + SIZE / 2 - left}px`);
    };

    const setMode = (m: Mode, duration: number, now: number) => {
      mode = m;
      modeStart = now;
      modeEnd = now + duration;
      if (DEBUG) console.log("[PetDog] mode ->", m);
    };

    const startWalk = (now: number) => {
      let t = rand(0, maxX());
      for (let i = 0; i < 5 && Math.abs(t - x) < 100; i++) t = rand(0, maxX());
      target = t;
      facing = t > x ? "right" : "left";
      setMode("walk", Infinity, now);
    };

    const chooseNext = (now: number) => {
      const r = Math.random();
      if (r < 0.45) startWalk(now);
      else if (r < 0.65) setMode("sit", rand(2000, 5000), now);
      else if (r < 0.8) setMode("pant", rand(3000, 6000), now);
      else if (r < 0.93) setMode("lie", rand(6000, 12000), now);
      else setMode("front", rand(2500, 4500), now);
    };

    const render = (now: number) => {
      const t = now - modeStart;
      const mirror = facing === "left";
      switch (mode) {
        case "walk": {
          const frames = facing === "right" ? WALK_RIGHT : WALK_LEFT;
          draw(frames[Math.floor(t / 160) % frames.length]);
          break;
        }
        case "pant":
          draw(PANT[Math.floor(t / 300) % PANT.length], mirror);
          break;
        case "lie":
          draw(LIE[Math.floor(t / 1100) % LIE.length], mirror);
          break;
        case "front":
          draw(FRONT[Math.floor(t / 700) % FRONT.length]);
          break;
        case "talk":
          draw(FRONT[Math.floor(t / 180) % FRONT.length]);
          break;
        default:
          draw(SIT, mirror);
      }
    };

    /* Runs about 60 times a second: moves the dog, picks the frame, schedules itself again. */
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;

      if (x > maxX()) {
        x = maxX(); // window got narrower
        target = Math.min(target, x);
      }

      if (mode === "walk") {
        const step = WALK_SPEED * dt;
        const dist = target - x;
        if (Math.abs(dist) <= step) {
          x = target;
          setMode("sit", rand(1500, 3500), now);
        } else {
          x += Math.sign(dist) * step;
        }
      } else if (now >= modeEnd) {
        chooseNext(now);
      }

      place();
      positionBubble();
      render(now);
      if (DEBUG && debug) {
        debug.textContent = `${mode} x=${Math.round(x)} target=${Math.round(target)} facing=${facing}`;
      }
      raf = requestAnimationFrame(tick);
    };

    const hideBubble = () => {
      bubbleOn = false;
      bubble.style.opacity = "0";
      live.textContent = "";
    };

    const say = (message: string, duration = 3500) => {
      text.textContent = message;
      live.textContent = message; // announced to screen readers
      bubbleOn = true;
      bubble.style.opacity = "1";
      positionBubble();
      setMode("talk", duration, performance.now());
      window.clearTimeout(bubbleTimer);
      bubbleTimer = window.setTimeout(hideBubble, duration);
    };

    const onSay = (e: Event) => {
      const { text: message, duration } = (e as CustomEvent<PetSayDetail>).detail;
      say(message, duration);
    };

    let lastClick = -1;
    const onDogClick = () => {
      let i = Math.floor(Math.random() * CLICK_MESSAGES.length);
      if (i === lastClick) i = (i + 1) % CLICK_MESSAGES.length;
      lastClick = i;
      say(CLICK_MESSAGES[i], 2000);
    };

    dog.addEventListener("click", onDogClick);
    window.addEventListener(PET_SAY_EVENT, onSay);

    place();
    draw(SIT);
    if (!reduceMotion) raf = requestAnimationFrame(tick);
    else if (DEBUG && debug) debug.textContent = "reduced motion: dog stays still";

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(bubbleTimer);
      dog.removeEventListener("click", onDogClick);
      window.removeEventListener(PET_SAY_EVENT, onSay);
    };
  }, []);

  return (
    // Fixed to the screen, 20px above the bottom edge. Clicks pass through it.
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-40">
      <div className="mx-auto max-w-[820px] px-5 sm:px-6">
        <div ref={laneRef} id="pet" className="relative h-20">
          {/* Screen readers get the message here; the dog itself is decorative. */}
          <span ref={liveRef} role="status" className="sr-only" />

          {DEBUG && (
            <span
              ref={debugRef}
              className="absolute left-0 top-0 bg-paper font-mono text-[10px] text-ink"
            />
          )}

          <div
            ref={dogRef}
            aria-hidden="true"
            className="absolute pointer-events-auto cursor-pointer bottom-0 left-0"
            style={{ width: SIZE, height: SIZE, willChange: "transform" }}
          >
            <div
              ref={bubbleRef}
              className="absolute pointer-events-none bottom-[calc(100%-16px)] rounded-xl left-0 w-max max-w-56 border border-line bg-paper px-3 py-1.5 text-sm leading-snug text-ink opacity-0 shadow-[2px_2px_0_0_var(--color-sand)] motion-safe:transition-opacity"
            >
              <span ref={textRef} />
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-[var(--tail)] size-2 -translate-x-1/2 rotate-45 border-b border-r border-line bg-paper"
              />
            </div>

            <div
              ref={spriteRef}
              className="size-full"
              style={{
                backgroundImage: `url(${SHEET.src})`,
                backgroundSize: `${SHEET.width * SCALE}px ${SHEET.height * SCALE}px`,
                imageRendering: "pixelated",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}