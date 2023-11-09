import Home from "./components/Home";
import {Navbar} from "./components/Navbar";
import About from "./components/about";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
    <Navbar />
     <Home />
    <About />
    <Skills />
    <Work />
    <Contact />
    </div>
  );
}

export default App;
