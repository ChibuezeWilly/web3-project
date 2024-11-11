import "../styles.css";
import { useState, useEffect } from "react";

const Profile = () => {
	const [openProfile, setOpenProfile] = useState(false);

	useEffect(() => {
		const checkClickOuside = (e) => {
			if (
				!e.target.closest("#profileMenu") && 
				!e.target.closest("#Profile")) {
				setOpenProfile(false)
			}
		};
		document.addEventListener("click", checkClickOuside);

		return () => {
			document.removeEventListener("click", checkClickOuside);
		};
	}, []);
	return (
		<div className="connect">
			<i
				className="fa-solid fa-user mx-7 bg-white text-green-500 rounded-full navigate "
				id="Profile"
				onClick={() => setOpenProfile(!openProfile)}></i>

			<div
				id="profileMenu"
				className="wallet-options"
				style={{ display: `${openProfile ? "block" : "none"}`}}>
				<div style={{ color: "green" }}>
					Wallet Address:
					<span id="walletAddress" style={{ color: "black" }}></span>
				</div>
				<div style={{ color: "green" }}>
					Number of Referrals: <span id="referralCount">0</span>
				</div>
				{/* <div id="profileDiv"></div> */}
				<button
					id="disconnectButton"
					className="navigate border-none text-green-500 hover:text-white hover:bg-green-500 py-3 px-6 mt-3 rounded-full ">
					Disconnect
				</button>
			</div>
		</div>
	);
};

export default Profile;
// If connected show profile menu.
// If not connected show connect button.
