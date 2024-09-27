import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Aboutme from "./components/AboutMe/aboutme";
import Projects from './components/Projects/project';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <Aboutme/>
        <Projects/>
        <Contact />
    
    </div>
  );
}

export default App;
