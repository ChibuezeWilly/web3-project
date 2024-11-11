import BackgroundImage from '../assets/BackgroundImage.jpg'
import Quests from "../components/Quests";
import Navbar from "../components/Navbar";

const QuestPage = () => {
	return (
		<div
			className="background-container relative"
			style={{
				background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${BackgroundImage})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				overflowX: "hidden",
				backgroundRepeat: "no-repeat",
			}}>
			<Navbar />		
			<Quests />
		</div>
	);
};

export default QuestPage;
