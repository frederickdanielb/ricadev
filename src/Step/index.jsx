import StepLine from './Line';
import StepSquare from './Square';

const Step = ({ type = 'line', current, onClick, linkable = false, items = [], children }) => {
	return (
		<>
			{type === 'line' && (
				<StepLine current={current} onClick={onClick} linkable={linkable} children={children} />
			)}
			{type === 'square' && (
				<StepSquare current={current} onClick={onClick} linkable={linkable} items={items} />
			)}
		</>
	);
};

export default Step;
