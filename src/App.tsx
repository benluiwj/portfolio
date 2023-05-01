import "./App.scss";
import { Header } from "./components/header/Header";
import { Introduction } from "./components/sections/Introduction";

import ThemeProvider from "./context/themeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Introduction />
      </div>
    </ThemeProvider>
  );
}

export default App;
