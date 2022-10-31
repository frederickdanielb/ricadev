import { StepItemBox, StepsContainer } from './styled';
import StepSquareItem from './StepSquareItem';
const StepSquare = ({ current, onClick, linkable, items = [{ description: '', title: '' }] }) => {
	return (
		<StepsContainer>
			<StepItemBox>
				{items.map((item, index) => (
					<StepSquareItem
						key={index}
						index={index}
						title={item.title}
						description={item.description}
						isCompleted={index === current}
						onClick={() => (!linkable ? onClick(index) : null)}
					/>
				))}
			</StepItemBox>
		</StepsContainer>
	);
};
export default StepSquare;
