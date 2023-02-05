import { createRoutesFromElements, Route } from "react-router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Modal from "./components/AddNewProject/Modal/Modal";
import Layout from "./components/UI/Layout/Layout";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Layout />}>
				<Route path="/add-new-project" element={<Modal />} />
			</Route>,
		),
	);
	{
		/* <div className="bg-slate-500 h-screen"></div> */
	}
	return (
		<div className="h-screen">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
