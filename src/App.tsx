import "./styles/App.scss";
import { Header } from "./components/header/Header";
import { Introduction } from "./sections/introduction/Introduction";

import ThemeProvider from "./context/themeContext";
import { Experience } from "./sections/experiences/Experience";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <Introduction />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
