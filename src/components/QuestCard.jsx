import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const QuestCard = ({ quest, openQuestCardId, setOpenQuestCardId }) => {
	const isOpen = openQuestCardId === quest.id;

	const toggleQuestCard = () => {
		if (isOpen) {
			setOpenQuestCardId(false);
		} else {
			setOpenQuestCardId(quest.id);
		}
	};
// first useState
	// for navigation
	const navigate = useNavigate()

	// function to call naviage
	const toOpenPage = () => {
		navigate(quest.link)
	}
	// useState
    useEffect(() => {
			const closeOnOutsideClick = (e) => {
				if (
					!e.target.closest(".quest-card") &&
					!e.target.closest(".quest-item")
				) {
					setOpenQuestCardId(false);
				}
			};

			// Listen for click events
			document.addEventListener("click", closeOnOutsideClick);
			// Cleanup the event listener on component unmount
			return () => {
				document.removeEventListener("click", closeOnOutsideClick);
			};
		}, []);
		// useEffect
		const [isShaking, setStopShaking] = useState(false)
		// useState
	return (
		<div
			className={`quest-item ${quest.className} ${
				isShaking ? "shaking" : setStopShaking
			}`}
			id={quest.id}>
			<img src={quest.image} onClick={toggleQuestCard} />
			<div
				className="quest-card p-3"
				style={{ display: isOpen ? "block" : "none" }}>
				<h1 className="text-3xl mb-3">{quest.title}</h1>
				<p>{quest.description}</p>

				<button className="text-white lg:mb-3" id="join"
				onClick={toOpenPage}>
					Join Quest
				</button>
			</div>
		</div>
	);
};

export default QuestCard;
