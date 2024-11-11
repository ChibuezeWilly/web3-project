import { useEffect} from "react";
import "../styles.css";

const QuestCard = ({ quest, openQuestCardId, setOpenQuestCardId }) => {
	const isOpen = openQuestCardId === quest.id;

	const toggleQuestCard = () => {
		if (isOpen) {
			setOpenQuestCardId(false); // Close if already open
		} else {
			setOpenQuestCardId(quest.id); // Open the current quest card
		}
	};
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

	return (
		<div className={`quest-item ${quest.className}`} id={quest.id}>
			<img src={quest.image} onClick={toggleQuestCard} />
			<div
				className="quest-card p-3"
				style={{ display: isOpen ? "block" : "none" }}>
				<h1 className="text-3xl mb-3">{quest.title}</h1>
				<p>{quest.description}</p>

				<button className="text-white lg:mb-3" id="join">
					Join Quest
				</button>
			</div>
		</div>
	);
};

export default QuestCard;
