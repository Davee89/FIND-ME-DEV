import { createContext, useState, useContext } from "react";

type ContextProps = {
	isLogged: boolean;
	setIsLogged: React.Dispatch<React.SetStateAction<boolean>> | null;
};

export const LoggedContext = createContext<ContextProps>({ isLogged: false, setIsLogged: null });

type Props = {
	children: React.ReactNode;
};

export const LoggedContextProvider = ({ children }: Props) => {
	const [isLogged, setIsLogged] = useState(false);

	return <LoggedContext.Provider value={{ isLogged, setIsLogged }}>{children}</LoggedContext.Provider>;
};
