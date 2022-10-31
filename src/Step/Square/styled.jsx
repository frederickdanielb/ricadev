import styled from 'styled-components';

const StepsContainer = styled.div`
	margin-top: 20px;
	margin-bottom: 20px;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	border-radius: 0.3rem 0.3rem 0.3rem 0.3rem;
	box-shadow: 0 0.5rem 1rem #00000026;
	color: white;
	background-color: ${(props) => {
		return props.theme ? props.theme.colors.primary : '#ffffff';
	}};
	width: 100%;
`;
const StepItemBox = styled.ul`
	text-align: center;
	display: flex;
	padding-left: 0px;
`;
const StepItemContainer = styled.li`
	display: inline-block;
	font-size: 14px;
	letter-spacing: 0.03em;
	flex: 1 1 0%;
	margin: 0;
	min-width: 24px;
	padding: 10px 0 0 0; /*
	text-align: center;*/
	background-color: ${(props) => {
		return props.isCompleted ? props.theme.colors.secondary : props.theme.colors.primary;
	}};
	/*	opacity: ${(props) => (props.isCompleted ? 0.7 : 1)};*/
	${(props) =>
		props.isCompleted
			? 'box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,\n		rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,\n		rgba(0, 0, 0, 0.09) 0px -3px 5px;'
			: null}
`;
export { StepsContainer, StepItemContainer, StepItemBox };
