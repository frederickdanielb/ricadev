import StepItem from './StepItem';
import PropTypes from 'prop-types';
import { mapCloneElement } from '../utils/Children';
import './Step.scss';
import styledComponents from 'styled-components';
const Step = ({ children, current, onClick = () => {}, linkeable }) => {
	const StepsContainer = styledComponents.div`
			margin-top: 20px;
			margin-bottom: 20px;
			flex-wrap: wrap;
			justify-content: space-between;
			align-items: center;
			border-radius: 2.5rem 2.5rem 2.5rem 2.5rem;
			box-shadow: 0 .5rem 1rem #00000026;
			background-color: ${props =>{ return props.theme ? props.theme.colors.primary: '#ffffff'}};
			width: 100%;
		`;
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
Step.Item = StepItem;
Step.propTypes = {
	/** Step.Item components stored as child of the Step component */
	children: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.oneOf([Step.Item]),
		}),
	),
	/** Current step */
	current: PropTypes.number.isRequired,
	/** Function to be called when a step is clicked */
	onClick: PropTypes.func,
};
export default Step;
