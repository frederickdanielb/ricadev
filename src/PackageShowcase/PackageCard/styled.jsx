import styled from 'styled-components';

export const IncludeList = styled.ul`
	margin-top: 10px;
`;
export const IncludeListItem = styled.li`
	&:before {
		content: '*';
		left: 2px;
		top: 5px;
		width: 3px;
		height: 6px;
		margin-right: 5px;
		/*border: solid #f9dd94;*/
		border-width: 0 2px 2px 0;
		transform: rotate(45deg);
	}
`;
export const DimensionedImage = styled.img`
	aspect-ratio: 9/3;
`;
