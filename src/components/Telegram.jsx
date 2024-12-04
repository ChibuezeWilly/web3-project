import { FaCheckCircle } from "react-icons/fa";
const Telegram = () => {
	return (
		<div className="flex flex-row space-x-3 mt-5 ml-3">
			<FaCheckCircle className="text-white text-xl mt-1 self-start" />
			<li className="text-white flex-row text-lg">Twitter Task</li>
			{/* <button*
			className="text-white bg-green-900 rounded-md"
			style={{ padding: "5px 40px",}}>Verify</button*/}
		</div>
	);
};

export default Telegram;
