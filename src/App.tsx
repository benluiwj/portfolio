import "./App.scss";
import { Header } from "./components/header/Header";
import ThemeProvider from "./context/themeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
