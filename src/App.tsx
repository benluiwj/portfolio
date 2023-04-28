import "./App.scss";
import { Navbar } from "./components/navbar/Navbar";
import ThemeProvider from "./context/themeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
