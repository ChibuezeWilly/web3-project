// import { useState } from "react";
import Treasure from "/images/treasure.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import Web3 from "web3";
const Quest3 = () => {
    const navigate = useNavigate()
    function takeToPage() {
       navigate('/quest1')
    }

	return (
		<>
			<div
				className="questpage pr-2 pl-2 w-full h-screen relative"
				style={{ backgroundColor: "black" }}>
				<div
					className=" flex flex-col left-1/2 top-1/2 absolute rounded-2xl"
					style={{
						translate: "-50% -50%",
						width: "85%",
						maxWidth: "500px",
						backgroundColor: "#2a3a4b",
						boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
						height: "380px",
						boxSizing: "border-box",
						overflowY: "auto",
					}}>
					<img src={Treasure} alt="questimage" className="h-1/2 object-cover" />
					<ul>
						<div className="flex flex-row space-x-3 mt-5 ml-3">
							<FaCheckCircle className="text-white text-xl mt-1" />
							<li className="text-white flex-row relative text-lg cursor-pointer" onClick={takeToPage}>
								Complete Onboarding Quest
							</li>
						</div>

						<div className="flex flex-row space-x-3 mt-5 ml-3">
							<FaCheckCircle className="text-white text-xl mt-1" />
							<li className="text-white flex-row relative text-lg  cursor-pointer">
								Very LXP Holidng
							</li>
						</div>
						<div className="flex flex-row space-x-5 mt-5 ml-3 hover:cursor-pointer">
							<FaCheckCircle
								className="text-white text-xl mt-1 "
								id="checkMint"
							/>
							<li className="text-white flex-row relative text-lg cursor-pointer">
								Mint NFT
							</li>
						</div>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Quest3;
