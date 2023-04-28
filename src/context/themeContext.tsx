import {
  ReactElement,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

// ----------------------------------------------------------------------

type Props = {
  children?: React.ReactNode;
};

type ThemeContextType = {
  theme: string;
  handleThemeChange: (_: void) => void;
};

const defaultThemeContext = {
  theme: "",
  handleThemeChange: (_: void) => {},
};

// ----------------------------------------------------------------------

export default function ThemeProvider({
  children,
}: Props): ReactElement<React.ReactNode> {
  const [theme, setTheme] = useState<string>("light");

  const handleThemeChange = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const value = useMemo(
    () => ({ theme, handleThemeChange }),
    [theme, handleThemeChange]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const ThemeContext =
  createContext<ThemeContextType>(defaultThemeContext);

export function useThemeContext() {
  return useContext(ThemeContext);
}
