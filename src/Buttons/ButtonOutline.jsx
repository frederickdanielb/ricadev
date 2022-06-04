import PropTypes from 'prop-types';
import { Outline } from './Styles';

const ButtonOutline = ({
	primary,
	block,
	rounded,
	secondary,
	onClick,
	disabled,
	children,
	...restProps
}) => {
	return (
		<Outline
			primary={primary}
			block={block}
			rounded={rounded}
			secondary={secondary}
			onClick={onClick}
			disabled={disabled}
			{...restProps}
		>
			{children}
		</Outline>
	);
};

ButtonOutline.propTypes = {
	block: PropTypes.bool,
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
	disabled: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
	primary: PropTypes.bool,
	rounded: PropTypes.bool,
	secondary: PropTypes.bool,
};
export default ButtonOutline;
