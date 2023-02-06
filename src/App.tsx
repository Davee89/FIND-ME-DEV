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
	{
		/* <div className="bg-slate-500 h-screen"></div> */
	}
	return (
		<div className="h-screen bg-home">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
