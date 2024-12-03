import "./styles.css";
import {
	Route,
	createRoutesFromElements,
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import MainPage from "../src/Layouts/MainPage";
import QuestPage from "../src/Pages/QuestPage";
import Whitepaper from "../src/Pages/WhitePaper";
import Community from "../src/Pages/Community";
import Quest1 from "./components/Quest1";
import Quest3 from "./components/Quest3";
import "../src/styles.css";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<MainPage />}>
			<Route index element={<QuestPage />} />
			<Route path="/quest1" element={<Quest1 />} />
			<Route path="/quest3" element={<Quest3 />} />
			<Route path="/whitepaper" element={<Whitepaper />} />
			<Route path="/community" element={<Community />} />
		</Route>
	),
	{
		future: {
			v7_relativeSplatPath: true,
		},
	}
);
const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
