import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import MobileNavbar from "../components/MobileNavbar";
import {
	DynamicContextProvider,
	DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { ZeroDevSmartWalletConnectors } from "@dynamic-labs/ethereum-aa";

const locale = {
	en: {
		dyn_widget: {
			connect: "Connect Wallet",
		},
		dyn_login: {
			title: {
				all: "Select Your Wallet",
			},
		},
	},
};

const Navbar = () => {
	const activeLink = ({ isActive }) =>
		isActive
			? "font-semibold py-3 px-6 rounded-full space-x-5 hidden md:block bg-green-500 text-white"
			: "text-green-600 font-semibold py-3 px-6 rounded-full bg-white hidden md:block hover:text-gray-900";
	const [openSideBar, setOpenSideBar] = useState(false);

	return (
		<>
			<DynamicContextProvider
				settings={{
					environmentId: "b2aac55f-2670-4799-9cbe-7ad9fc0d1267",
					walletConnectors: [
						EthereumWalletConnectors,
						ZeroDevSmartWalletConnectors,
					],
				}}
				locale={locale}>
				<nav
					className="flex flex-row justify-end md:justify-evenly items-center h-20 rounded-full mx-auto z-50"
					style={{
						backgroundColor: "#01173e",
						width: "85%",
						transform: "translateY(7px)",
						
					}}>
					<NavLink
						className= {activeLink}
						to="/">
						Quests
					</NavLink>
					<NavLink
						className= {activeLink}
						to="/whitepaper">
						WhitePaper
					</NavLink>
					<NavLink
						className= {activeLink}
						to="/community">
						Community
					</NavLink>
					<DynamicWidget className="wallet-connect mr-5 " />

					<FaBars
						className="text-white text-2xl md:hidden cursor-pointer mx-8"
						onClick={() => setOpenSideBar(!openSideBar)}
					/>
				</nav>
				{openSideBar && (
					<MobileNavbar closeSideBar={() => setOpenSideBar(false)} />
				)}
			</DynamicContextProvider>
		</>
	);
};

export default Navbar;
