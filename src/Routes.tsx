import type { RouteObject } from "react-router-dom";
import App from "./App";

const Routes: RouteObject[] = [
	{
		element: <App />,
		children: [
			{
				path: "/",
				lazy: async () => {
					const { default: Component } = await import("pages/Home");
					return {
						Component,
					};
				},
			},
		],
	},
];

export default Routes;
