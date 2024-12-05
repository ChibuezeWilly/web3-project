import "../styles.css";
import { NavLink } from "react-router-dom";
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
			? "active-navbar font-semibold md:text-xl space-x-5 text-white"
			: "text-white font-semibold text-sm md:text-xl";

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
					className="nav flex flex-row justify-evenly items-center w-full pt-2 "
					style={{
						backgroundColor: "#000",
					}}>
					<NavLink className={activeLink} to="/">
						Quests
					</NavLink>
					<NavLink className={activeLink} to="/whitepaper">
						WhitePaper
					</NavLink>
					<NavLink className={activeLink} to="/community">
						Community
					</NavLink>
					<DynamicWidget className="wallet-connect mr-5" />
				</nav>
			</DynamicContextProvider>
		</>
	);
};

export default Navbar;
