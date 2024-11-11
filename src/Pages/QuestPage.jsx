import BackgroundImage from '../assets/BackgroundImage.jpg'
import Quests from "../components/Quests";
import Navbar from "../components/Navbar";

const QuestPage = () => {
	return (
		<div
			className="background-container relative"
			style={{
				
			}}>
			<Navbar />		
			<Quests />
		</div>
	);
};

export default QuestPage;
