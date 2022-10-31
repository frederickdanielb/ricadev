import { StepItemContainer } from '../styled';

const StepSquareItem = ({ index, title, description, isCompleted, onClick }) => {
	const handleClick = () => {
		if (!isCompleted) onClick(index);
	};
	return (
		<StepItemContainer isCompleted={isCompleted} onClick={handleClick}>
			<div></div>
			<div>
				<h4>{title}</h4>
				<div>{description && description}</div>
			</div>
		</StepItemContainer>
	);
};
export default StepSquareItem;
