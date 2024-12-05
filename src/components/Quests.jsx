import { useState } from "react";
import QuestCard from "./QuestCard";
import "../styles.css";
import Quest from "../quest.json";

const Quests = () => {
	const [openQuestCardId, setOpenQuestCardId] = useState(false);
	return (
		<section className="quest-section" id="quest-section">
			{Quest.map((quest) => (
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
