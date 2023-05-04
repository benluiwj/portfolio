import "./styles/App.scss";
import { Header } from "./components/header/Header";
import { Introduction } from "./components/sections/introduction/Introduction";

import ThemeProvider from "./context/themeContext";
import { Experience } from "./components/sections/experiences/Experience";

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <Introduction />
        <Experience />
      </div>
    </ThemeProvider>
  );
}

export default App;
