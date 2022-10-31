import styled from 'styled-components';

export const BoxContainer = styled.div`
	padding: 15px;
	text-align: ${(props) => props.textAlign};
	background-color: ${(props) => props.theme.colors.primary};
	color: #ffffff;
	width: fit-content;
`;
export const TopText = styled.h5`
	font-weight: bold;
`;
export const MiddleText = styled.h6``;
export const BottomText = styled.small``;
