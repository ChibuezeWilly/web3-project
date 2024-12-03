import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainPage = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default MainPage;
