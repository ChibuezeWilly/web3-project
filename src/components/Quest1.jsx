import Treasure from "/images/treasure.jpg";
import Twitter from "../components/Twitter";
import Telegram from "../components/Telegram";
import Mint from "../components/Mint";
const Quest1 = () => {
	return (
		<>
			<div
				className="questpage pr-2 pl-2 relative"
				style={{ backgroundColor: "black", height: '100vh'}}>
				<p
					id="message"
					className="p-5 text-center text-white rounded-sm translate-y-2"></p>
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
						<Twitter />
						<Telegram />
						<Mint />
					</ul>
				</div>
			</div>
		</>
	);
};

export default Quest1;
