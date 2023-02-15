import { createContext, useState, useContext } from 'react';

type ContextProps = {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
};

export const DarkModeContext = createContext<ContextProps>({
  isDark: false,
  setIsDark: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const DarkModeContextProvider = ({ children }: Props) => {
  const [isDark, setIsDark] = useState(false);

  return <DarkModeContext.Provider value={{ isDark, setIsDark }}>{children}</DarkModeContext.Provider>;
};

export const useDarkModeContext = () => useContext(DarkModeContext);
