// import { useState } from "react";
import Treasure from "/images/treasure.jpg";
import { FaCheckCircle } from "react-icons/fa";
import Web3 from "web3";
const Quest1 = () => {
	const contractAddress = "0x27Af39d16A69e2D3E7d07184198352D5f2CF1268";
	const contractABI = [
		{
			inputs: [
				{
					internalType: "address",
					name: "to",
					type: "address",
				},
				{
					internalType: "uint256",
					name: "tokenId",
					type: "uint256",
				},
			],
			name: "approve",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [],
			stateMutability: "nonpayable",
			type: "constructor",
		},
		{
			inputs: [
				{
					internalType: "address",
					name: "sender",
					type: "address",
				},
				{
					internalType: "uint256",
					name: "tokenId",
					type: "uint256",
				},
				{
					internalType: "address",
					name: "owner",
					type: "address",
				},
			],
			name: "ERC721IncorrectOwner",
			type: "error",
		},
		{
			inputs: [
				{
					internalType: "address",
					name: "operator",
					type: "address",
				},
				{
					internalType: "uint256",
					name: "tokenId",
					type: "uint256",
				},
			],
			name: "ERC721InsufficientApproval",
			type: "error",
		},
		{
			inputs: [
				{
					internalType: "address",
					name: "approver",
					type: "address",
				},
			],
			name: "ERC721InvalidApprover",
			type: "error",
		},
		{
			inputs: [
				{
					internalType: "address",
					name: "operator",
					type: "address",
				},
			],
			name: "ERC721InvalidOperator",
			type: "error",
		},
		{
			inputs: [
				{
					internalType: "address",
					name: "owner",
					type: "address",
				},
			],
			name: "ERC721InvalidOwner",
			type: "error",
		},
		{
			inputs: [
				{
					internalType: "address",
					name: "receiver",
					type: "address",
				},
			],
			name: "ERC721InvalidReceiver",
			type: "error",
		},
		{
			inputs: [
				{
					internalType: "address",
					name: "sender",
					type: "address",
				},
			],
			name: "ERC721InvalidSender",
			type: "error",
		},
		{
			inputs: [
				{
					internalType: "uint256",
					name: "tokenId",
					type: "uint256",
				},
			],
			name: "ERC721NonexistentToken",
			type: "error",
		},
		{
			inputs: [
				{
					internalType: "address",
					name: "owner",
					type: "address",
				},
			],
			name: "OwnableInvalidOwner",
			type: "error",
		},
		{
			inputs: [
				{
					internalType: "address",
					name: "account",
					type: "address",
				},
			],
			name: "OwnableUnauthorizedAccount",
			type: "error",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: "address",
					name: "owner",
					type: "address",
				},
				{
					indexed: true,
					internalType: "address",
					name: "approved",
					type: "address",
				},
				{
					indexed: true,
					internalType: "uint256",
					name: "tokenId",
					type: "uint256",
				},
			],
			name: "Approval",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: "address",
					name: "owner",
					type: "address",
				},
				{
					indexed: true,
					internalType: "address",
					name: "operator",
					type: "address",
				},
				{
					indexed: false,
					internalType: "bool",
					name: "approved",
					type: "bool",
				},
			],
			name: "ApprovalForAll",
			type: "event",
		},
		{
			inputs: [
				{
					internalType: "address",
					name: "recipient",
					type: "address",
				},
			],
			name: "mintNFT",
			outputs: [
				{
					internalType: "uint256",
					name: "",
					type: "uint256",
				},
			],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: "address",
					name: "previousOwner",
					type: "address",
				},
				{
					indexed: true,
					internalType: "address",
					name: "newOwner",
					type: "address",
				},
			],
			name: "OwnershipTransferred",
			type: "event",
		},
		{
			inputs: [],
			name: "renounceOwnership",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "address",
					name: "from",
					type: "address",
				},
				{
					internalType: "address",
					name: "to",
					type: "address",
				},
				{
					internalType: "uint256",
					name: "tokenId",
					type: "uint256",
				},
			],
			name: "safeTransferFrom",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "address",
					name: "from",
					type: "address",
				},
				{
					internalType: "address",
					name: "to",
					type: "address",
				},
				{
					internalType: "uint256",
					name: "tokenId",
					type: "uint256",
				},
				{
					internalType: "bytes",
					name: "data",
					type: "bytes",
				},
			],
			name: "safeTransferFrom",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "address",
					name: "operator",
					type: "address",
				},
				{
					internalType: "bool",
					name: "approved",
					type: "bool",
				},
			],
			name: "setApprovalForAll",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: "address",
					name: "from",
					type: "address",
				},
				{
					indexed: true,
					internalType: "address",
					name: "to",
					type: "address",
				},
				{
					indexed: true,
					internalType: "uint256",
					name: "tokenId",
					type: "uint256",
				},
			],
			name: "Transfer",
			type: "event",
		},
		{
			inputs: [
				{
					internalType: "address",
					name: "from",
					type: "address",
				},
				{
					internalType: "address",
					name: "to",
					type: "address",
				},
				{
					internalType: "uint256",
					name: "tokenId",
					type: "uint256",
				},
			],
			name: "transferFrom",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "address",
					name: "newOwner",
					type: "address",
				},
			],
			name: "transferOwnership",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "address",
					name: "owner",
					type: "address",
				},
			],
			name: "balanceOf",
			outputs: [
				{
					internalType: "uint256",
					name: "",
					type: "uint256",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "uint256",
					name: "tokenId",
					type: "uint256",
				},
			],
			name: "getApproved",
			outputs: [
				{
					internalType: "address",
					name: "",
					type: "address",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "address",
					name: "owner",
					type: "address",
				},
				{
					internalType: "address",
					name: "operator",
					type: "address",
				},
			],
			name: "isApprovedForAll",
			outputs: [
				{
					internalType: "bool",
					name: "",
					type: "bool",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "name",
			outputs: [
				{
					internalType: "string",
					name: "",
					type: "string",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "owner",
			outputs: [
				{
					internalType: "address",
					name: "",
					type: "address",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "uint256",
					name: "tokenId",
					type: "uint256",
				},
			],
			name: "ownerOf",
			outputs: [
				{
					internalType: "address",
					name: "",
					type: "address",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "bytes4",
					name: "interfaceId",
					type: "bytes4",
				},
			],
			name: "supportsInterface",
			outputs: [
				{
					internalType: "bool",
					name: "",
					type: "bool",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "symbol",
			outputs: [
				{
					internalType: "string",
					name: "",
					type: "string",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "tokenCounter",
			outputs: [
				{
					internalType: "uint256",
					name: "",
					type: "uint256",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "uint256",
					name: "tokenId",
					type: "uint256",
				},
			],
			name: "tokenURI",
			outputs: [
				{
					internalType: "string",
					name: "",
					type: "string",
				},
			],
			stateMutability: "view",
			type: "function",
		},
	];
	const mintNFT = async () => {
		const mint = document.getElementById("checkMint");
		if (typeof window.ethereum !== "undefined") {
			const web3 = new Web3(window.ethereum);
			await window.ethereum.request({ method: "eth_requestAccounts" });
			const accounts = await web3.eth.getAccounts();
			const userAddress = accounts[0];

			const lighthouseContract = new web3.eth.Contract(
				contractABI,
				contractAddress
			);
			// Log available contract methods to debug the issue
			console.log(lighthouseContract.methods);

			try {
				await lighthouseContract.methods
					.mintNFT(userAddress)
					.send({ from: userAddress });
				mint.style.color = "green";
				mint.style.textDecoration = "underline";
				showMessage("NFT Minted successfully", "green");
			} catch (error) {
				console.error("Minting failed:", error);
				showMessage("Minting failed. Try again", "red");
			}
		} else {
			alert("Please install MetaMask to use this feature.");
		}
	};
	const showMessage = (mes, color) => {
		const message = document.createElement("p");
		message.innerText = mes;
		message.style.backgroundColor = color;
		message.style.height = "14px";
		message.style.marginTop = "20px";

		setTimeout(() => {
			message.innerText = "";
			message.style.backgroundColor = "";
		}, 3000);
	};

	return (
		<>
			<div
				className="questpage pr-2 pl-2 relative"
				style={{ backgroundColor: "black", height: "100vh" }}>
				<div
					className="flex flex-col absolute rounded-2xl"
					style={{
						left: "50%",
						top: "50%",
						translate: "-50% -50%",
						width: "85%",
						maxWidth: "500px",
						backgroundColor: "#2a3a4b",
						boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
						height: "380px",
						boxSizing: "border-box",
						overflowY: "auto",
					}}>
					<img src={Treasure} alt="" className="h-1/2 object-cover" />
					<ul>
						<div className="flex flex-row space-x-3 mt-5 ml-3">
							<FaCheckCircle className="text-white text-xl mt-1 self-start" />
							<li className="text-white flex-row text-lg">Twitter Task</li>
							{/* <button
								className="text-white bg-green-900 rounded-md"
								style={{ padding: "5px 40px",
								}}>
								Verify
							</button> */}
						</div>
						<div className="flex flex-row space-x-3 mt-5 ml-3">
							<FaCheckCircle
								className="text-white text-xl mt-1"
								id="checkMint"
							/>
							<li
								className="text-white flex-row relative text-lg"
								onClick={mintNFT}>
								Mint NFT
							</li>
						</div>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Quest1;
