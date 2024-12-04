import { FaCheckCircle } from "react-icons/fa";
const Twitter = () => {
	return (
		<div className="flex flex-row space-x-3 mt-5 ml-3">
			<FaCheckCircle className="text-white text-xl mt-1" />
			<li className="text-white flex-row relative text-lg">
				<a href="http://" target="_blank" rel="noopener noreferrer">
					Twitter Task
				</a>
			</li>
		</div>
	);
};

export default Twitter;
