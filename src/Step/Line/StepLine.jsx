import StepLineItem from './StepLineItem';
import PropTypes from 'prop-types';
import { mapCloneElement } from '../../utils/Children';
import './Step.scss';
import { StepsContainer } from './styled';
const StepLine = ({ children, current, onClick = () => {}, linkeable }) => {
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
		<StepsContainer>
			<ul className="progress-tracker progress-tracker--text progress-tracker--center m-0 mt-4">
				{items}
			</ul>
		</StepsContainer>
	);
};
StepLine.Item = StepLineItem;
StepLine.propTypes = {
	/** StepLine.Item components stored as child of the StepLine component */
	children: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.oneOf([StepLine.Item]),
		}),
	),
	/** Current step */
	current: PropTypes.number.isRequired,
	/** Function to be called when a step is clicked */
	onClick: PropTypes.func,
};
export default StepLine;
