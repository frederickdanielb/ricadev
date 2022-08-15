const StepsContainer = styled.div`
	margin-top: 20px;
	margin-bottom: 20px;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	border-radius: 2.5rem 2.5rem 2.5rem 2.5rem;
	box-shadow: 0 0.5rem 1rem #00000026;
	background-color: ${(props) => {
		return props.theme ? props.theme.colors.primary : '#ffffff';
	}};
	width: 100%;
`;
export {StepsContainer, items}