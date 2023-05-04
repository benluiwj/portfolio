import "./styles/App.scss";
import { Header } from "./components/header/Header";
import { Introduction } from "./components/sections/introduction/Introduction";

import ThemeProvider from "./context/themeContext";
import { Experience } from "./components/sections/experiences/Experience";
import Projects from "./components/sections/projects/Projects";

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <Introduction />
        <Experience />
        <Projects />
      </div>
    </ThemeProvider>
  );
}

export default App;
