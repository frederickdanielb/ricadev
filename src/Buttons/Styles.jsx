import styled from 'styled-components';

export const Solid = styled.button`
	line-height: 20px;
	font-size: 16px;
	font-weight: 700;
	border-radius: 0;
	text-decoration: none;
	text-transform: uppercase;
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
	&:disabled {
		pointer-events: none;
		opacity: 0.65;
	}
`;

export const Outline = styled.button`
	line-height: 20px;
	font-size: 16px;
	font-weight: 700;
	border-radius: 0;
	text-decoration: none;
	text-transform: uppercase;
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
	&:disabled {
		pointer-events: none;
		opacity: 0.65;
	}
`;

export const Rounded = styled.button`
	${(props) => {
		return props.block && 'width: 100%';
	}};
	${(props) => {
		return props.type === 'primary' && `background-color: ${props.theme.colors.primary};`;
	}};
	${(props) => {
		return props.type === 'secondary' && `background-color: ${props.theme.colors.secondary};`;
	}};
	${(props) => {
		return props.type === 'default' && `background-color: ${props.theme.colors.default};`;
	}};

	line-height: 20px;
	text-transform: uppercase;
	font-size: 16px;
	font-weight: 700;
	text-decoration: none;
	transition: 0.3s ease-in-out;
	padding: 10px 20px;
	margin-bottom: 20px;
	display: inline-block;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	user-select: none;
	border: 1px solid transparent;
	border-radius: ${(props) => props.theme.borderRadius.button};

	color: ${(props) => props.theme.colors.white};
	box-shadow: 1px 11px 20px 0px rgba(239, 63, 62, 0.12);

	&:hover {
		transition: 0.3s ease-in-out;

		${(props) => {
			return props.type === 'primary' && `background-color: ${props.theme.colors.primary};`;
		}};
		${(props) => {
			return props.type === 'secondary' && `background-color: ${props.theme.colors.secondary};`;
		}};
		${(props) => {
			return props.type === 'default' && `background-color: ${props.theme.colors.default};`;
		}};
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
	&:disabled {
		pointer-events: none;
		opacity: 0.65;
	}
`;
