import { FadeLoader } from "react-spinners";
const Spinner = ({loading}) => {
	const override = {
		display: "block",
		margin: "0 auto",
		borderColor: "red",
	};
	return (
		<div className="text-center">
			<FadeLoader
				color={"#fff"}
				loading={loading}
				cssOverride={override}
				size={150}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</div>
	);
};

export default Spinner;
