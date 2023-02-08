import { useContext } from "react";
import { createRoutesFromElements, Route } from "react-router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Modal from "./components/AddNewProject/Modal/Modal";
import Layout from "./components/UI/Layout/Layout";
import { LoggedContext, LoggedContextProvider } from "./context/LoggedContext";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import AllProjects from "./pages/Projects/AllProjects";
import MyProfile from "./pages/Projects/MyProfile";
import MyProjects from "./pages/Projects/MyProjects";
import NotLogged from "./pages/Projects/NotLogged";

function App() {
	const { isLogged } = useContext(LoggedContext);
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route element={<Layout />}>
				<Route path="/" element={<HomePage />} />
				<Route path="add-new-project" element={<Modal />} />
				<Route path="projects" element={<Projects />}>
					<Route path="my-profile" element={isLogged ? <MyProfile /> : <NotLogged />} />
					<Route path="my-projects" element={<MyProjects />} />
					<Route path="all-projects" element={<AllProjects />} />
				</Route>
			</Route>,
		),
	);

	return (
		<div className="h-screen bg-cover bg-home">
			<LoggedContextProvider>
				<RouterProvider router={router} />
			</LoggedContextProvider>
		</div>
	);
}

export default App;
