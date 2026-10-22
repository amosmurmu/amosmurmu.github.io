import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-paper focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main" className="mx-auto max-w-[820px] px-5 sm:px-6">
        <Hero />
        <Experience />
      </main>
    </>
  );
}

export default App;
