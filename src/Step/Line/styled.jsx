import styled from 'styled-components';

const StepsContainer = styled.div`
	margin-top: 20px;
	margin-bottom: 20px;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	border-radius: 0.3rem 0.3rem 0.3rem 0.3rem;
	box-shadow: 0 0.5rem 1rem #00000026;
	background-color: ${(props) => {
		return props.theme ? props.theme.colors.primary : '#ffffff';
	}};
	width: 100%;
`;
export { StepsContainer };
