import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <Resume/>
      <Contact/>
    </div>
  );
}

export default App;
