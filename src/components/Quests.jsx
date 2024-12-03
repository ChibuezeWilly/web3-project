import { useState, useEffect } from "react";
import Spinner from './Spinner'
import QuestCard from "./QuestCard";
import "../styles.css";

const Quests = () => {
	const [quests, setQuests] = useState([]);
	const [loading, setLoading] = useState(true);
	const apiUrl = '/api/quest'

	useEffect(() => {
		const getQuest = async () => {
			try {
				const res = await fetch(apiUrl);
				const data = await res.json();
				setQuests(data);
			} catch (error) {
				console.log("Error fetching data", error);
			} finally {
				setLoading(false);
			}
		};

		getQuest();
	}, []);
	const [openQuestCardId, setOpenQuestCardId] = useState(false);
	return (
		<section className="quest-section" id="quest-section">
			{loading ? (
				<Spinner loading = {loading} />
			) : (
				quests.map((quest) => (
					<QuestCard
						key={quest.id}
						quest={quest}
						openQuestCardId={openQuestCardId}
						setOpenQuestCardId={setOpenQuestCardId}
					/>
				))
			)}
		</section>
	);
};

export default Quests;
