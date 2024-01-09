import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProblemDemo } from "./workshops/workshop-1/problemDemo";

import "./App.css";
import { RouteNotFound } from "./routeNotFound";

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <RouteNotFound />,
		children: [{ index: true, element: <ProblemDemo /> }],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
