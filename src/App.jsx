import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Home from "./components/Home";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Fun } from "./components/Fun";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Fun />
      <Home />
      {/* <About /> */}
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
