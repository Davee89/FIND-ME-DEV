import { createRoutesFromElements, Route } from "react-router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Modal from "./components/AddNewProject/Modal/Modal";
import Layout from "./components/UI/Layout/Layout";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Layout />}>
				<Route path="/add-new-project" element={<Modal />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/projects" element={<Projects />} />
			</Route>,
		),
	);

	return (
		<div className="h-min-screen bg-cover bg-home">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
