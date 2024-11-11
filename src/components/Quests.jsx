import { useState } from "react";
import quests from "../quest.json";
import QuestCard from "./QuestCard";
import "../styles.css";

const Quests = () => {
	const [openQuestCardId, setOpenQuestCardId] = useState(false);

	return (
		<section className="quest-section" id="quest-section">
			{quests.map((quest) => (
				<QuestCard
					key={quest.id}
					quest={quest}
					openQuestCardId={openQuestCardId}
					setOpenQuestCardId={setOpenQuestCardId}
				/>
			))}
		</section>
	);
};

export default Quests;
