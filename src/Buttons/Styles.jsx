import styled from 'styled-components';

export const Solid = styled.button`
	background-color: ${(props) => {
		return props.theme && props.primary
			? props.theme.colors.primary
			: props.theme && props.secondary
			? props.theme.colors.secondary
			: '#000';
	}};
	color: white;
	padding: 9px 20px;
	box-shadow: 1px 11px 20px 0px rgba(239, 63, 62, 0.12);
	border: 1px solid
		${(props) => {
			return props.theme && props.primary
				? props.theme.colors.primary
				: props.theme && props.secondary
				? props.theme.colors.secondary
				: '#000';
		}};
	&:hover {
		transition: 0.3s ease-in-out;
		background-color: white;
		color: ${(props) => {
			return props.theme && props.primary
				? props.theme.colors.primary
				: props.theme && props.secondary
				? props.theme.colors.secondary
				: '#000';
		}};
		box-shadow: 1px 11px 20px 0px rgba(239, 63, 62, 0.22);
	}
	${(props) => {
		return props.rounded && 'border-radius: 5px';
	}};
	${(props) => {
		return props.block && 'width: 100%';
	}};
`;

export const Outline = styled.button`
	background-color: white;
	color: ${(props) => {
		return props.theme && props.secondary
			? props.theme.colors.secondary
			: props.theme && props.primary
			? props.theme.colors.primary
			: '#000';
	}};
	padding: 9px 20px;
	box-shadow: 1px 11px 20px 0px rgba(239, 63, 62, 0.12);
	border: 1px solid
		${(props) => {
			return props.theme && props.secondary
				? props.theme.colors.secondary
				: props.theme && props.primary
				? props.theme.colors.primary
				: '#000';
		}};
	&:hover {
		transition: 0.3s ease-in-out;
		background-color: ${(props) => {
			return props.theme && props.secondary
				? props.theme.colors.secondary
				: props.theme && props.primary
				? props.theme.colors.primary
				: '#000';
		}};
		color: white;
		box-shadow: 1px 11px 20px 0px rgba(239, 63, 62, 0.22);
	}
	${(props) => {
		return props.rounded && 'border-radius: 5px';
	}};
	${(props) => {
		return props.block && 'width: 100%';
	}};
`;
