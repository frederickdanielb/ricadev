import StepItem from "./StepItem";
import PropTypes from "prop-types";
import { mapCloneElement } from "../utils/Children";
import "./Step.scss"
const Step = ({ children, current, onClick = () => {}, linkeable }) => {
		const items = mapCloneElement(children, (item, index) => {
		const itemProps = {
			index: index,
			isActive: index === current,
			isCompleted: index < current,
			onClick: () => (!linkeable ? onClick(index) : null),
			...item.props,
		};
		return itemProps;
	});
	return (
		<div className="fullwidth_">
			<div className="container_ separator_">
				<ul className="progress-tracker progress-tracker--text progress-tracker--center m-0 mt-4">
					{items}
				</ul>
			</div>
		</div>
	);
};
Step.Item = StepItem;
Step.propTypes = {
	/** Step.Item components stored as child of the Step component */
	children: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.oneOf([Step.Item]),
		})
	),
	/** Current step */
	current: PropTypes.number.isRequired,
	/** Function to be called when a step is clicked */
	onClick: PropTypes.func
};
export default Step;
