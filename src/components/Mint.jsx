import Web3 from "web3";
import { FaCheckCircle } from "react-icons/fa";
const Mint = () => {
	const contractAddress = "0x21030ac3F7E5f1823c378e30cFDC2369A8E72a70";
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
			inputs: [
				{
					internalType: "address",
					name: "_feeRecipient",
					type: "address",
				},
			],
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
			stateMutability: "payable",
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
			inputs: [
				{
					internalType: "uint256",
					name: "fee",
					type: "uint256",
				},
			],
			name: "setExtraFee",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "address",
					name: "_feeRecipient",
					type: "address",
				},
			],
			name: "setFeeRecipient",
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
			inputs: [],
			name: "extraFee",
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
			inputs: [],
			name: "feeRecipient",
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
				await lighthouseContract.methods.mintNFT(userAddress).send({
					from: userAddress,
					value: web3.utils.toWei("0.00051", "ether"), // Replace '0.01' with your fee
				});
				const mint = document.getElementById("checkMint");
				mint.style.color = "green";
				showMessage(
					"🎉Congratulations. Your NFT should be in your wallet soon",
					"green"
				);
			} catch (error) {
				console.error("Minting failed:", error);
				showMessage(
					"😔Minting Failed. Try again",
					"red"
				);
			}
		} else {
			alert("Please install MetaMask to use this feature.");
		}
	};
	const showMessage = (mes, color) => {
		const message = document.getElementById("message");
		message.innerText = mes;
		message.style.backgroundColor = color;

		setTimeout(() => {
			message.innerText = "";
			message.style.backgroundColor = "";
		}, 5000);
	};

	return (
		<div className="flex flex-row space-x-3 mt-5 ml-3 cursor-pointer">
			<FaCheckCircle className="text-white text-xl mt-1" id="checkMint" />
			<li className="text-white flex-row relative text-lg" onClick={mintNFT}>
				Mint NFT
			</li>
		</div>
	);
};

export default Mint;
