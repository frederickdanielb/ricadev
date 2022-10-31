import { BottomText, BoxContainer, MiddleText, TopText } from './styled';

const BoxSimple = ({ textAlign = 'left', topText, middleText, bottomText }) => {
	return (
		<BoxContainer textAlign={textAlign}>
			<TopText>{topText}</TopText>
			<MiddleText>{middleText}</MiddleText>
			<BottomText>{bottomText}</BottomText>
		</BoxContainer>
	);
};

export default BoxSimple;
